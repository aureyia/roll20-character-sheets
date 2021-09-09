// on('sheet:opened', openSheet);
// var openSheet = function() {
//     //getSections is a function that I use to get all the repeating section attributes. It iterates through each section and gets all the IDs, and adds those full attribute names to the getArray that is passed to it; baseGet in this case. Once all the sections have been parsed, it calls the callback function passed to it; updateSheet in this case
//     getSections(updateSheet, baseGet);
//   },
//   updateSheet = function(getArray, sections) {
//     const setObj = {};
//     //getArray will have pretty much every attribute on the sheet in it.
//     getAttrs([...getArray, 'sheet_version'], (attr) => {
//       //Logic to determine what updates need to be done
//       if (!attr.sheet_version) {
//         //note that I would not recommend this piece of logic, but I goofed when I first made the sheet and did not store the sheet version number on the sheet
//         attr.sheet_version = 0;
//       }
//       if (attr.sheet_version * 1 < 1.1) updateTo1_1(attr, setObj); //First update applied
//       if (attr.sheet_version * 1 < 1.12) updateTo1_12(attr, setObj); //update 1.12; npc hp attribute change
//       set(setObj);
//     });
//   },
//   //Each individual update function only cares about what updates it's responsible for. And changes to the attributes are added to both the setObj as well as the original attribute object. In this way, later update functions can see what has been done without having to waterfall setAttrs => getAttrs => setAttrs
//   updateTo1_12 = function(attr, setObj) {
//     if (attr.character_type === 'npc') {
//       setObj.hp = attr.hit_points;
//       setObj.hp_max = attr.hit_points_max;
//     }
//     attr = { ...attr, ...setObj };
//     setObj.sheet_version = 1.12;
//   },
//   updateTo1_1 = function(attr, setObj) {
//     let enableItems = Object.keys(attr).filter((a) =>
//       /attack_enable_item/.test(a)
//     );
//     enableItems.forEach((check) => {
//       let macroName = check.replace(/attack_enable_item/, 'attack_macro');
//       if (/@/.test(attr[check])) {
//         setObj[check] = 1;
//         setObj[macroName] = `{{d20=[[@{advantage_state} ${
//           attr.character_type === 'pc'
//             ? '+ @{attack_ability} + @{action_proficiency}'
//             : ''
//         } + 0@{attack_bonus}]]}}`;
//       } else if (!attr[check] * 1) {
//         setObj[macroName] = ' ';
//         setObj[check] = 0;
//       }
//     });
//     setObj.sheet_version = 1.1;
//     attr = { ...attr, ...setObj };
//   };
