on('clicked:starforged_moves', (info) => {
  startRoll(`&{template:starforged_moves} {{header=@{character_name}}} {{name=${info.htmlAttributes.value}}} {{momentum=[[@{momentum}]]}} {{action=[[{d6}]]}} {{add=[[(?{Modifier|0})]]}} {{stat=[[@{edge}]]}} {{challenge1=[[d10]]}} {{challenge2=[[d10]]}} {{preNegationActionScore=[[0]]}} {{rollNegated=[[0]]} {{momentumBurnOpportunity=[[0]]}} {{momentumBurnStrongHit=[[0]]}} {{momentumBurnWeakHit=[[0]]}} {{outcomeOpportunity=[[0]]}} {{outcomeStrongHit=[[0]]}} {{outcomeWeakHit=[[0]]}} {{outcomeMiss=[[0]]}} {{outcomeComplication=[[0]]}}`, (initialRollData) => {
   
    const intitialActionDieResult = initialRollData.results.action.result
    const momentum = initialRollData.results.momentum.result
    const add = initialRollData.results.add.result
    const stat = initialRollData.results.stat.result
    const challengeDie1Result = initialRollData.results.challenge1.result
    const challengeDie2Result = initialRollData.results.challenge2.result

    const finalisedActionDieResult = isActionDieNegatedByMomentum(intitialActionDieResult, momentum)
    const preNegationActionScore = intitialActionDieResult + stat + add
    const combinedActionResult = finalisedActionDieResult + stat + add
    const finalActionResult = combinedActionResult > 10 ? 10 : combinedActionResult
    const rollOutcome = calculateRollOutcome(finalActionResult, challengeDie1Result, challengeDie2Result)
    const momentumBurnData = isMomentumBurnAvailable(rollOutcome, momentum, challengeDie1Result, challengeDie2Result)

    finishRoll(
      initialRollData.rollId,
      {
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
        outcomeOpportunity: rollOutcome === 'opportunity' ? 1 : 0,
        outcomeStrongHit: rollOutcome === 'strongHit' ? 1 : 0,
        outcomeWeakHit: rollOutcome === 'weakHit' ? 1 : 0,
        outcomeMiss: rollOutcome === 'miss' ? 1 : 0,
        outcomeComplication: rollOutcome === 'complication' ? 1 : 0
      }
    );
  });
});

function isActionDieNegatedByMomentum(actionDie, momentum) {
  return actionDie === -momentum ? 0 : actionDie;
}

function calculateRollOutcome(finalActionResult, challengeDie1Result, challengeDie2Result) {
  if (finalActionResult > challengeDie1Result && finalActionResult > challengeDie2Result) {
    return (challengeDie1Result === challengeDie2Result) ? 'opportunity' : 'strongHit'
  } else if (finalActionResult > challengeDie1Result || finalActionResult > challengeDie2Result) {
    return 'weakHit'
  } else {
    return (challengeDie1Result === challengeDie2Result) ? 'complication' : 'miss'
  }
}

function isMomentumBurnAvailable(rollOutcome, momentum, challengeDie1Result, challengeDie2Result) {
  let weakHit = 0;
  let strongHit = 0;
  let opportunity = 0;

  if ((momentum > challengeDie1Result && momentum > challengeDie2Result) && (rollOutcome !== 'opportunity' && rollOutcome !== 'strongHit')) {
    (challengeDie1Result === challengeDie2Result) ? opportunity = 1 : strongHit = 1;
  } else if ((momentum > challengeDie1Result || momentum > challengeDie2Result) && (rollOutcome === 'complication' || rollOutcome === 'miss') ) {
    weakHit = 1;
  }

  return { weakHit, strongHit, opportunity };
}