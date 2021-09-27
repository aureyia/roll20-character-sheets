function listenSetAttr(attr) {
  console.log("[Ironworker] Setting listener for attribute:", attr);
  on(`click:set-${attr}`, (eventInfo) => {
    console.log(`[Ironworker] click:set-${attr}`, eventInfo);
    setAttrs({ [attr]: eventInfo.htmlAttributes.value });
  });
};

sheets.forEach((sheet) => {
  let attr = `sheet-${sheet.name}-display`;
  console.log("[Ironworker] Setting listener for attribute:", attr);
  on(
    `click:set-${attr}`, (eventInfo) => {
      console.log(`[Ironworker] click:set-${attr}`, eventInfo);
      setAttrs({ [attr]: eventInfo.htmlAttributes.value });
    });
});

