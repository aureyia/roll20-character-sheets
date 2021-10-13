on("clicked:momentum-burn", function(eventInfo) {
  log(eventInfo);
  getAttrs(["momentum_reset", "momentum"], function(rollData) {
    log(rollData);
    let momentum = Number(rollData.momentum);
    let momentum_reset = Number(rollData.momentum_reset);
    // log(currentMomentum, reset);
    if (momentum > momentum_reset) {
      const template = `&{template:alert} {{surtitle=@{character_name}}} {{header=Burn Momentum}} {{actionScore=[[@{momentum}]]}} {{customLabel1=Momentum reset}} {{customRow1=[[@{momentum_reset}]]}}`;
      startRoll(template, function(data) {
        log("startRoll", data);
        finishRoll(data.rollId, {
          momentum_reset,
          momentum
        })
      });
      setAttrs({
        ["momentum"]: momentum_reset
      });
    } else {
      return;
    }
  })
});
