on(`click:momentum-burn`, (eventInfo) => {
  log(`click:momentum-burn`, eventInfo);
  getAttrs(["momentum", "momentum_reset"], (data) => {
    log(`click:momentum-burn`, data);
    let currentMomentum = normalizeAttr(data["momentum"]);
    let momentumReset = normalizeAttr(data["momentum_reset"]);
    let newValue = Math.min(currentMomentum, momentumReset);
    if (newValue != currentMomentum) {
      return setAttrs({
        momentum: newValue
      });
    }
  });
  return;
});

new AttrClampListener("momentum");