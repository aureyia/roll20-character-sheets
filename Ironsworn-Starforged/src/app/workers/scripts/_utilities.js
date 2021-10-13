
const debugMessages = true

function log(...content) {
  // shorthand wrapper for nicely labelled log output
  if (debugMessages === true)
  {
    console.log("[Ironworker]", ...content);
  }
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

function listenIncrementAttr(attr) {
  on(`clicked:increment-${attr}`, function(eventInfo) {
    log(eventInfo);
    getAttrs([attr], attrData => {
      const newValue = Number(attrData[attr]) + Number(eventValue(eventInfo));
      setAttrs({
        [attr]: newValue
      });
    });
  })
}
