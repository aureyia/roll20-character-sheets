const pageWidgets = ["preview"];
const pages = ["oracle", "move"];

pageWidgets.forEach((widget) => {
  pages.forEach((page) => {
    listenSetAttr(`${page}-${widget}`);
  });
});

const generalWidgets = ["changelog"];

generalWidgets.forEach((widget) => {
  listenSetAttr(widget);
});

// pageWidgets.forEach((widget) => {
//   pages.forEach((page) => {
//     on(`clicked:set-${page}-${widget}`, function (eventInfo) {
//       // console.log("event received:", eventInfo);
//       setAttrs({
//         [`${page}-${widget}`]: btnValue(eventInfo),
//       });
//     });
//   });
// });

// generalWidgets.forEach((widget) => {
//   on(`clicked:set-${widget}`, function (eventInfo) {
//     // console.log("event received:", eventInfo);
//     setAttrs({
//       [`${widget}`]: btnValue(eventInfo),
//     });
//   });
// });

// FIXME this is for later so it's easy to find; it's a function to compare. alternately, we could move to a pure date string to facilitate easy comparison, and make the semver mostly cosmetic - YYMMDD ?

// function compareSemVer(a, b) {
//   let pa = a.split(".");
//   let pb = b.split(".");
//   for (let i = 0; i < 3; i++) {
//     let na = Number(pa[i]);
//     let nb = Number(pb[i]);
//     if (na > nb) return 1;
//     if (nb > na) return -1;
//     if (!isNaN(na) && isNaN(nb)) return 1;
//     if (isNaN(na) && !isNaN(nb)) return -1;
//   }
//   return 0;
// }

// TODO: hide all preview widgets unless preview matches name of eventInfo
