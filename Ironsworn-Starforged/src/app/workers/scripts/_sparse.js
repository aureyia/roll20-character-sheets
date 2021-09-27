
on("clicked:activate", function(eventInfo) {
  console.log("Activate button clicked!", eventInfo)
});

on("clicked:set-sheet-character-display", function(eventInfo) {
  setAttrs({
    ["sheet-character-display"]: eventInfo.htmlAttributes.value
  })
});

on("clicked:set-sheet-shared-display", function(eventInfo) {
  setAttrs({
    ["sheet-shared-display"]: eventInfo.htmlAttributes.value
  })
});

on("clicked:burn-momentum", function(eventInfo) {
  getAttrs(["momentum_reset", "momentum"], function(data) {
    let currentMomentum = Number(data.momentum.valueOf());
    let reset = Number(data.momentum_reset.valueOf());
    if (currentMomentum >= reset) {
      let template = `&{template:default} {{name=@{character_name} burns momentum!}} {{new action score=${currentMomentum}}} {{momentum reset=${reset}}}`;
      setAttrs({
        ["momentum"]: reset
      });
      startRoll(template, function(data) {
        finishRoll(data.rollId);
      });
    } else {
      return;
    }
  })
});

