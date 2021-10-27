const actionScoreMax = 10;

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
  // let statAttr = args.stat.replace(/\[\[@{(.*)}\]\]/, "$1");
  if (args.stat.match(/asset-.+?-meter/)) {
    // derive asset id, find repeating stat?
    let assetId = args.stat.replace(/.*?(asset-.+?)-meter.*/, "$1");
    args.surtitle=args.surtitle + `: ^{${assetId}-name}`;
    // getSectionIDs("assets", function(idArr) {
    //   let repAttrs = idArr.map(id => `${id}_repeating_assets_${statAttr}`);
    //   getAttrs(repAttrs, function (repAttrs))
    // });



  };
  let template = `&{template:ironsworn_move} {{actionScore=[[${args["action-die"]}+${args.stat}+${args.adds}]]}} {{actionDie=$[[0]]}} {{stat=$[[1]]}} {{adds=$[[2]]}} {{challengeDie1=${args["challenge-die-1"]}}} {{challengeDie2=${args["challenge-die-2"]}}} {{momentum=[[@{momentum}]]}} {{surtitle=${args.surtitle}}} {{header=^{${args["i18n-header"]||args["i18n-aria-label"]}}}} {{icon=action-roll}}`;
  log("roll-action template", template);
  startRoll(template, function(rollData) {
    log("rollData",rollData);
    let momentum = rollData.results.momentum.result;
    let adds = rollData.results.adds.result;
    let stat = rollData.results.stat.result;
    let actionDie = rollData.results.actionDie.result;

    // negative momentum cancel
    if (momentum + actionDie == 0) {
      actionDie = 0;
    };

    let actionScore = Math.min((actionDie + adds + stat), actionScoreMax);

    const computed = {
      actionScore,
      actionDie,
      rollId: rollData.rollId,
    };
    log("computed", computed);
    finishRoll(rollData.rollId, computed);
  });
});