const actionScoreMax = 10;

let ignoredChars = new RegExp("[,']", "g");

function toCamelCase(string) {
  let words = string.split(/[-_ ]/i);
  let newString = words.map((word, index) => {
    if (index == 0) {
      return word;
    } else {
      return word[0].toUpperCase() + word.slice(1);
    }
  }).join("");
  return newString;
}

function toKebabCase(string) {
  let words = string.split(/([A-Z])/);
  return words.join("-").replace(/[-_ ]/i, "-").toLowerCase();
}

function actionRollTpl(actionDie='[[1d6]]', stat, adds) {

};

on("clicked:roll-action", function(eventInfo) {
  log("eventInfo", eventInfo);
  // default values,
  let args = {
    ["action-die"]: `[[1d6]]`,
    ["challenge-die-1"]: `[[1d10]]`,
    ["challenge-die-2"]: `[[1d10]]`,
    adds: `[[(?{Adds|0})]]`,
    stat: `[[(?{Stat|0})]]`,
    surtitle: `@{character_name}`
  };
  let overrides = elementData(eventInfo);
  Object.assign(args, overrides);
  let template = `&{template:ironsworn_move} {{action-score=[[${args["action-die"]}+${args.stat}+${args.adds}]]}} {{action-die=$[[0]]}} {{stat=$[[1]]}} {{adds=$[[2]]}} {{challenge-die-1=${args["challenge-die-1"]}}} {{challenge-die-2=${args["challenge-die-2"]}}} {{momentum=[[@{momentum}]]}} {{surtitle=${args.surtitle}}} {{header=^{${args["i18n-header"]||args["i18n-aria-label"]}}}} {{icon=action-roll}}`;
  log("roll-action template", template);
  startRoll(template, function(rollData) {
    log("rollData", rollData);
    const computed = {};
    for (const key in rollData.results) {
      computed[key] = rollData.results[key].result;
    }

    if (computed["action-die"] && (computed.momentum + computed["action-die"] == 0)) {
      computed["action-die"] = 0;
    };
    computed["action-score"] = Math.min((computed["action-die"] + computed.adds + computed.stat), actionScoreMax);
    log("computed", computed);
    finishRoll(rollData.rollId, computed);
  });
});