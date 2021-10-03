function listenSetAttr(attr) {
  on(`clicked:set-${attr}`, function(eventInfo) {
    console.log(eventInfo);
    setAttrs({
      [attr]: eventValue(eventInfo)
    })
  });
};

listenSetAttr("sheet-character-display");
listenSetAttr("sheet-shared-display");
listenSetAttr("move-preview-display");
listenSetAttr("oracle-preview-display");

// on("clicked:set-sheet-character-display", function(eventInfo) {
//   console.log(eventInfo);
//   setAttrs({
//     ["sheet-character-display"]: eventValue(eventInfo)
//   })
// });

// on("clicked:set-sheet-shared-display", function(eventInfo) {
//   console.log(eventInfo);
//   setAttrs({
//     ["sheet-shared-display"]: eventValue(eventInfo)
//   })
// });



// sheets.forEach((sheet) => {
//   listenSetAttr(`sheet-${sheet.name}-display`);
// });

// listenSetAttr("mode");

// listenSetAttr("stat-mode");
