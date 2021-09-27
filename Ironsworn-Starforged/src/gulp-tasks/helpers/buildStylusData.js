module.exports = function buildStylusData(gameData) {
return {
  $sheets: {
    nameKey: 'name',
    object: gameData.sheets,
    },
  $assets: {
    nameKey: 'id',
    object: gameData.assets.Assets,
    blacklist: ['Name', 'Abilities', 'Input', 'Description', 'Condition Meter'],
    },
  $moves: {
    nameKey: 'id',
    object: gameData.moves.Moves,
    blacklist: ['Name', 'Triggers', 'Text'],
    },
  };
}