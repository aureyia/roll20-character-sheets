

on("clicked:ask-the-oracle", function(eventInfo) {
  const matches = [11, 22, 33, 44, 55, 66, 77, 88, 99, 100]
  const odds = getBtnValue(eventInfo);
  // should be the same as the 'odds' listing in the book.
  startRoll(
    `&{template:ask_the_oracle} {{odds=${odds}}} {{roll1=1d100}}`
    , function(data) {
      const total1 = data.results.roll1.result
      let computedString = total1 >= odds ? "Yes" : "No";
      if (matches.includes(total1)) {
        computedString = ("hell "+computedString+"!").toUpperCase()
      }
      finishRoll(data.rollId, {
        roll1: computedString
      });
    });
});


