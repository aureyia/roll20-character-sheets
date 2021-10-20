const actionScoreMax = 10;

on("clicked:roll-action", function(eventInfo) {
  // let baseTemplate =
  let templateData = eventValue(eventInfo);

  // TODO: migrate all possible template variables to this function?
  // really, the tricky bit is the move name! best bet long term might be to separate functions for each move? hmm.
  startRoll(templateData, data => {
    log(data);
    let momentum = data.results.momentum.result;
    let adds = data.results.adds.result;
    let stat = data.results.stat.result;
    let actionDie = data.results.actionDie.result;

    // negative momentum cancel
    if (momentum + actionDie == 0) {
      actionDie = 0;
    };

    let actionScore = Math.min((actionDie + adds + stat), actionScoreMax);

    const computed = {
      actionScore,
      actionDie,
      rollId: data.rollId,
    };
    log("computed", computed);
    finishRoll(data.rollId, computed);
  });
});

on("clicked:roll-progress", function(eventInfo) {
  let templateData = `&{template:ironsworn_move} {{challengeDie1=[[d10]]}} {{challengeDie2=[[d10]]}} {{rollId=0}} ${eventValue(eventInfo)}`;
  startRoll(templateData, data => {
    log(data);
    finishRoll(data.rollId, {
      rollId: data.rollId
    });
  });
});
