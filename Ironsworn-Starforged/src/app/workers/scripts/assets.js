on("change:repeating_assets:assettype", function (values) {
  setAttrs({
    ["repeating_assets_Asset" + values.previousValue]: "off",
    ["repeating_assets_Asset" + values.newValue]: "on",
  });
});

on("change:repeating_assets:asset", function (values) {
  setAttrs({
    ["repeating_assets_" + values.previousValue]: "off",
    ["repeating_assets_" + values.newValue]: "on",
  });
});

on("change:repeating_module-assets:assettype", function (values) {
  setAttrs({
    ["repeating_module-assets_Asset" + values.previousValue]: "off",
    ["repeating_module-assets_Asset" + values.newValue]: "on",
  });
});

on("change:repeating_module-assets:asset", function (values) {
  setAttrs({
    ["repeating_module-assets_" + values.previousValue]: "off",
    ["repeating_module-assets_" + values.newValue]: "on",
  });
});

on("change:repeating_support-vehicle-assets:assettype", function (values) {
  setAttrs({
    ["repeating_support-vehicle-assets_Asset" + values.previousValue]: "off",
    ["repeating_support-vehicle-assets_Asset" + values.newValue]: "on",
  });
});

on("change:repeating_support-vehicle-assets:asset", function (values) {
  setAttrs({
    ["repeating_support-vehicle-assets_" + values.previousValue]: "off",
    ["repeating_support-vehicle-assets_" + values.newValue]: "on",
  });
});

on("change:repeating_assets:builder-titles", function (values) {
  setAttrs({
    ["repeating_assets_builder-titles-" + values.previousValue]: "off",
    ["repeating_assets_builder-titles-" + values.newValue]: "on",
  });
});

on("change:repeating_assets:builder-ability-1", function (values) {
  setAttrs({
    ["repeating_assets_builder-ability-1-" + values.previousValue]: "off",
    ["repeating_assets_builder-ability-1-" + values.newValue]: "on",
  });
});

on("change:repeating_assets:builder-ability-2", function (values) {
  setAttrs({
    ["repeating_assets_builder-ability-2-" + values.previousValue]: "off",
    ["repeating_assets_builder-ability-2-" + values.newValue]: "on",
  });
});

on("change:repeating_assets:builder-ability-3", function (values) {
  setAttrs({
    ["repeating_assets_builder-ability-3-" + values.previousValue]: "off",
    ["repeating_assets_builder-ability-3-" + values.newValue]: "on",
  });
});

on("change:repeating_assets:track-dropdown", function (values) {
  setAttrs({
    ["repeating_assets_track-dropdown-" + values.previousValue]: "off",
    ["repeating_assets_track-dropdown-" + values.newValue]: "on",
  });
});

const assets = [
  "ace-ability-1",
  "ace-ability-2",
  "ace-ability-3",
  "agent-ability-1",
  "agent-ability-2",
  "agent-ability-3",
  "archer-ability-1",
  "archer-ability-2",
  "archer-ability-3",
  "armored-ability-1",
  "armored-ability-2",
  "armored-ability-3",
  "augmented-ability-1",
  "augmented-ability-2",
  "augmented-ability-3",
  "bannersworn-ability-1",
  "bannersworn-ability-2",
  "bannersworn-ability-3",
  "banshee-ability-1",
  "banshee-ability-2",
  "banshee-ability-3",
  "blademaster-ability-1",
  "blademaster-ability-2",
  "blademaster-ability-3",
  "bonded-ability-1",
  "bonded-ability-2",
  "bonded-ability-3",
  "bounty-hunter-ability-1",
  "bounty-hunter-ability-2",
  "bounty-hunter-ability-3",
  "brawler-ability-1",
  "brawler-ability-2",
  "brawler-ability-3",
  "combat-bot-ability-1",
  "combat-bot-ability-2",
  "combat-bot-ability-3",
  "commander-ability-1",
  "commander-ability-2",
  "commander-ability-3",
  "courier-ability-1",
  "courier-ability-2",
  "courier-ability-3",
  "devotant-ability-1",
  "devotant-ability-2",
  "devotant-ability-3",
  "diplomat-ability-1",
  "diplomat-ability-2",
  "diplomat-ability-3",
  "empath-ability-1",
  "empath-ability-2",
  "empath-ability-3",
  "engine-upgrade-ability-1",
  "engine-upgrade-ability-2",
  "engine-upgrade-ability-3",
  "exosuit-ability-1",
  "exosuit-ability-2",
  "exosuit-ability-3",
  "expanded-hold-ability-1",
  "expanded-hold-ability-2",
  "expanded-hold-ability-3",
  "explorer-ability-1",
  "explorer-ability-2",
  "explorer-ability-3",
  "fated-ability-1",
  "fated-ability-2",
  "fated-ability-3",
  "firebrand-ability-1",
  "firebrand-ability-2",
  "firebrand-ability-3",
  "fugitive-ability-1",
  "fugitive-ability-2",
  "fugitive-ability-3",
  "gearhead-ability-1",
  "gearhead-ability-2",
  "gearhead-ability-3",
  "glowcat-ability-1",
  "glowcat-ability-2",
  "glowcat-ability-3",
  "grappler-ability-1",
  "grappler-ability-2",
  "grappler-ability-3",
  "gunner-ability-1",
  "gunner-ability-2",
  "gunner-ability-3",
  "gunslinger-ability-1",
  "gunslinger-ability-2",
  "gunslinger-ability-3",
  "haunted-ability-1",
  "haunted-ability-2",
  "haunted-ability-3",
  "healer-ability-1",
  "healer-ability-2",
  "healer-ability-3",
  "heavy-cannons-ability-1",
  "heavy-cannons-ability-2",
  "heavy-cannons-ability-3",
  "homesteader-ability-1",
  "homesteader-ability-2",
  "homesteader-ability-3",
  "hoverbike-ability-1",
  "hoverbike-ability-2",
  "hoverbike-ability-3",
  "internal-refit-ability-1",
  "internal-refit-ability-2",
  "internal-refit-ability-3",
  "kinetic-ability-1",
  "kinetic-ability-2",
  "kinetic-ability-3",
  "lore-hunter-ability-1",
  "lore-hunter-ability-2",
  "lore-hunter-ability-3",
  "loyalist-ability-1",
  "loyalist-ability-2",
  "loyalist-ability-3",
  "marked-ability-1",
  "marked-ability-2",
  "marked-ability-3",
  "medbay-ability-1",
  "medbay-ability-2",
  "medbay-ability-3",
  "mercenary-ability-1",
  "mercenary-ability-2",
  "mercenary-ability-3",
  "missile-array-ability-1",
  "missile-array-ability-2",
  "missile-array-ability-3",
  "naturalist-ability-1",
  "naturalist-ability-2",
  "naturalist-ability-3",
  "navigator-ability-1",
  "navigator-ability-2",
  "navigator-ability-3",
  "oathbreaker-ability-1",
  "oathbreaker-ability-2",
  "oathbreaker-ability-3",
  "outcast-ability-1",
  "outcast-ability-2",
  "outcast-ability-3",
  "overseer-ability-1",
  "overseer-ability-2",
  "overseer-ability-3",
  "protocol-bot-ability-1",
  "protocol-bot-ability-2",
  "protocol-bot-ability-3",
  "reinforced-hull-ability-1",
  "reinforced-hull-ability-2",
  "reinforced-hull-ability-3",
  "research-lab-ability-1",
  "research-lab-ability-2",
  "research-lab-ability-3",
  "revenant-ability-1",
  "revenant-ability-2",
  "revenant-ability-3",
  "rockhorn-ability-1",
  "rockhorn-ability-2",
  "rockhorn-ability-3",
  "rover-ability-1",
  "rover-ability-2",
  "rover-ability-3",
  "scavenger-ability-1",
  "scavenger-ability-2",
  "scavenger-ability-3",
  "scoundrel-ability-1",
  "scoundrel-ability-2",
  "scoundrel-ability-3",
  "seer-ability-1",
  "seer-ability-2",
  "seer-ability-3",
  "sensor-array-ability-1",
  "sensor-array-ability-2",
  "sensor-array-ability-3",
  "service-pod-ability-1",
  "service-pod-ability-2",
  "service-pod-ability-3",
  "shade-ability-1",
  "shade-ability-2",
  "shade-ability-3",
  "shields-ability-1",
  "shields-ability-2",
  "shields-ability-3",
  "shuttle-ability-1",
  "shuttle-ability-2",
  "shuttle-ability-3",
  "skiff-ability-1",
  "skiff-ability-2",
  "skiff-ability-3",
  "sidekick-ability-1",
  "sidekick-ability-2",
  "sidekick-ability-3",
  "slayer-ability-1",
  "slayer-ability-2",
  "slayer-ability-3",
  "sniper-ability-1",
  "sniper-ability-2",
  "sniper-ability-3",
  "snub-fighter-ability-1",
  "snub-fighter-ability-2",
  "snub-fighter-ability-3",
  "sprite-ability-1",
  "sprite-ability-2",
  "sprite-ability-3",
  "starship-ability-1",
  "starship-ability-2",
  "starship-ability-3",
  "stealth-tech-ability-1",
  "stealth-tech-ability-2",
  "stealth-tech-ability-3",
  "survey-bot-ability-1",
  "survey-bot-ability-2",
  "survey-bot-ability-3",
  "symbiote-ability-1",
  "symbiote-ability-2",
  "symbiote-ability-3",
  "tech-ability-1",
  "tech-ability-2",
  "tech-ability-3",
  "trader-ability-1",
  "trader-ability-2",
  "trader-ability-3",
  "utility-bot-ability-1",
  "utility-bot-ability-2",
  "utility-bot-ability-3",
  "vanguard-ability-1",
  "vanguard-ability-2",
  "vanguard-ability-3",
  "vehicle-bay-ability-1",
  "vehicle-bay-ability-2",
  "vehicle-bay-ability-3",
  "vestige-ability-1",
  "vestige-ability-2",
  "vestige-ability-3",
  "veteran-ability-1",
  "veteran-ability-2",
  "veteran-ability-3",
  "voidborn-ability-1",
  "voidborn-ability-2",
  "voidborn-ability-3",
  "voidglider-ability-1",
  "voidglider-ability-2",
  "voidglider-ability-3",
  "weapon-master-ability-1",
  "weapon-master-ability-2",
  "weapon-master-ability-3",
  "workshop-ability-1",
  "workshop-ability-2",
  "workshop-ability-3",
];

// TODO: reimplement with better attribute names (use ability ids). previous attempt below

// function buildAssetEvents (impacts) {
//   return impacts.map(impact => `change:${impact}`).join(' ')
// }

// on('change:repeating_assets:track-dropdown', function(values) {

// });

// // for some reason regexes cause this to break. i have no idea why!
// function attrFormat(string) {
//   return string
//     .toLowerCase()
//     .split(" ")
//     .join("-");
// }

// function capitalize(string) {
//   return string[0].toUpperCase() + string.slice(1);
// }

// async function toggleAttr(eventInfo, attrPrefix) {
//   console.log("eventInfo:", eventInfo);
//   let previousValue = await eventInfo.previousValue;
//   let newValue = await eventInfo.newValue;
//   let previousAttr = attrPrefix + previousValue;
//   let newAttr = attrPrefix + newValue;
//   previousAttr = attrFormat(previousAttr);
//   newAttr = attrFormat(newAttr);
//   console.log(`${previousAttr} set to OFF. ${newAttr} set to ON.`);
//   setAttrs({
//     [previousAttr]: "off",
//     [newAttr]: "on"
//   });
// }

// // TODO: refactor so this uses attribute names e.g. "ability-checkbox-archer" rather than "archer"

// on("change:repeating_assets:assettype", eventInfo =>
//   toggleAttr(eventInfo, "repeating_assets_Asset")
// );

// on("change:repeating_assets:asset", eventInfo =>
//   // toggleAttr(eventInfo, "repeating_assets_Asset-")
//   toggleAttr(eventInfo, `repeating_assets_`)
// );

// on("change:repeating_module-assets:assettype", eventInfo =>
//   toggleAttr(eventInfo, "repeating_module-assets_Asset")
// );

// on("change:repeating_module-assets:asset", eventInfo =>
//   // toggleAttr(eventInfo, "repeating_module-assets_Asset-")
//   toggleAttr(eventInfo, `repeating_module-assets_`)
// );

// on("change:repeating_support-vehicle-assets:assettype", eventInfo =>
//   toggleAttr(eventInfo, "repeating_support-vehicle-assets_Asset")
// );

// on("change:repeating_support-vehicle-assets:asset", eventInfo =>
//   // toggleAttr(eventInfo, "repeating_support-vehicle-assets_Asset-")
//   toggleAttr(eventInfo, `repeating_support-vehicle-assets_`)
// );

// on("change:repeating_assets:builder-titles", function(eventInfo) {
//   console.log("eventInfo:", eventInfo);
//   setAttrs({
//     ["repeating_assets_builder-titles-" + eventInfo.previousValue]: "off",
//     ["repeating_assets_builder-titles-" + eventInfo.newValue]: "on"
//   });
// });

// on("change:repeating_assets:builder-ability-1", function(eventInfo) {
//   console.log("eventInfo:", eventInfo);
//   setAttrs({
//     ["repeating_assets_builder-ability-1-" + eventInfo.previousValue]: "off",
//     ["repeating_assets_builder-ability-1-" + eventInfo.newValue]: "on"
//   });
// });

// on("change:repeating_assets:builder-ability-2", function(eventInfo) {
//   console.log("eventInfo:", eventInfo);
//   setAttrs({
//     ["repeating_assets_builder-ability-2-" + eventInfo.previousValue]: "off",
//     ["repeating_assets_builder-ability-2-" + eventInfo.newValue]: "on"
//   });
// });

// on("change:repeating_assets:builder-ability-3", function(eventInfo) {
//   console.log("eventInfo:", eventInfo);
//   setAttrs({
//     ["repeating_assets_builder-ability-3-" + eventInfo.previousValue]: "off",
//     ["repeating_assets_builder-ability-3-" + eventInfo.newValue]: "on"
//   });
// });

// on("change:repeating_assets:meter-dropdown", function(eventInfo) {
//   console.log("eventInfo:", eventInfo);
//   setAttrs({
//     ["meter-dropdown-" + eventInfo.previousValue]: "off",
//     ["meter-dropdown-" + eventInfo.newValue]: "on"
//   });
// });

// // TODO: refactor so this uses the ids in the data instead

// const assets = [
//   "ability-checkbox-ace-1",
//   "ability-checkbox-ace-2",
//   "ability-checkbox-ace-3",
//   "ability-checkbox-agent-1",
//   "ability-checkbox-agent-2",
//   "ability-checkbox-agent-3",
//   "ability-checkbox-archer-1",
//   "ability-checkbox-archer-2",
//   "ability-checkbox-archer-3",
//   "ability-checkbox-armored-1",
//   "ability-checkbox-armored-2",
//   "ability-checkbox-armored-3",
//   "ability-checkbox-augmented-1",
//   "ability-checkbox-augmented-2",
//   "ability-checkbox-augmented-3",
//   "ability-checkbox-bannersworn-1",
//   "ability-checkbox-bannersworn-2",
//   "ability-checkbox-bannersworn-3",
//   "ability-checkbox-banshee-1",
//   "ability-checkbox-banshee-2",
//   "ability-checkbox-banshee-3",
//   "ability-checkbox-blademaster-1",
//   "ability-checkbox-blademaster-2",
//   "ability-checkbox-blademaster-3",
//   "ability-checkbox-bonded-1",
//   "ability-checkbox-bonded-2",
//   "ability-checkbox-bonded-3",
//   "ability-checkbox-bounty-hunter-1",
//   "ability-checkbox-bounty-hunter-2",
//   "ability-checkbox-bounty-hunter-3",
//   "ability-checkbox-brawler-1",
//   "ability-checkbox-brawler-2",
//   "ability-checkbox-brawler-3",
//   "ability-checkbox-combat-bot-1",
//   "ability-checkbox-combat-bot-2",
//   "ability-checkbox-combat-bot-3",
//   "ability-checkbox-commander-1",
//   "ability-checkbox-commander-2",
//   "ability-checkbox-commander-3",
//   "ability-checkbox-courier-1",
//   "ability-checkbox-courier-2",
//   "ability-checkbox-courier-3",
//   "ability-checkbox-devotant-1",
//   "ability-checkbox-devotant-2",
//   "ability-checkbox-devotant-3",
//   "ability-checkbox-diplomat-1",
//   "ability-checkbox-diplomat-2",
//   "ability-checkbox-diplomat-3",
//   "ability-checkbox-empath-1",
//   "ability-checkbox-empath-2",
//   "ability-checkbox-empath-3",
//   "ability-checkbox-engine-upgrade-1",
//   "ability-checkbox-engine-upgrade-2",
//   "ability-checkbox-engine-upgrade-3",
//   "ability-checkbox-exosuit-1",
//   "ability-checkbox-exosuit-2",
//   "ability-checkbox-exosuit-3",
//   "ability-checkbox-expanded-hold-1",
//   "ability-checkbox-expanded-hold-2",
//   "ability-checkbox-expanded-hold-3",
//   "ability-checkbox-explorer-1",
//   "ability-checkbox-explorer-2",
//   "ability-checkbox-explorer-3",
//   "ability-checkbox-fated-1",
//   "ability-checkbox-fated-2",
//   "ability-checkbox-fated-3",
//   "ability-checkbox-firebrand-1",
//   "ability-checkbox-firebrand-2",
//   "ability-checkbox-firebrand-3",
//   "ability-checkbox-fugitive-1",
//   "ability-checkbox-fugitive-2",
//   "ability-checkbox-fugitive-3",
//   "ability-checkbox-gearhead-1",
//   "ability-checkbox-gearhead-2",
//   "ability-checkbox-gearhead-3",
//   "ability-checkbox-glowcat-1",
//   "ability-checkbox-glowcat-2",
//   "ability-checkbox-glowcat-3",
//   "ability-checkbox-grappler-1",
//   "ability-checkbox-grappler-2",
//   "ability-checkbox-grappler-3",
//   "ability-checkbox-gunner-1",
//   "ability-checkbox-gunner-2",
//   "ability-checkbox-gunner-3",
//   "ability-checkbox-gunslinger-1",
//   "ability-checkbox-gunslinger-2",
//   "ability-checkbox-gunslinger-3",
//   "ability-checkbox-haunted-1",
//   "ability-checkbox-haunted-2",
//   "ability-checkbox-haunted-3",
//   "ability-checkbox-healer-1",
//   "ability-checkbox-healer-2",
//   "ability-checkbox-healer-3",
//   "ability-checkbox-heavy-cannons-1",
//   "ability-checkbox-heavy-cannons-2",
//   "ability-checkbox-heavy-cannons-3",
//   "ability-checkbox-homesteader-1",
//   "ability-checkbox-homesteader-2",
//   "ability-checkbox-homesteader-3",
//   "ability-checkbox-hoverbike-1",
//   "ability-checkbox-hoverbike-2",
//   "ability-checkbox-hoverbike-3",
//   "ability-checkbox-internal-refit-1",
//   "ability-checkbox-internal-refit-2",
//   "ability-checkbox-internal-refit-3",
//   "ability-checkbox-kinetic-1",
//   "ability-checkbox-kinetic-2",
//   "ability-checkbox-kinetic-3",
//   "ability-checkbox-lore-hunter-1",
//   "ability-checkbox-lore-hunter-2",
//   "ability-checkbox-lore-hunter-3",
//   "ability-checkbox-loyalist-1",
//   "ability-checkbox-loyalist-2",
//   "ability-checkbox-loyalist-3",
//   "ability-checkbox-marked-1",
//   "ability-checkbox-marked-2",
//   "ability-checkbox-marked-3",
//   "ability-checkbox-medbay-1",
//   "ability-checkbox-medbay-2",
//   "ability-checkbox-medbay-3",
//   "ability-checkbox-mercenary-1",
//   "ability-checkbox-mercenary-2",
//   "ability-checkbox-mercenary-3",
//   "ability-checkbox-missile-array-1",
//   "ability-checkbox-missile-array-2",
//   "ability-checkbox-missile-array-3",
//   "ability-checkbox-naturalist-1",
//   "ability-checkbox-naturalist-2",
//   "ability-checkbox-naturalist-3",
//   "ability-checkbox-navigator-1",
//   "ability-checkbox-navigator-2",
//   "ability-checkbox-navigator-3",
//   "ability-checkbox-oathbreaker-1",
//   "ability-checkbox-oathbreaker-2",
//   "ability-checkbox-oathbreaker-3",
//   "ability-checkbox-outcast-1",
//   "ability-checkbox-outcast-2",
//   "ability-checkbox-outcast-3",
//   "ability-checkbox-overseer-1",
//   "ability-checkbox-overseer-2",
//   "ability-checkbox-overseer-3",
//   "ability-checkbox-protocol-bot-1",
//   "ability-checkbox-protocol-bot-2",
//   "ability-checkbox-protocol-bot-3",
//   "ability-checkbox-reinforced-hull-1",
//   "ability-checkbox-reinforced-hull-2",
//   "ability-checkbox-reinforced-hull-3",
//   "ability-checkbox-research-lab-1",
//   "ability-checkbox-research-lab-2",
//   "ability-checkbox-research-lab-3",
//   "ability-checkbox-revenant-1",
//   "ability-checkbox-revenant-2",
//   "ability-checkbox-revenant-3",
//   "ability-checkbox-rockhorn-1",
//   "ability-checkbox-rockhorn-2",
//   "ability-checkbox-rockhorn-3",
//   "ability-checkbox-rover-1",
//   "ability-checkbox-rover-2",
//   "ability-checkbox-rover-3",
//   "ability-checkbox-scavenger-1",
//   "ability-checkbox-scavenger-2",
//   "ability-checkbox-scavenger-3",
//   "ability-checkbox-scoundrel-1",
//   "ability-checkbox-scoundrel-2",
//   "ability-checkbox-scoundrel-3",
//   "ability-checkbox-seer-1",
//   "ability-checkbox-seer-2",
//   "ability-checkbox-seer-3",
//   "ability-checkbox-sensor-array-1",
//   "ability-checkbox-sensor-array-2",
//   "ability-checkbox-sensor-array-3",
//   "ability-checkbox-service-pod-1",
//   "ability-checkbox-service-pod-2",
//   "ability-checkbox-service-pod-3",
//   "ability-checkbox-shade-1",
//   "ability-checkbox-shade-2",
//   "ability-checkbox-shade-3",
//   "ability-checkbox-shields-1",
//   "ability-checkbox-shields-2",
//   "ability-checkbox-shields-3",
//   "ability-checkbox-shuttle-1",
//   "ability-checkbox-shuttle-2",
//   "ability-checkbox-shuttle-3",
//   "ability-checkbox-skiff-1",
//   "ability-checkbox-skiff-2",
//   "ability-checkbox-skiff-3",
//   "ability-checkbox-sidekick-1",
//   "ability-checkbox-sidekick-2",
//   "ability-checkbox-sidekick-3",
//   "ability-checkbox-slayer-1",
//   "ability-checkbox-slayer-2",
//   "ability-checkbox-slayer-3",
//   "ability-checkbox-sniper-1",
//   "ability-checkbox-sniper-2",
//   "ability-checkbox-sniper-3",
//   "ability-checkbox-snub-fighter-1",
//   "ability-checkbox-snub-fighter-2",
//   "ability-checkbox-snub-fighter-3",
//   "ability-checkbox-sprite-1",
//   "ability-checkbox-sprite-2",
//   "ability-checkbox-sprite-3",
//   "ability-checkbox-starship-1",
//   "ability-checkbox-starship-2",
//   "ability-checkbox-starship-3",
//   "ability-checkbox-stealth-tech-1",
//   "ability-checkbox-stealth-tech-2",
//   "ability-checkbox-stealth-tech-3",
//   "ability-checkbox-survey-bot-1",
//   "ability-checkbox-survey-bot-2",
//   "ability-checkbox-survey-bot-3",
//   "ability-checkbox-symbiote-1",
//   "ability-checkbox-symbiote-2",
//   "ability-checkbox-symbiote-3",
//   "ability-checkbox-tech-1",
//   "ability-checkbox-tech-2",
//   "ability-checkbox-tech-3",
//   "ability-checkbox-trader-1",
//   "ability-checkbox-trader-2",
//   "ability-checkbox-trader-3",
//   "ability-checkbox-utility-bot-1",
//   "ability-checkbox-utility-bot-2",
//   "ability-checkbox-utility-bot-3",
//   "ability-checkbox-vanguard-1",
//   "ability-checkbox-vanguard-2",
//   "ability-checkbox-vanguard-3",
//   "ability-checkbox-vehicle-bay-1",
//   "ability-checkbox-vehicle-bay-2",
//   "ability-checkbox-vehicle-bay-3",
//   "ability-checkbox-vestige-1",
//   "ability-checkbox-vestige-2",
//   "ability-checkbox-vestige-3",
//   "ability-checkbox-veteran-1",
//   "ability-checkbox-veteran-2",
//   "ability-checkbox-veteran-3",
//   "ability-checkbox-voidborn-1",
//   "ability-checkbox-voidborn-2",
//   "ability-checkbox-voidborn-3",
//   "ability-checkbox-voidglider-1",
//   "ability-checkbox-voidglider-2",
//   "ability-checkbox-voidglider-3",
//   "ability-checkbox-weapon-master-1",
//   "ability-checkbox-weapon-master-2",
//   "ability-checkbox-weapon-master-3",
//   "ability-checkbox-workshop-1",
//   "ability-checkbox-workshop-2",
//   "ability-checkbox-workshop-3"
// ];

// // function buildAssetEvents (impacts) {
// //   return impacts.map(impact => `change:${impact}`).join(' ')
// // }

// // on('change:repeating_assets:meter-dropdown', function(eventInfo) {

// // });
