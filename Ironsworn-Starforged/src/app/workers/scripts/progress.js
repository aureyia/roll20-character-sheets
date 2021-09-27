const maxProgressBoxes = 10;
const maxProgressTicksPerBox = 4;

const maxProgressTrackTicks = maxProgressBoxes * maxProgressTicksPerBox;
const progressIntegers = Array.from(
  { length: maxProgressBoxes },
  (element, index) => index + 1
);

// TODO instead of having individual dropdowns that are recalculated - consider the following:
// * default action (add button or just clicking the track): mark the amount of progress appropriate to the rank. e.g. troublesome => 3 boxes
// * a button to subtract
// * a modal to set/add the progress numerically. e.g. "7, plus 3 ticks", "add 3 ticks", "subtract 3 ticks", etc
// this could be accompanied by migration to decimal-based (or integer tick-based) progress tracking. then it's a single number rather than
// should prob wait until jquery is available though for html element manipulation...
// the most elegant way i can think of to handle the calculation is determining the quotient (=full boxes) and remainder (=additional ticks). boxes up to the quotient are full. if there's a remainder, the box immediately following will have ticks equal to the remainder, any remaining boxes will be empty.

on(
  'change:repeating_progress:mark_progress change:repeating_vow:mark_progress change:repeating_connection:mark_progress',
  function (values) {
    const type = values.sourceAttribute.match(/repeating_(.*?)_/)[1];
    const rankValue = `repeating_${type}_rank`;
    const progressBoxAttrs = progressIntegers.map(
      (progressInt) => `repeating_${type}_progress_${progressInt}`
    );
    updateProgressBoxes({
      attributes: progressBoxAttrs,
      rank: { kind: 'attribute', value: rankValue },
    });
  }
);

function updateProgressBoxes(opts) {
  getAttrs(opts.attributes, (attrValues) => {
    const progress = opts.attributes.map((box) => normalizeAttr(attrValues[box]));

    opts.rank.kind === 'static'
      ? generateMarkAndUpdateProgress(
          opts.rank.value,
          progress,
          opts.attributes
        )
      : getAttrs([opts.rank.value], (value) => {
          generateMarkAndUpdateProgress(
            normalizeAttr(value[opts.rank.value]),
            progress,
            opts.attributes
          );
        });
  });
}

function generateMarkAndUpdateProgress(rank, progress, attributes) {
  const ticksMarked = chosenChallengeRank(rank);
  updateProgress(ticksMarked, progress, attributes);
}

function updateProgress(ticksMarked, progressValues, attributes) {
  const progressTotalTicks = progressValues.reduce(
    (a, b) => a + b,
    ticksMarked
  );
  const quotient = Math.trunc(progressTotalTicks / maxProgressTicksPerBox);
  const remainder = progressTotalTicks % maxProgressTicksPerBox;
  const newProgressBoxValues = Array.from(
    { length: maxProgressBoxes },
    (element, index) => {
      let ticks;
      if (index < quotient) {
        ticks = maxProgressTicksPerBox;
      } else if (index == quotient) {
        ticks = remainder;
      } else {
        ticks = 0;
      }
      return [attributes[index], ticks];
    }
  );
  setAttrs(Object.fromEntries(newProgressBoxValues));
}

// TODO: reimplement as a map generated from entries()-style json - or entries from a regular ol' object
function chosenChallengeRank(rank) {
  switch (rank) {
    case 1:
      return 12;
    case 2:
      return 8;
    case 3:
      return 4;
    case 4:
      return 2;
    case 5:
      return 1;
    default:
      return null;
  }
}

on(
  'change:repeating_progress:clear_progress change:repeating_vow:clear_progress change:repeating_connection:clear_progress',
  function (values) {
    const type = values.sourceAttribute.match(/repeating_(.*?)_/)[1];
    const progressEntries = progressIntegers.map((progressString) => [
      `repeating_${type}_progress_${progressString}`,
      0,
    ]);
    setAttrs(Object.fromEntries(progressEntries));
  }
);

on('change:repeating_progress:challenge-show-button', function (eventInfo) {
  setAttrs({
    'repeating_progress_challenge-show': btnValue(eventInfo),
  });
});
