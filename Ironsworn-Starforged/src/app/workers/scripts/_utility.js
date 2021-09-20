// utility functions used by various workers

// gets value of action button, which lacks the newValue property
function btnValue(eventInfo) {
  return eventInfo.htmlAttributes.value;
}

// listen for clicked:set_foobar and uses the button value to update attr_foobar
function listenSetAttr(attribute, trigger = `set_${attribute}`) {
  on(`clicked:${trigger}`, (eventInfo) =>
    setAttrs(
      { [attribute]: btnValue(eventInfo) }
      // console.log(
      //   "[listenSetAttr]",
      //   eventInfo.triggerName,
      //   "sets value:",
      //   btnValue(eventInfo)
      // );
    )
  );
}

function listenAddAttr(attribute) {
  // TODO: needs to check the maximum amount
  on(`clicked:add_${attribute}`, (eventInfo) =>
    setAttrs({ [attribute]: attribute + (btnValue(eventInfo) || 1) })
  );
}

function listenSubtractAttr(attribute) {
  on(`clicked:subtract_${attribute}`, (eventInfo) =>
    setAttrs({ [attribute]: attribute - (btnValue(eventInfo) || 1) })
  );
}
