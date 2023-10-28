const { starforged } = require('dataforged')
const marked = require('marked')

function keyFormat (inputString) {
  return inputString.toLowerCase().replaceAll(/\s+/g, "-");
}

function convertToHtml(inputText, wrap = true) {
  return marked.parse(inputText);
}

function buildAssetTranslations () {
  let assetTranslations = {}
  const assetTypes = starforged['Asset Types']

  assetTypes.forEach((assetType) => {
    
    assetType.Assets.forEach((asset) => {
      
      const keyPrefix = `asset-${keyFormat(asset.Name)}`

      assetTranslations[`${keyPrefix}-name`] = asset.Name
      assetTranslations[`${keyPrefix}-asset-type`] = assetType.Name

      asset.Inputs?.forEach((input) => {
        assetTranslations[`${keyPrefix}-textinput-${keyFormat(input.Name)}`] = input.Name
      })

      if(asset.Requirement) {
        assetTranslations[`${keyPrefix}-requirement`] = convertToHtml(asset.Requirement, false)
      }

      if(asset['Condition Meter']) {
        const name = asset['Condition Meter'].Name
        assetTranslations[`${keyPrefix}-meter-${keyFormat(name)}`] = name
      }

      for (let i = 0; i < 3; i++) {
        assetTranslations[`${keyPrefix}-ability-${i + 1}`] = convertToHtml(asset.Abilities[i].Text)
        if (asset.Abilities[i].Inputs) {
          asset.Abilities[i].Inputs.forEach((input) => {
            assetTranslations[`${keyPrefix}-ability-${i + 1}-${keyFormat(input.Name)}`] = input.Name
          })
        }
      }

    })
  })
  return assetTranslations
}

function buildMoveTranslations () {
  let moveTranslations = {}

  starforged['Move Categories'].forEach((category) => {
    const categoryId = keyFormat(category.Name)
    moveTranslations[`move-group-title-${categoryId}`] = category.Name
    
    category.Moves.forEach((move) => {
      const moveId = keyFormat(move.Name)

      moveTranslations[`move-title-${moveId}`] = move.Name
      moveTranslations[`move-text-${moveId}`] = convertToHtml(move.Text)
    })
  })

  return moveTranslations
}

function buildOracleTranslations () {
  let oracleTranslations = {}
  const oracleCategories = starforged['Oracle Categories']
  console.log(`Building ${oracleCategories.length} oracle translations...`)

  oracleCategories.forEach((oracleCategory) => {

    const categoryId = oracleCategory.$id

    oracleTranslations[`${categoryId}-name`] = oracleCategory.Name
    if (oracleCategory.Description) {
      oracleTranslations[`${categoryId}-description`] = convertToHtml(oracleCategory.Description, false)
    }
    
    oracleCategory.Oracles.forEach((oracle) => {
      
      const oracleId = oracle.$id

      oracleTranslations[`${oracleId}-name`] = oracle.Name
      if (oracle.Description) {
        oracleTranslations[`${oracleId}-description`] = convertToHtml(oracle.Description, false)
      }

      if (oracle.Oracles) {
        oracle.Oracles.forEach((subOracle) => {
          subOracle.Table.forEach((row) => {
            if(row.Result.includes('⏵') && row.Summary) {
              oracleTranslations[row.$id] = row.Summary
            } else {
              oracleTranslations[row.$id] = convertToHtml(row.Result, false)
            }
          })
        })
      } else if (oracle.Table) {
        oracle.Table.forEach((row) => {
          if(row.Result.includes('⏵') && row.Summary) {
            oracleTranslations[row.$id] = row.Summary
          } else {
            oracleTranslations[row.$id] = convertToHtml(row.Result, false)
          }
        })
      } else {
        throw new Error('Oracle is not supported');
      }
    })
  })
  console.log(`Oracle translations built.`)
  return oracleTranslations
}

module.exports = { buildAssetTranslations, buildOracleTranslations, buildMoveTranslations }