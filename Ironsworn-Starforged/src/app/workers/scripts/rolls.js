on("clicked:starforged_moves", (info) => {
  const buttonValue = JSON.parse(info.htmlAttributes.value);
  const rollName = buttonValue.name;
  let statOptions = [];

  const handleStatOptions = (index) => {
    if (index < buttonValue.options.length) {
      const option = buttonValue.options[index];
      if (option.method === "highest" || option.method === "lowest") {
        getAttrs(option.stats, (attrValues) => {
          const statOption = Object.entries(attrValues).reduce(
            (acc, [key, attrValue]) => {
              if (
                option.method === "highest"
                  ? attrValue > acc.value
                  : attrValue < acc.value
              ) {
                return { stat: key, value: attrValue, text: option.text };
              }
              return acc;
            },
            { value: option.method === "highest" ? -Infinity : Infinity }
          );

          statOptions.push(statOption);
          handleStatOptions(index + 1);
        });
      } else if (option.method === "any") {
        if (option.stats.length > 1) {
          throw new Error('Error: More than one option for "any" method');
        }

        const stat = option.stats[0];
        const inputRequired =
          stat === "companion health" || stat === "vehicle integrity";
        statOptions.push({ stat, text: option.text, inputRequired });
        handleStatOptions(index + 1);
      }
    } else {
      roll(rollName, statOptions, buildStatQuery);

      // buildStatQuery(rollName, statOptions, (statQuery) => {
      //   roll(rollName, statQuery);
      // })
    }
  };

  handleStatOptions(0);
});

function buildAssetQueryArray(asset, abilities, rollName) {
  // TODO: Change how this works because the array will never be created.
  const assetQueryArray = Object.entries(abilities)
    .map((ability, index) => {
      console.log('index', index)
      const abilityKey = `ability_${index + 1}`;
      const value = ability[1];
      if (value === "on") {
        console.log('nom1')
        const alteredMoveData = assetTriggers[asset.name][abilityKey];
        if (alteredMoveData) {
          console.log('nom2')
          alteredMoveData.moves.forEach((move) => {
            if (move === rollName) {
              console.log('nom3')
              alteredMoveData.options.forEach((option) => {
                if (option.method === "any") {
                  console.log('nom4')
                  option.stats.forEach((stat) => {
                    return `${option.text} (${asset.name}),@{${stat}}`;
                  });
                } else if (
                  option.method === "highest" ||
                  option.method === "lowest"
                ) {
                  console.log('nom5')
                  getAttrs(option.stats, (attrValues) => {
                    const statOption = Object.entries(attrValues).reduce(
                      (acc, [key, attrValue]) => {
                        if (
                          option.method === "highest"
                            ? attrValue > acc.value
                            : attrValue < acc.value
                        ) {
                          return { stat: key, text: option.text };
                        }
                        return acc;
                      },
                      {
                        value:
                          option.method === "highest" ? -Infinity : Infinity,
                      }
                    );
                    const fin = `${statOption.text} (${asset.name}),@{${statOption.stat}}`
                    console.log('fin', fin)
                    return `${statOption.text} (${asset.name}),@{${statOption.stat}}`;
                  });
                }
              });
            }
          });
        }
      }
    })
    // .filter((value) => value !== undefined);

    console.log('assetQueryArray1', assetQueryArray)
    return assetQueryArray
}

function buildStatQuery(rollName, statOptions, callback) {
  getSectionIDs("repeating_assets-final", (idarray) => {
    const namesOfEnabledAssetsIds = idarray.map((id) => {
      return `repeating_assets-final_${id}_asset`;
    });

    getAttrs(namesOfEnabledAssetsIds, (assets) => {
      let assetCount = 0;

      for (const [key, value] of Object.entries(assets)) {
        let asset = { name: "", abilities: [] };
        asset.name = value;
        assetCount++;

        const regex = /repeating_assets-final_([^_]+)_asset/g;
        const id = regex.exec(key)[1];
        const abilityArray = [
          `repeating_assets-final_${id}_ability_checkbox_${value}_1`,
          `repeating_assets-final_${id}_assetcheckbox_${value}_22`,
          `repeating_assets-final_${id}_assetcheckbox_${value}_33`,
        ];

        getAttrs(abilityArray, (abilities) => {
          if (assetCount === Object.keys(assets).length) {
            // TODO: Figure out why borked
            const assetQueryArray = callback(asset, abilities, rollName);
            console.log("assetQueryArray2", assetQueryArray);
            console.log("assetQueryArray.length", assetQueryArray.length);
            console.log("statOptions.length", statOptions.length);
            if (statOptions.length === 1 && assetQueryArray.length === 0) {
              console.log("nom 1");
              const option = statOptions[0];
              const result = option.inputRequired
                ? `?{${option.stat.charAt(0).toUpperCase() +
                    option.stat.slice(1)}|0}`
                : `@{${option.stat}}`;
              return result;
            } else {
              console.log("nom 2");
              const queryArray = statOptions.map((option) => {
                return `${option.text},@{${option.stat}}`;
              });
              const result =
                assetQueryArray.length > 0
                  ? `?{Stat|${queryArray.join("|")}|${assetQueryArray.join(
                      "|"
                    )}}`
                  : `?{Stat|${queryArray.join("|")}}`;
              return result;
            }
          }
        });
      }
    });
  });
}

function roll(rollName, statOptions, callback) {
  const statQuery = callback(rollName, statOptions, buildAssetQueryArray);
  startRoll(
    `&{template:starforged_moves} {{header=@{character_name}}} {{name=${rollName}}} {{momentum=[[@{momentum}]]}} {{action=[[{d6}]]}} {{stat=[[${statQuery}]]}} {{add=[[(?{Modifier|0})]]}} {{challenge1=[[d10]]}} {{challenge2=[[d10]]}} {{preNegationActionScore=[[0]]}} {{rollNegated=[[0]]}} {{momentumBurnOpportunity=[[0]]}} {{momentumBurnStrongHit=[[0]]}} {{momentumBurnWeakHit=[[0]]}} {{outcomeOpportunity=[[0]]}} {{outcomeStrongHit=[[0]]}} {{outcomeWeakHit=[[0]]}} {{outcomeMiss=[[0]]}} {{outcomeComplication=[[0]]}}`,
    async (initialRollData) => {
      const intitialActionDieResult = initialRollData.results.action.result;
      const momentum = initialRollData.results.momentum.result;
      const add = initialRollData.results.add.result;
      const stat = initialRollData.results.stat.result;
      const challengeDie1Result = initialRollData.results.challenge1.result;
      const challengeDie2Result = initialRollData.results.challenge2.result;

      const finalisedActionDieResult = isActionDieNegatedByMomentum(
        intitialActionDieResult,
        momentum
      );
      const preNegationActionScore = intitialActionDieResult + stat + add;
      const combinedActionResult = finalisedActionDieResult + stat + add;
      const finalActionResult =
        combinedActionResult > 10 ? 10 : combinedActionResult;
      const rollOutcome = calculateRollOutcome(
        finalActionResult,
        challengeDie1Result,
        challengeDie2Result
      );
      const momentumBurnData = isMomentumBurnAvailable(
        rollOutcome,
        momentum,
        challengeDie1Result,
        challengeDie2Result
      );

      finishRoll(initialRollData.rollId, {
        preNegationActionScore: preNegationActionScore,
        action: finalActionResult,
        add: add,
        stat: stat,
        rollNegated: finalisedActionDieResult === 0 ? 1 : 0,
        challenge1: challengeDie1Result,
        challenge2: challengeDie2Result,
        momentum: momentum,
        momentumBurnWeakHit: momentumBurnData.weakHit,
        momentumBurnStrongHit: momentumBurnData.strongHit,
        momentumBurnOpportunity: momentumBurnData.opportunity,
        outcomeOpportunity: rollOutcome === "opportunity" ? 1 : 0,
        outcomeStrongHit: rollOutcome === "strongHit" ? 1 : 0,
        outcomeWeakHit: rollOutcome === "weakHit" ? 1 : 0,
        outcomeMiss: rollOutcome === "miss" ? 1 : 0,
        outcomeComplication: rollOutcome === "complication" ? 1 : 0,
      });
    }
  );
}

function isActionDieNegatedByMomentum(actionDie, momentum) {
  return actionDie === -momentum ? 0 : actionDie;
}

function calculateRollOutcome(
  finalActionResult,
  challengeDie1Result,
  challengeDie2Result
) {
  if (
    finalActionResult > challengeDie1Result &&
    finalActionResult > challengeDie2Result
  ) {
    return challengeDie1Result === challengeDie2Result
      ? "opportunity"
      : "strongHit";
  } else if (
    finalActionResult > challengeDie1Result ||
    finalActionResult > challengeDie2Result
  ) {
    return "weakHit";
  } else {
    return challengeDie1Result === challengeDie2Result
      ? "complication"
      : "miss";
  }
}

function isMomentumBurnAvailable(
  rollOutcome,
  momentum,
  challengeDie1Result,
  challengeDie2Result
) {
  let weakHit = 0;
  let strongHit = 0;
  let opportunity = 0;

  if (
    momentum > challengeDie1Result &&
    momentum > challengeDie2Result &&
    rollOutcome !== "opportunity" && rollOutcome !== "strongHit"
  ) {
    challengeDie1Result === challengeDie2Result
      ? (opportunity = 1)
      : (strongHit = 1);
  } else if (
    (momentum > challengeDie1Result || momentum > challengeDie2Result) &&
    (rollOutcome === "complication" || rollOutcome === "miss")
  ) {
    weakHit = 1;
  }

  return { weakHit, strongHit, opportunity };
}
