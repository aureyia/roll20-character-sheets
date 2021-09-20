// utility functions used by various workers

// gets value of action button, which lacks the newValue property
function btnValue(eventInfo) {
  return eventInfo.htmlAttributes.value;
}

// listen for clicked:set_foobar and uses the button value to update attr_foobar
function listenAttrBtn(attribute, trigger = `set_${attribute}`) {
  on(`clicked:${trigger}`, (eventInfo) =>
    setAttrs(
      { [attribute]: btnValue(eventInfo) }
      // console.log(
      //   "[listenAttrBtn]",
      //   eventInfo.triggerName,
      //   "sets value:",
      //   btnValue(eventInfo)
      // );
    )
  );
}
