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

// function clampValueToRange(value, minValue, maxValue) {
//   let valueClampedToMin = Math.max(value, minValue);
//   let valueClampedToMax = Math.min(valueClampedToMin, maxValue);
//   return valueClampedToMax;
// };

// logLoad("clampValueToRange");





// class AttrClampListener extends Listener {
//   constructor(attr) {
//     let trigger = `change:${attr} change:${attr}_max change:${attr}_max`;
//     super(trigger, "AttrClampListener");
//     on(trigger, (eventInfo) => {
//       clampedAttr(attr, (clampedAttrValue) => {
//         if (clampedAttrValue != eventInfo.newValue) {
//           setAttr({
//             [attr]: clampedAttrValue
//           });
//         }
//       });
//     });
//   };
// };

// class ImpactRecoveryListener extends Listener {
//   constructor(attr, impactAttr, setImpactAtZero = false) {
//     super(`change:${attr}`, "ImpactRecoveryListener");
//     on(`change:${attr}`, (eventInfo) => {
//       getAttrs([impactAttr], (values) => {
//         if (values[impactAttr] == 'on') {
//           if (normalizeAttr(eventInfo.newValue) > normalizeAttr(eventInfo.previousValue)) {
//             setAttrs({ [attr]: eventInfo.previousValue });
//           }
//         };
//         if (setImpactAtZero === true && normalizeAttr(eventInfo.newValue) === 0) {
//           setAttrs({ [impactAttr]: 'on' });
//         };
//       });
//       return;
//     });
//   }
// };

// class SetAttrListener extends Listener {
//   constructor(attr) {
//     let trigger = `click:set-${attr}`;
//     super(trigger, "SetAttrListener");
//     on(trigger, (eventInfo) => {
//       let value = normalizeAttr(getBtnValue(eventInfo));
//       setAttr({
//         [attr]: value
//       });
//       return;
//     });
//   }
// };