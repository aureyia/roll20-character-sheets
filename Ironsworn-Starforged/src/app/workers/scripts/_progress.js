


function progressBoxes(prefix="progress"){
  return progressBoxIndexes.map(box => `${prefix}_${box}`);
};

on('clicked:progress-clear', eventInfo => {
  const progressTrackId = eventValue(eventInfo);
  log(eventInfo);
  setAttrs({
    [progressTrackId]: 0
  });
});

const progress_events = ["clear", "recommit", "mark"]


on('clicked:progress-recommit', eventInfo => {
  // let progressTrackId = eventValue(eventInfo);
  log(eventInfo);
});

on('clicked:progress-mark', eventInfo => {
  log(eventInfo);
});




function incrementAttr(attr, amount=1) {
  getAttrs([attr], data => {
    log(data);
    setAttrs(
      {[attr]: Number(data[attr]) + Number(amount)}
    );
  });
}

function markProgress(progressAttr, rankAttr) {
  getAttrs([progressAttr, rankAttr], data => {
    const oldProgress = Number(data[progressAttr]);
    const ticksToMark = Number(progressRanks[data[rankAttr]].mark);
    const progressBoxes = progressBoxIndexes.map(
      (progressInt) => `${progressAttr}_${progressInt}`
    );

    updateProgressBoxes({
      attributes: progressBoxes,
      rank: { kind: 'attribute', value: rankValue },
    });
    // log(data);
    setAttrs({
      [progressAttr]: (oldProgress + ticksToMark)
    });
  });
}





// function updateProgressBoxes(opts) {
//   getAttrs(opts.attributes, (attrValues) => {
//     const progress = opts.attributes.map((box) => Number(attrValues[box]));

//     opts.rank.kind === 'static'
//       ? generateMarkAndUpdateProgress(
//         opts.rank.value,
//         progress,
//         opts.attributes
//       )
//       : getAttrs([opts.rank.value], (value) => {
//         generateMarkAndUpdateProgress(
//           Number(value[opts.rank.value]),
//           progress,
//           opts.attributes
//         );
//       });
//   });
// }



// on(
//   'change:repeating_progress:mark_progress change:repeating_vow:mark_progress change:repeating_connection:mark_progress',
//   function (values) {
//     const type = values.sourceAttribute.match(/repeating_(.*?)_/)[1];
//     const rankValue = `repeating_${type}_rank`;
//     const progressBoxAttrs = progressBoxIndexes.map(
//       (progressInt) => `repeating_${type}_progress_${progressInt}`
//     );
//     updateProgressBoxes({
//       attributes: progressBoxAttrs,
//       rank: { kind: 'attribute', value: rankValue },
//     });
//   }
// );

// repeating_artspecializationr_-misdjapu9aczufzlwov_ArtSpecializationChar




function generateMarkAndUpdateProgress(rank, progress, attributes) {
  const ticksMarked = chosenChallengeRank(rank);
  updateProgressFromBoxes(ticksMarked, progress, attributes);
}
