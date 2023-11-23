const { starforged } = require('dataforged')

function toSnakeCase (string) {
  return string.toLowerCase().replaceAll(' ', '_')
}

function convertSymbols (string) {
  return string
    .replaceAll(`"`, '&#34;')
    .replaceAll(`'`, '&#39;')
    .replaceAll(`(`, '&#40;')
    .replaceAll(`)`, '&#41;')
    .replaceAll(`,`, '&#44;')
    .replaceAll(`-`, '&#45;')
}

function buildRollData () {
  const assetTypes = starforged["Asset Types"];
  let assetTriggers = {}
  assetTypes.forEach((assetType) => {
    assetType.Assets.forEach((asset) => {
      const assetName = toSnakeCase(asset.Name)
      assetTriggers[assetName] = {}
      asset['Abilities'].forEach((ability, index) => {
        const abilityKey = `ability_${index + 1}`
        ability['Alter Moves']?.forEach((alteredMove) => {
          const affectedMoveNames = alteredMove.Moves?.map((moveId) => {
            const regex = /\/([^\/]+)\/([^\/]+)$/
            console.log(moveId.match(regex))
            if (moveId.match(regex)[1] === 'Scene_Challenge') {
              return `Scene Challenge - ${moveId.match(regex)[1].replaceAll('_', ' ')}`
            } else {
              return moveId.match(regex)[2].replaceAll('_', ' ')
            }
          })
          assetTriggers[assetName][abilityKey] = {}
          assetTriggers[assetName][abilityKey].moves = affectedMoveNames
          assetTriggers[assetName][abilityKey].options = alteredMove.Trigger?.Options?.map((option) => {
            const stats = option.Using.map((use) => {
              return toSnakeCase(use)
            }) 
            const text = option.Text ? convertSymbols(option.Text) : asset.Name
            return { text: text, method: option.Method.toLowerCase() , stats: stats }
          })
        })
      })
    })
  })

  return assetTriggers
}

module.exports = { buildRollData }