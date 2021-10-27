

const legacies = ["quests", "bonds", "discoveries"];

function markLegacy(legacy, rank=false) {
  let ticks;
  if (rank) {
    ticks = challengeRanks[rank].legacy;
  } else {
    ticks = 1;
  }
  incrementProgress(`legacy_${legacy}`, ticks, true);
};

legacies.forEach(legacy => {
  on(`clicked:legacy-mark-${legacy}`, (eventInfo) => {
    log(eventInfo);
    let ticks = Number(eventValue(eventInfo));
    markLegacy(legacy, ticks);
  })
});

