// for some reason regexes cause this to break. i have no idea why!
function attrFormat(string) {
  return string
    .toLowerCase()
    .split(" ")
    .join("-");
}

async function toggleAttr(eventInfo, attrPrefix) {
  console.log("eventInfo:", eventInfo);
  let previousValue = await eventInfo.previousValue;
  let newValue = await eventInfo.newValue;
  let previousAttr = attrPrefix + previousValue;
  let newAttr = attrPrefix + newValue;
  previousAttr = attrFormat(previousAttr);
  newAttr = attrFormat(newAttr);
  console.log(`${previousAttr} set to OFF. ${newAttr} set to ON.`);
  setAttrs({
    [previousAttr]: "off",
    [newAttr]: "on",
  });
}

on("change:repeating_assets:assettype", (eventInfo) =>
  toggleAttr(eventInfo, "repeating_assets_Asset")
);

on("change:repeating_assets:asset", (eventInfo) =>
  toggleAttr(eventInfo, "repeating_assets_Asset-")
);

on("change:repeating_module-assets:assettype", (eventInfo) =>
  toggleAttr(eventInfo, "repeating_module-assets_Asset")
);

on("change:repeating_module-assets:asset", (eventInfo) =>
  toggleAttr(eventInfo, "repeating_module-assets_Asset-")
);

on("change:repeating_support-vehicle-assets:assettype", (eventInfo) =>
  toggleAttr(eventInfo, "repeating_support-vehicle-assets_Asset")
);

on("change:repeating_support-vehicle-assets:asset", (eventInfo) =>
  toggleAttr(eventInfo, "repeating_support-vehicle-assets_Asset-")
);

on("change:repeating_assets:builder-titles", function(eventInfo) {
  console.log("eventInfo:", eventInfo);
  setAttrs({
    ["repeating_assets_builder-titles-" + eventInfo.previousValue]: "off",
    ["repeating_assets_builder-titles-" + eventInfo.newValue]: "on",
  });
});

on("change:repeating_assets:builder-ability-1", function(eventInfo) {
  console.log("eventInfo:", eventInfo);
  setAttrs({
    ["repeating_assets_builder-ability-1-" + eventInfo.previousValue]: "off",
    ["repeating_assets_builder-ability-1-" + eventInfo.newValue]: "on",
  });
});

on("change:repeating_assets:builder-ability-2", function(eventInfo) {
  console.log("eventInfo:", eventInfo);
  setAttrs({
    ["repeating_assets_builder-ability-2-" + eventInfo.previousValue]: "off",
    ["repeating_assets_builder-ability-2-" + eventInfo.newValue]: "on",
  });
});

on("change:repeating_assets:builder-ability-3", function(eventInfo) {
  console.log("eventInfo:", eventInfo);
  setAttrs({
    ["repeating_assets_builder-ability-3-" + eventInfo.previousValue]: "off",
    ["repeating_assets_builder-ability-3-" + eventInfo.newValue]: "on",
  });
});

on("change:repeating_assets:meter-dropdown", function(eventInfo) {
  console.log("eventInfo:", eventInfo);
  setAttrs({
    ["meter-dropdown-" + eventInfo.previousValue]: "off",
    ["meter-dropdown-" + eventInfo.newValue]: "on",
  });
});

const assets = [
  "asset-ace-ability-1",
  "asset-ace-ability-2",
  "asset-ace-ability-3",
  "asset-agent-ability-1",
  "asset-agent-ability-2",
  "asset-agent-ability-3",
  "asset-archer-ability-1",
  "asset-archer-ability-2",
  "asset-archer-ability-3",
  "asset-armored-ability-1",
  "asset-armored-ability-2",
  "asset-armored-ability-3",
  "asset-augmented-ability-1",
  "asset-augmented-ability-2",
  "asset-augmented-ability-3",
  "asset-bannersworn-ability-1",
  "asset-bannersworn-ability-2",
  "asset-bannersworn-ability-3",
  "asset-banshee-ability-1",
  "asset-banshee-ability-2",
  "asset-banshee-ability-3",
  "asset-blademaster-ability-1",
  "asset-blademaster-ability-2",
  "asset-blademaster-ability-3",
  "asset-bonded-ability-1",
  "asset-bonded-ability-2",
  "asset-bonded-ability-3",
  "asset-bounty-hunter-ability-1",
  "asset-bounty-hunter-ability-2",
  "asset-bounty-hunter-ability-3",
  "asset-brawler-ability-1",
  "asset-brawler-ability-2",
  "asset-brawler-ability-3",
  "asset-combat-bot-ability-1",
  "asset-combat-bot-ability-2",
  "asset-combat-bot-ability-3",
  "asset-commander-ability-1",
  "asset-commander-ability-2",
  "asset-commander-ability-3",
  "asset-courier-ability-1",
  "asset-courier-ability-2",
  "asset-courier-ability-3",
  "asset-devotant-ability-1",
  "asset-devotant-ability-2",
  "asset-devotant-ability-3",
  "asset-diplomat-ability-1",
  "asset-diplomat-ability-2",
  "asset-diplomat-ability-3",
  "asset-empath-ability-1",
  "asset-empath-ability-2",
  "asset-empath-ability-3",
  "asset-engine-upgrade-ability-1",
  "asset-engine-upgrade-ability-2",
  "asset-engine-upgrade-ability-3",
  "asset-exosuit-ability-1",
  "asset-exosuit-ability-2",
  "asset-exosuit-ability-3",
  "asset-expanded-hold-ability-1",
  "asset-expanded-hold-ability-2",
  "asset-expanded-hold-ability-3",
  "asset-explorer-ability-1",
  "asset-explorer-ability-2",
  "asset-explorer-ability-3",
  "asset-fated-ability-1",
  "asset-fated-ability-2",
  "asset-fated-ability-3",
  "asset-firebrand-ability-1",
  "asset-firebrand-ability-2",
  "asset-firebrand-ability-3",
  "asset-fugitive-ability-1",
  "asset-fugitive-ability-2",
  "asset-fugitive-ability-3",
  "asset-gearhead-ability-1",
  "asset-gearhead-ability-2",
  "asset-gearhead-ability-3",
  "asset-glowcat-ability-1",
  "asset-glowcat-ability-2",
  "asset-glowcat-ability-3",
  "asset-grappler-ability-1",
  "asset-grappler-ability-2",
  "asset-grappler-ability-3",
  "asset-gunner-ability-1",
  "asset-gunner-ability-2",
  "asset-gunner-ability-3",
  "asset-gunslinger-ability-1",
  "asset-gunslinger-ability-2",
  "asset-gunslinger-ability-3",
  "asset-haunted-ability-1",
  "asset-haunted-ability-2",
  "asset-haunted-ability-3",
  "asset-healer-ability-1",
  "asset-healer-ability-2",
  "asset-healer-ability-3",
  "asset-heavy-cannons-ability-1",
  "asset-heavy-cannons-ability-2",
  "asset-heavy-cannons-ability-3",
  "asset-homesteader-ability-1",
  "asset-homesteader-ability-2",
  "asset-homesteader-ability-3",
  "asset-hoverbike-ability-1",
  "asset-hoverbike-ability-2",
  "asset-hoverbike-ability-3",
  "asset-internal-refit-ability-1",
  "asset-internal-refit-ability-2",
  "asset-internal-refit-ability-3",
  "asset-kinetic-ability-1",
  "asset-kinetic-ability-2",
  "asset-kinetic-ability-3",
  "asset-lore-hunter-ability-1",
  "asset-lore-hunter-ability-2",
  "asset-lore-hunter-ability-3",
  "asset-loyalist-ability-1",
  "asset-loyalist-ability-2",
  "asset-loyalist-ability-3",
  "asset-marked-ability-1",
  "asset-marked-ability-2",
  "asset-marked-ability-3",
  "asset-medbay-ability-1",
  "asset-medbay-ability-2",
  "asset-medbay-ability-3",
  "asset-mercenary-ability-1",
  "asset-mercenary-ability-2",
  "asset-mercenary-ability-3",
  "asset-missile-array-ability-1",
  "asset-missile-array-ability-2",
  "asset-missile-array-ability-3",
  "asset-naturalist-ability-1",
  "asset-naturalist-ability-2",
  "asset-naturalist-ability-3",
  "asset-navigator-ability-1",
  "asset-navigator-ability-2",
  "asset-navigator-ability-3",
  "asset-oathbreaker-ability-1",
  "asset-oathbreaker-ability-2",
  "asset-oathbreaker-ability-3",
  "asset-outcast-ability-1",
  "asset-outcast-ability-2",
  "asset-outcast-ability-3",
  "asset-overseer-ability-1",
  "asset-overseer-ability-2",
  "asset-overseer-ability-3",
  "asset-protocol-bot-ability-1",
  "asset-protocol-bot-ability-2",
  "asset-protocol-bot-ability-3",
  "asset-reinforced-hull-ability-1",
  "asset-reinforced-hull-ability-2",
  "asset-reinforced-hull-ability-3",
  "asset-research-lab-ability-1",
  "asset-research-lab-ability-2",
  "asset-research-lab-ability-3",
  "asset-revenant-ability-1",
  "asset-revenant-ability-2",
  "asset-revenant-ability-3",
  "asset-rockhorn-ability-1",
  "asset-rockhorn-ability-2",
  "asset-rockhorn-ability-3",
  "asset-rover-ability-1",
  "asset-rover-ability-2",
  "asset-rover-ability-3",
  "asset-scavenger-ability-1",
  "asset-scavenger-ability-2",
  "asset-scavenger-ability-3",
  "asset-scoundrel-ability-1",
  "asset-scoundrel-ability-2",
  "asset-scoundrel-ability-3",
  "asset-seer-ability-1",
  "asset-seer-ability-2",
  "asset-seer-ability-3",
  "asset-sensor-array-ability-1",
  "asset-sensor-array-ability-2",
  "asset-sensor-array-ability-3",
  "asset-service-pod-ability-1",
  "asset-service-pod-ability-2",
  "asset-service-pod-ability-3",
  "asset-shade-ability-1",
  "asset-shade-ability-2",
  "asset-shade-ability-3",
  "asset-shields-ability-1",
  "asset-shields-ability-2",
  "asset-shields-ability-3",
  "asset-shuttle-ability-1",
  "asset-shuttle-ability-2",
  "asset-shuttle-ability-3",
  "asset-skiff-ability-1",
  "asset-skiff-ability-2",
  "asset-skiff-ability-3",
  "asset-sidekick-ability-1",
  "asset-sidekick-ability-2",
  "asset-sidekick-ability-3",
  "asset-slayer-ability-1",
  "asset-slayer-ability-2",
  "asset-slayer-ability-3",
  "asset-sniper-ability-1",
  "asset-sniper-ability-2",
  "asset-sniper-ability-3",
  "asset-snub-fighter-ability-1",
  "asset-snub-fighter-ability-2",
  "asset-snub-fighter-ability-3",
  "asset-sprite-ability-1",
  "asset-sprite-ability-2",
  "asset-sprite-ability-3",
  "asset-starship-ability-1",
  "asset-starship-ability-2",
  "asset-starship-ability-3",
  "asset-stealth-tech-ability-1",
  "asset-stealth-tech-ability-2",
  "asset-stealth-tech-ability-3",
  "asset-survey-bot-ability-1",
  "asset-survey-bot-ability-2",
  "asset-survey-bot-ability-3",
  "asset-symbiote-ability-1",
  "asset-symbiote-ability-2",
  "asset-symbiote-ability-3",
  "asset-tech-ability-1",
  "asset-tech-ability-2",
  "asset-tech-ability-3",
  "asset-trader-ability-1",
  "asset-trader-ability-2",
  "asset-trader-ability-3",
  "asset-utility-bot-ability-1",
  "asset-utility-bot-ability-2",
  "asset-utility-bot-ability-3",
  "asset-vanguard-ability-1",
  "asset-vanguard-ability-2",
  "asset-vanguard-ability-3",
  "asset-vehicle-bay-ability-1",
  "asset-vehicle-bay-ability-2",
  "asset-vehicle-bay-ability-3",
  "asset-vestige-ability-1",
  "asset-vestige-ability-2",
  "asset-vestige-ability-3",
  "asset-veteran-ability-1",
  "asset-veteran-ability-2",
  "asset-veteran-ability-3",
  "asset-voidborn-ability-1",
  "asset-voidborn-ability-2",
  "asset-voidborn-ability-3",
  "asset-voidglider-ability-1",
  "asset-voidglider-ability-2",
  "asset-voidglider-ability-3",
  "asset-weapon-master-ability-1",
  "asset-weapon-master-ability-2",
  "asset-weapon-master-ability-3",
  "asset-workshop-ability-1",
  "asset-workshop-ability-2",
  "asset-workshop-ability-3",
];

// function buildAssetEvents (impacts) {
//   return impacts.map(impact => `change:${impact}`).join(' ')
// }

// on('change:repeating_assets:meter-dropdown', function(eventInfo) {

// });
