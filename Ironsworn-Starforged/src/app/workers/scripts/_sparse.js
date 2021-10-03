function eventValue(eventInfo) {
  console.log(eventInfo);
  return eventInfo.htmlAttributes.value;
}

function eventClasses(eventInfo) {
  return eventInfo.htmlAttributes.class.split(" ");
}

function eventTitle(eventInfo) {
  return eventInfo.htmlAttributes.title;
}


on("clicked:set-sheet-character-display", function(eventInfo) {
  setAttrs({
    ["sheet-character-display"]: eventValue(eventInfo)
  })
});

on("clicked:set-sheet-shared-display", function(eventInfo) {
  setAttrs({
    ["sheet-shared-display"]: eventValue(eventInfo)
  })
});

on("clicked:set-mode", function(eventInfo) {
  setAttrs({
    ["mode"]: eventValue(eventInfo)
  })
});

on("clicked:set-stat-mode", function(eventInfo) {
  setAttrs({
    ["stat-mode"]: eventValue(eventInfo)
  })
});

on("clicked:momentum-burn", function(eventInfo) {
  console.log(eventInfo);
  getAttrs(["momentum_reset", "momentum"], function(data) {
    console.log(data);
    let momentum = Number(data.momentum);
    let momentum_reset = Number(data.momentum_reset);
    // console.log(currentMomentum, reset);
    if (momentum >= momentum_reset) {
      const template = `&{template:momentum_burn} {{action_score=[[@{momentum}]]}} {{momentum_reset=[[@{momentum_reset}]]}} {{character_name=@{character_name}}}`;
      console.log(template);
      startRoll(template, function(data) {
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

// // lazy 'legacy' roll conversion
