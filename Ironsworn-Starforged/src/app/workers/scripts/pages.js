sheets.forEach((sheet) => {
  listenSetAttr(`sheet-${sheet.name}-display`);
});

listenSetAttr("mode");

listenSetAttr("stat-mode");
