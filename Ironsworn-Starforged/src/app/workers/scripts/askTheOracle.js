const matches = [11, 22, 33, 44, 55, 66, 77, 88, 99, 100]

const askTheOracleOdds = new Map([
  ["almost certain", 11],
  ["likely", 26],
  ["50/50", 51],
  ["unlikely", 76],
  ["small chance", 91]
])

on("clicked:ask-the-oracle", function(eventInfo) {

  const odds = eventValue(eventInfo);
  const oddsNumber = askTheOracleOdds.get(odds)
  // should be the same as the 'odds' listing in the book.
  startRoll(
    `&{template:oracle} {{name=Ask the Oracle: ${odds}}} {{roll=[[1d100]]}}`
    , function(data) {
      const total = data.results.roll.result
      let computedString = total >= oddsNumber ? "Yes" : "No";
      if (matches.includes(total)) {
        computedString = ("hell "+computedString+"!").toUpperCase()
      }
      finishRoll(data.rollId, {
        roll: computedString
      });
    });
});


