
const maxProgressBoxes = 10;
const ticksPerBox = 4;
const maxProgressTicks = maxProgressBoxes * ticksPerBox;

const challengeRanks = [
  {
    name: "none",
    legacy: 0
  },
  {
    name: "troublesome",
    mark: 12,
    legacy: 1,
  },
  {
    name: "dangerous",
    mark: 8,
    legacy: 2,
  },
  {
    name: "formidable",
    mark: 4,
    legacy: 4
  },
  {
    name: "extreme",
    mark: 2,
    legacy: 8
  },
  {
    name: "epic",
    mark: 1,
    legacy: 12
  },
  {
    name: "epic+",
    legacy: 16
  }
];

const progressBoxIndexes = Array.from(
  { length: maxProgressBoxes },
  (element, index) => index + 1
); // 1-10


function incrementProgress(progressRowId, amount=1, amountInTicks=false) {
  log("incrementProgress", ...arguments);
  // if amountInTicks = false, "amount" is a specific number of ticks
  // otherwise, it's a number of progress marks done
  const boxAttrs = progressBoxIndexes.map(boxIndex => `${progressRowId}_progress_${boxIndex}`);
  log("boxAttrs",boxAttrs);
  const progressAttrs = [...boxAttrs];
  log("progressAttrs", progressAttrs);
  const rankAttr = progressRowId+"_rank";
  if (amountInTicks == false) {
    log("rankAttr", rankAttr);
    progressAttrs.push(rankAttr);
  }
  log("progressAttrs", progressAttrs);
  getAttrs(progressAttrs, (attrData) => {
    log("progress data", attrData);
    const boxValues = boxAttrs.map(boxAttr => Number(attrData[boxAttr]));
    log(boxValues);
    const oldProgressTicks = boxValues.reduce((a,b) => a+b);
    log("oldProgressTicks", oldProgressTicks)
    let ticksDelta;
    if (amountInTicks == false) {
      const rankIndex = Number(attrData[rankAttr]);
      ticksDelta = (amount * challengeRanks[rankIndex].mark);
      log("rankIndex, ticksDelta", rankIndex, ticksDelta);
    }
    else {
      ticksDelta = amount;
    };
    setProgressTicks(progressRowId, oldProgressTicks + ticksDelta);
  });
};


// shorthand version for standard mark progress operations like "Reach a Milestone"
function markProgress(progressRowId, times=1) {
  log("markProgress", ...arguments);
  incrementProgress(progressRowId, times, false);
};

function setProgressTicks(progressRowId, toTicksValue) {
  log("setProgressTicks", ...arguments);
  if (toTicksValue > maxProgressTicks) {
    toTicksValue = maxProgressTicks;
  } else if (toTicksValue < 0) {
    toTicksValue = 0;
  }
  const boxes = progressBoxIndexes.map(boxIndex => `${progressRowId}_progress_${boxIndex}`);
  const filledBoxes = Math.trunc(toTicksValue/ticksPerBox);
  log("filledBoxes", filledBoxes);
  const ticksRemainder = toTicksValue % ticksPerBox;
  log("ticksRemainder", ticksRemainder);
  let setAttrsOpts = {};
  setAttrsOpts[`${progressRowId}_progress-filled`] = filledBoxes;
  boxes.forEach((box, index) => {
    if (index < filledBoxes) {
      setAttrsOpts[box] = ticksPerBox;
    } else if (index == filledBoxes) {
      setAttrsOpts[box] = ticksRemainder;
    } else {
      setAttrsOpts[box] = 0;
    }
  });
  log("outgoing progress data:", setAttrsOpts);
  setAttrs(setAttrsOpts);
};

// function updateProgressFromBoxes(progressRowId) {
//   // updates progress

//   // todo: change this so it can be fed a getAttrs result instead?
//   getAttrs(progressBoxes, (attrData) => {
//     log("incoming progress data", attrData);
//     const progressTicks = Object.values(attrData).map(box => Number(box)).reduce((a,b) => a+b);
//     setProgressTicks(progressRowId, progressTicks)
//   });
// };

// REPEATING SECTIONS
const repeating_progress = ["connection", "progress", "vow", "combat", "expedition", "scene-challenge"];

repeating_progress.forEach(item => {

  const repType = `repeating_${item}`;
  const changeEvent = `change:${repType}`;


  // updates filled progress when any repeating progress changes

  const progressBoxEvents = [
    `${changeEvent}:progress-filled`,
    ...progressBoxIndexes.map(boxIndex => `${changeEvent}:progress_${boxIndex}`)
  ].join(" ");

  const clickEvent = `clicked:${repType}`;

  on(`${clickEvent}:progress-mark`, eventInfo => {
    log(rowId(eventInfo), eventInfo);
    markProgress(rowId(eventInfo), 1);
  });
  on(`${clickEvent}:progress-clear`, eventInfo => {
    log(rowId(eventInfo), eventInfo);
    markProgress(rowId(eventInfo), -1);
  });

  on(`${clickEvent}:progress-recommit`, eventInfo => {
    log(rowId(eventInfo), eventInfo);
    const rankAttr = rowId(eventInfo)+"_rank";
    const nameAttr = rowId(eventInfo)+"_"+progressType(eventInfo)+"_name";
    getAttrs([rankAttr, nameAttr], attrData => {
      const rankInt = Math.min(Number(attrData[rankAttr])+1, 5);
      const newRank = challengeRanks[rankInt];
      const newRankName = newRank.name;
      //
      startRoll(`&{template:alert} {{surtitle=Recommit}} {{header=${attrData[nameAttr]}}} {{challengeDie1=[[1d10]]}} {{challengeDie2=[[1d10]]}} {{customLabel1=New Rank}} {{customRow1=${capitalize(newRankName)}}} {{customLabel2=Progress removed}} {{customRow2=""}}`, (rollData) => {
        log(rollData);
        const progressRemoved = Math.min(rollData.results.challengeDie1.result, rollData.results.challengeDie2.result);
        incrementProgress(rowId(eventInfo), (-1*progressRemoved*ticksPerBox), true);
        const computed = {
          progressRemoved,
        };
        setAttrs({
          [rankAttr]: rankInt
        });
        finishRoll(rollData.rollId, computed);
      // remove pro
      // const rankAttr = progressRowId+"_rank";
      });});
  });
  on(`${clickEvent}:progress-abandon`, eventInfo => {
    log(rowId(eventInfo), eventInfo);
  });
  on(`${clickEvent}:roll-progress`, eventInfo => {
    log(rowId(eventInfo), eventInfo);
  });
});

