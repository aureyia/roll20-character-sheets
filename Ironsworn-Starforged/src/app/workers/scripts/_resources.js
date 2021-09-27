
// FIXME would it work for wounded etc to set health_max to 0 instead? hmm...

//Cannot increase Health while Wounded
//Health 0 does not automatically mark an Impact in SF
// on('change:health', (eventInfo) => {
//   getAttrs(['impactWounded'], (values) => {
//     if (values.impactWounded == 'on') {
//       if (normalizeAttr(eventInfo.newValue) > normalizeAttr(eventInfo.previousValue)) {
//         return setAttrs({ health: eventInfo.previousValue });
//       }
//     }
//   });
//   return;
// });

//Cannot increase Spirit while Shaken
//Spirit 0 does not automatically mark an Impact in SF
// on('change:spirit', (eventInfo) => {
//   getAttrs(['impactShaken'], (values) => {
//     if (values.impactShaken == 'on') {
//       if (normalizeAttr(eventInfo.newValue) > normalizeAttr(eventInfo.previousValue)) {
//         return setAttrs({ spirit: eventInfo.previousValue });
//       }
//     }
//   });
//   return;
// });

//Cannot increase Supply while Unprepared
//Supply reaching 0 marks Unprepared
// on('change:supply', (eventInfo) => {
//   getAttrs(['impactUnprepared'], (values) => {
//     if (values.unprepared == 'on') {
//       if (normalizeAttr(eventInfo.newValue) > normalizeAttr(eventInfo.previousValue)) {
//         return setAttrs({ supply: eventInfo.previousValue });
//       }
//     }
//   });
//   if (normalizeAttr(eventInfo.newValue) === 0) {
//     return setAttrs({ impactUnprepared: 'on' });
//   }
//   return;
// });



// function normalizeAttr(value) {
//   if (typeof value == "string") {
//     if (value.match(/[A-z]/)) {
//       return value;
//     }
//     else {
//       return Number(value);
//     }
//   }
//   else {
//     return value;
//   }
// };

// logLoad("normalizeAttr");

// function clampValueToRange(value, minValue=value, maxValue=value) {
//   let valueClampedToMin = Math.max(
//     normalizeAttr(value),
//     normalizeAttr(minValue)
//   );
//   let valueClampedToMax = Math.min(
//     valueClampedToMin,
//     normalizeAttr(maxValue)
//   );
//   return valueClampedToMax;
// };

// logLoad("clampValueToRange");

// function clampedAttr(attr) {
//   let attrNames = [attr, `${attr}_min`, `${attr}_max`];
//   getAttrs(attrNames, (data) => {
//     log("clampedAttr", data);
//     let values = attrNames.map(item => data[item] || data[attr]);
//     let clampedValue = clampValueToRange(...values);
//     return clampedValue;
//   });
//   return;
// };




// on("sheet:opened", () => log("Sheet opened."));



// // utility functions used by various workers


// function normalizeAttr(value) {
//   if (typeof value == "string") {
//     if (value.match(/[A-z]/)) {
//       // if there's letter characters, return as a string
//       return value;
//     }
//     else {
//       // faster than parseInt or parseFloat, apparently
//       return Number(value);
//     }
//   }
//   else {return value;}
// };

// function getBtnValue(eventInfo) {
//   return normalizeAttr(eventInfo.htmlAttributes.value);
// };

// async function getAttrsWithLimits(attrs) {
//   return getAttrs(attrs.map(attr => [attr, `${attr}_max`, `${attr}_min`]).flat(1), (data) => data);
// };

// function clampValueToRange(value, minValue, maxValue) {
//   let valueClampedToMin = Math.max(value, minValue);
//   let valueClampedToMax = Math.min(valueClampedToMin, maxValue);
//   return valueClampedToMax;
// };


// // gets value of action button, which lacks the newValue property

// // allows use of Math.method() that accept numbers. experimental AF.
// // use in html syntax - value="min:momentum,momentum_max"
// // it's whitespace insensitive, currently; the Math method name is case insensitive, too
// async function parseBtnValue(eventInfo) {
//   console.log("parseBtnValue eventInfo", eventInfo);
//   const value = getBtnValue(eventInfo);
//   console.log("parseBtnValue btnValue", value);
//   if (value.match(/:/)) {
//     let valueArr = value.replace(/\s/g, "").split(":");
//     // console.log("valueArr", valueArr);
//     let operation = valueArr[0];
//     console.log("parseBtnValue operation", operation);
//     let attrNames = valueArr[1].split(",");
//     console.log("parseBtnValue attrNames", attrNames);
//     getAttrsWithLimits(attrNames, (attributes) => console.log("parseBtnValue attributes", attributes));
//     // getLimitedAttrs(attrNames, (attributes) => {
//     //   return attributes;
//       // return console.log("parseBtnValue attributes",attributes);
//       // let attributeValues = Object.values(attributes).map(newValue => normalizeAttr(newValue));
//       // console.log("parseBtnValue attributeValues", attributeValues);
//       // console.log("parseBtnValue math result", Math[operation.toLowerCase()](...attributeValues));
//       // // if (operation.toLowerCase() == "attr") {
//       // //   // FIXME
//       // // }
//       // let result = Math[operation.toLowerCase()](...attributeValues);
//       // console.log(result);
//       // return result;
//   // }
//     // )
//   }
//   else {
//     return normalizeAttr(value);
//   }
// };

// function listenSetAttr(attribute, trigger = `set-${attribute}`) {
//   on(`clicked:${trigger}`, (eventInfo) => {
//     return log(eventInfo);
//   })
// };

// function listenIncrementAttr(attr) {
//   const trigger = `increment-${attr}`;
//   console.log(`Registering listener: ${trigger}`);
//   on(`clicked:${trigger}`, (eventInfo) => {
//     console.log(eventInfo);
//     // getAttrs([attr, `${attr}_max`, `${attr}_min`], (data) => {
//     getAttrsWithLimits([attr], (data) => {
//       console.log("listenIncrementAttr receives data", data);
//       let newValue = normalizeAttr(data[attr]) + normalizeAttr(getBtnValue(eventInfo));
//       let maxValue;
//       let minValue;
//       ["max", "min"].forEach(value => {
//         if (typeof normalizeAttr(data[`${attr}_${value}`]) == number) {
//           [value + "Value"] = normalizeAttr(data[`${attr}_${value}`]);
//         }
//         else {
//           [value + "Value"] = newValue;
//         }
//       })
//       return setAttrs({
//         [attr]: clampValueToRange(newValue, minValue, maxValue)
//       });
//     });
//   });
// };


// function log(...message) {
//   console.log("[Ironworker]:", ...message);
// };

// function logLoad(item) {
//   log("Loaded", item);
// };

// logLoad("sheet worker");

// logLoad("getBtnValue");