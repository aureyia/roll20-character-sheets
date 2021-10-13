const actionScoreMax = 10;

function resolveMoveOutcome(actionScore, challengeDie1, challengeDie2) {
  let moveOutcome, match;
  if ((actionScore > challengeDie1) && (actionScore > challengeDie2)) {
    moveOutcome = "strong hit";
  }
  else if ((actionScore > challengeDie1) || (actionScore > challengeDie2)) {
    moveOutcome = "weak hit";
  }
  else {
    moveOutcome = "miss";
  }
  if (challengeDie1 == challengeDie2) {
    match = true;
  }
  const data = {
    moveOutcome,
    match
  };
  return data;
};

function canBurnMomentum(actionScore, challengeDie1, challengeDie2, momentum) {
  if ([challengeDie1, challengeDie2].some(die => die < momentum)) {
    let currentOutcome = resolveMoveOutcome(actionScore, challengeDie1, challengeDie2).moveOutcome;
    if (currentOutcome != "strong hit") {
      let momentumOutcome = resolveMoveOutcome(momentum, challengeDie1, challengeDie2).moveOutcome;
      if (momentumOutcome != currentOutcome) {
        return momentumOutcome;
      }
    }
  }
}

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
    let challengeDie1 = data.results.challengeDie1.result;
    let challengeDie2 = data.results.challengeDie2.result;
    let cancelActionDie;
    let momentumBurn;
    let moveOutcome;
    let match;

    // negative momentum cancel
    if (momentum + actionDie == 0) {
      actionDie = 0;
    };

    let actionScore = Math.min((actionDie + adds + stat), actionScoreMax);

    const computed = {
      actionScore,
      actionDie,
      challengeDie1,
      challengeDie2,
    };
    Object.assign(computed, resolveMoveOutcome(actionScore, challengeDie1, challengeDie2));
    log("computed", computed);
    finishRoll(data.rollId, computed);
  });
});

on("clicked:roll-progress", function(eventInfo) {
  let templateData = `&{template:starforged_progress} {{challengeDie1=[[d10]]}} {{challengeDie2=[[d10]]}} ${eventValue(eventInfo)}`;
  startRoll(templateData, data => {
    log(data);
    finishRoll(data.rollId);
  });
});
