// utility functions used by various workers

// gets value of action button, which lacks the newValue property

function toInt(value) {
  if (typeof parseInt(value) != undefined) {
    return parseInt(value);
  }
  else {return 0}
}

function btnValue(eventInfo) {
  return eventInfo.htmlAttributes.value;
}

// listen for clicked:set_foobar and uses the button value to update attr_foobar
function listenSetAttr(attribute, trigger = `set_${attribute}`) {
  on(`clicked:${trigger}`, (eventInfo) =>
    {return setAttrs(
      { [attribute]: btnValue(eventInfo) }
      // console.log(
      //   "[listenSetAttr]",
      //   eventInfo.triggerName,
      //   "sets value:",
      //   btnValue(eventInfo)
      // );
    )}
  );
}

async function listenAddAttr(attribute) {
  on(`clicked:add_${attribute}`, (eventInfo) =>
    getAttrs([attribute, `${attribute}_max`], (values) => {
      // console.log('listenAddAttr', values);
      return setAttrs({
        [attribute]: Math.min(
          parseInt(values[attribute]) + parseInt(btnValue(eventInfo)),
          parseInt(values[`${attribute}_max`])
        ),
      });
    })
  );
}

async function listenSubtractAttr(attribute) {
  on(`clicked:subtract_${attribute}`, (eventInfo) =>
    getAttrs([attribute, `${attribute}_min`], (values) => {
      // console.log('listenSubtractAttr', values);
      return setAttrs({
        [attribute]: Math.max(
          parseInt(values[attribute]) - parseInt(btnValue(eventInfo)),
          parseInt(values[`${attribute}_min`])
        ),
      });
    })
  );
}

// for setting hidden inputs so that 'fake' spinner/radio buttons can be restyled when their attribute is at minimum or maximum

async function listenSetMinMax(attribute) {
  on(`change:${attribute}`),
    () => {
      getAttrs(
        [attribute, `${attribute}_min`, `${attribute}_max`],
        (values) => {
          console.log("listenSetMinMax received values:", values)
          if (toInt(values[attribute]) <= toInt(values[`${attribute}_min`])) {
            return setAttrs({
              [`${attribute}_minmax`]: 'min',
            });
          } else if (toInt(values[attribute]) >= toInt(values[`${attribute}_max`])) {
            return setAttrs({
              [`${attribute}_minmax`]: 'max',
            });
          } else {
            return setAttrs({
              [`${attribute}_minmax`]: 'false',
            });
          }
        }
      );
    };
}
