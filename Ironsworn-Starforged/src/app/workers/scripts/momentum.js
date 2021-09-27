on(`click:burn-momentum`, (eventInfo) => {
  log(`click:burn-momentum`, eventInfo);
  getAttrs(["momentum", "momentum_reset"], (data) => {
    log(`click:burn-momentum`, data);
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