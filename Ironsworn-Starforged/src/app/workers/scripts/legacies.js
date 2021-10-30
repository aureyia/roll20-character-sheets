

on(`clicked:legacy-mark`, (eventInfo) => {
  log(eventInfo);
  let legacy = eventInfo.htmlAttributes["data-legacy"];
  let ticks = Number(eventInfo.htmlAttributes["data-ticks"]);
  incrementProgress(`legacy_${legacy}`, ticks, true);
});

