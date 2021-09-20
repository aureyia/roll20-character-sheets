on(
  "change:ship-modules_button change:ship-support-vehicles_button change:ship-crew_button change:ship-impacts_button",
  function (eventInfo) {
    const type = eventInfo.sourceAttribute.match(/(.*?)_button/)[1];
    setAttrs({
      [`${type}`]: eventInfo.newValue,
    });
  }
);
