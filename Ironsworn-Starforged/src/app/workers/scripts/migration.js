
// legacy_progress_discoveries_1 => legacy_discoveries_progress_1
// legacy_progress_discoveries-filled => legacy_discoveries_progress-filled
function migrateLegacies() {
  log("Migrating legacy track attribute names.");
  const legacies = ["quests", "bonds", "discoveries"]
  const migrationOptions = {};
  legacies.forEach(legacy => {
    const suffixes = ["-filled",...progressBoxIndexes.map(index => `_${index}`)];
    const oldPrefix = `legacy_progress_${legacy}`;
    const newPrefix = `legacy_${legacy}_progress`;
    suffixes.forEach(suffix => {
      migrationOptions[`${oldPrefix}${suffix}`] = migrationOptions[`${newPrefix}${suffix}`];
    });
  });
  migrateAttrs(options);
};

// lore-hunter => asset-lore-hunter
// ability_checkbox_lore-hunter_1 => asset-lore-hunter-ability-1
// assetcheckbox_lore-hunter_22 => asset-lore-hunter-ability-2
// assetcheckbox_lore-hunter_33 => asset-lore-hunter-ability-3
// attr_-Mm_mo1sfGRJ5Q_avdX8_repeating_assets_assettrack_archer
// repeating elements:
// assettrack_archer
// repeating_assets_assettrack_archer

// "attr_-MmaFbvMDYfNGMDJ10eZ_repeating_assets_assettrack_archer"

// getSectionIDs

function migrateAssets() {


     getSectionIDs("inventory", function(ids) {

   });

}