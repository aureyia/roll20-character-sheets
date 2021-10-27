
const debugMessages = true

function log(...content) {
  // shorthand wrapper for nicely labelled log output
  if (debugMessages === true)
  {
    console.log("[Ironworker]", ...content);
  }
}

function eventAttr(eventInfo) {
  return eventInfo.htmlAttributes["data-attr"];
}

function eventMove(eventInfo) {
  return eventInfo.htmlAttributes["data-ironsworn-move"];
}

function elementData(eventInfo) {
  let data = {};
  for (const key in eventInfo.htmlAttributes) {
    if (key.match(/^data-/)) {
      let shortKey = key.replace(/^data-/, "");
      data[shortKey] = eventInfo.htmlAttributes[key];
    }
  }
  log("elementData", data);
  return data;
}


function eventValue(eventInfo) {
  return eventInfo.htmlAttributes.value;
}

function eventClasses(eventInfo) {
  return eventInfo.htmlAttributes.class.split(" ");
}

function eventTitle(eventInfo) {
  return eventInfo.htmlAttributes.title;
}

function capitalize(string) {
  return string[0].toUpperCase() + string.substring(1);
}

function rowId(eventInfo, sparse=false) {
  const srcAttr = eventInfo.sourceAttribute;
  // e.g repeating_vow_-Ml7edWzMNMiSm1invNi_progress-mark
  const identifier = srcAttr.split("_")[2];
  if (sparse==true) {
    return identifier;
  }
  else  {
    const replacement = new RegExp(`${identifier}_.+$`, "")
    return srcAttr.replace(replacement, identifier);
  }
}

function progressType(eventInfo) {
  const srcAttr = eventInfo.sourceAttribute;
  return srcAttr.split("_")[1];
}


function listenSetAttr(attr) {
  on(`clicked:set-${attr}`, function(eventInfo) {
    log(eventInfo);
    setAttrs({
      [attr]: eventValue(eventInfo)
    });
  });
};

on(`clicked:increment-attr`, function(eventInfo) {
  log(eventInfo);
  const attr = eventInfo.htmlAttributes["data-attr"];
  const increment = Number(eventInfo.htmlAttributes["data-increment"]);
  getAttrs([attr, `${attr}_max`, `${attr}_min`], attrData => {
    let attrMax;
    let attrMin;
    let oldValue = Number(attrData[attr]);
    let newValue = oldValue + increment;
    if (attrData[`${attr}_max`]) {
      attrMax = Number(attrData[`${attr}_max`]);
      newValue = Math.min(attrMax, newValue);
    }
    if (attrData[`${attr}_min`]) {
      attrMin = Number(attrData[`${attr}_min`]);
      newValue = Math.max(attrMin, newValue)
    };
    // disableIncrementBtns(attr);
    setAttrs({
      [attr]: newValue
    });
  });
});

function listenAttrMinMax(attr) {
  let watchedAttrs = [attr, attr+"_min", attr+"_max"];
  on(watchedAttrs.map(item => "change:"+item).join(" "), (eventInfo) => {
    log("listenAttrMinMax", eventInfo);
    getAttrs(watchedAttrs, attrData => {
      let min = Number(attrData[attr+"_min"]);
      let max = Number(attrData[attr+"_max"]);
      let current = Number(attrData[attr]);
      let minmaxValue = false;
      if (current >= max) {
        minmaxValue = "max"
      }
      else if (current <= min) {
        minmaxValue = "min"
      }
      log("setting", attr+"_minmax", "to", minmaxValue);
      setAttrs({
        [attr+"_minmax"]: minmaxValue
      });
    });
  });
}

const watchedResources = ["health", "spirit", "supply", "momentum"];
watchedResources.forEach(attr => listenAttrMinMax(attr));


// function disableIncrementBtns(attr) {
//   let selectBtnRoot = `button[name='act_increment-attr'][data-attr=${attr}]`;
//   let btnDisableClass = "disabled";
//   let selectPlusBtn = selectBtnRoot+`[class='increment-attr']`;
//   let selectMinusBtn = selectBtnRoot+`[class='decrement-attr']`;
//   if (newValue === attrMax) {
//     $20(selectPlusBtn).addClass(btnDisableClass);
//   }
//   else if (newValue === attrMin) {
//     $20(selectMinusBtn).addClass(btnDisableClass);
//   }
//   else {
//     $20(selectBtnRoot+`[class='disabled']`).removeClass(btnDisableClass);
//   };
// };




// utility function for setting attributes to empty strings
function wipeAttrs(attrArray, asObject = false) {
  log("wipeAttrs:", attrArray);
  const attrData = Object.fromEntries(attrArray.map(attr => [attr, ""]));
  if (asObject==false){
    setAttrs(attrData);
  } else if (asObject==true) {
    return attrData;
  }
}

function migrateAttrs(options) {
  // options object is a simple hash object.
  // it has the old attr name as a key, and the new attr name as a string value
  log("migrateAttrs: migrating attributes (key => value)")
  const oldAttrs = Object.keys(options);
  getAttrs(oldAttrs, oldAttrData => {
    const newAttrs = wipeAttrs(oldAttrs, true);
    // empty strings are set first in case one of the old attribute names overlaps with a new attribute name
    Object.keys(oldAttrData).forEach(oldKey => {
      const newKey = oldAttrs[oldKey];
      const attrValue = oldAttrData[oldKey];
      // cleans up old values by setting them to an empty string
      newAttrs[newKey] = attrValue;
    });
    log("migrateAttrs: passing options to setAttrs", newAttrs);
    setAttrs(newAttrs);
  });
};

