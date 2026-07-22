const { starforged } = require('dataforged')
const marked = require('marked')

// Dataforged text contains cross-references as markdown links (e.g.
// [Face Danger](Starforged/Moves/...)). Those hrefs point at internal
// dataforged IDs and don't resolve to anything inside a Roll20 sheet, so
// render them as plain underlined text instead of dead <a href> links.
marked.use({
  renderer: {
    link (href, title, text) {
      return `<u>${text}</u>`
    }
  }
})

function keyFormat (inputString) {
  return inputString.toLowerCase().replaceAll(/\s+/g, "-");
}

// Tidies marked.parse() output for use as a translation value:
// - unescapes the straight-apostrophe entity marked emits (&#39; -> ')
// - collapses newlines that sit *between* HTML tags (e.g. <ul>\n<li>) so list
//   markup isn't littered with them; newlines inside text content are left
//   alone so adjacent paragraphs don't run together
// - trims the trailing newline marked appends
function cleanHtml(html) {
  return html
    .replaceAll("&#39;", "'")
    .replace(/>\n+</g, "><")
    .trim();
}

function convertToHtml(inputText, wrap = true) {
  return cleanHtml(marked.parse(inputText));
}

function convertToHtmlStripped(inputText, wrap = true) {
  return cleanHtml(marked.parse(inputText).replaceAll("<p>", "").replaceAll("</p>", ""));
}

function buildAssetTranslations() {
  let assetTranslations = {};
  const assetTypes = starforged["Asset Types"];

  assetTypes.forEach((assetType) => {
    assetType.Assets.forEach((asset) => {
      const keyPrefix = `asset-${keyFormat(asset.Name)}`;

      assetTranslations[`${keyPrefix}-name`] = asset.Name;
      assetTranslations[`${keyPrefix}-asset-type`] = assetType.Name;

      asset.Inputs?.forEach((input) => {
        assetTranslations[`${keyPrefix}-textinput-${keyFormat(input.Name)}`] =
          input.Name;
      });

      if (asset.Requirement) {
        assetTranslations[`${keyPrefix}-requirement`] = convertToHtmlStripped(
          asset.Requirement,
          false
        );
      }

      if (asset["Condition Meter"]) {
        const name = asset["Condition Meter"].Name;
        assetTranslations[`${keyPrefix}-meter-${keyFormat(name)}`] = name;
      }

      for (let i = 0; i < 3; i++) {
        assetTranslations[`${keyPrefix}-ability-${i + 1}`] = convertToHtmlStripped(
          asset.Abilities[i].Text
        );
        if (asset.Abilities[i].Inputs) {
          asset.Abilities[i].Inputs.forEach((input) => {
            assetTranslations[
              `${keyPrefix}-ability-${i + 1}-${keyFormat(input.Name)}`
            ] = input.Name;
          });
        }
      }

    })
  })
  return assetTranslations
}

// Count how many categories each move name appears in. Face Danger and Secure
// an Advantage exist in both Adventure and Scene Challenge, so their bare kebab
// id collides. Only the non-canonical (Scene Challenge) variant is prefixed with
// its category; canonical ids stay bare so the community translation files keyed
// on e.g. `move-text-face-danger` are not orphaned.
const moveNameCounts = {}
starforged['Move Categories'].forEach((category) => {
  category.Moves.forEach((move) => {
    const base = keyFormat(move.Name)
    moveNameCounts[base] = (moveNameCounts[base] || 0) + 1
  })
})

// Single source of truth for a move's id / translation-key suffix. Injected onto
// the move data (see gulpfile dataforge) so the pug templates and the translation
// keys always agree.
function moveId (move) {
  const base = keyFormat(move.Name)
  const inSceneChallenge = (move.Category || move['$id'] || '').includes('Scene_Challenge')
  if (inSceneChallenge && moveNameCounts[base] > 1) {
    return `scene-challenge-${base}`
  }
  return base
}

function buildMoveTranslations () {
  let moveTranslations = {}

  starforged['Move Categories'].forEach((category) => {
    const categoryId = keyFormat(category.Name)
    moveTranslations[`move-group-title-${categoryId}`] = category.Name

    category.Moves.forEach((move) => {
      const id = moveId(move)

      moveTranslations[`move-title-${id}`] = move.Name

      // dataforged bakes a move's oracle result table into its rules text as a
      // Markdown table. When a move HAS an oracle, the sheet renders that oracle
      // as its own styled, data-driven table (see move-builder.pug), so the
      // baked-in duplicate is never shown — strip it here to keep the translation
      // files lean. Moves without an oracle (e.g. Repair) keep their table, since
      // it IS rendered as the move's content.
      let text = convertToHtml(move.Text)
      const hasOracles = move.Oracles && move.Oracles.length
      if (hasOracles) text = text.replace(/<table[\s\S]*?<\/table>/gi, '')
      moveTranslations[`move-text-${id}`] = text.trim()
    })
  })

  return moveTranslations
}

function buildOracleTranslations () {
  let oracleTranslations = {}
  const oracleCategories = starforged['Oracle Categories']
  console.log(`Building ${oracleCategories.length} oracle translations...`)

  oracleCategories.forEach((oracleCategory) => {
    const categoryId = oracleCategory.$id;

    oracleTranslations[`${categoryId}-name`] = oracleCategory.Name;
    if (oracleCategory.Description) {
      oracleTranslations[`${categoryId}-description`] = convertToHtmlStripped(
        oracleCategory.Description,
        false
      );
    }

    oracleCategory.Oracles.forEach((oracle) => {
      const oracleId = oracle.$id;

      oracleTranslations[`${oracleId}-name`] = oracle.Name;
      if (oracle.Description) {
        oracleTranslations[`${oracleId}-description`] = convertToHtmlStripped(
          oracle.Description,
          false
        );
      }

      if (oracle.Oracles) {
        oracle.Oracles.forEach((subOracle) => {
          subOracle.Table.forEach((row) => {
            if (row.Result.includes("⏵") && row.Summary) {
              oracleTranslations[row.$id] = row.Summary;
            } else {
              oracleTranslations[row.$id] = convertToHtmlStripped(row.Result, false);
            }
          });
        });
      } else if (oracle.Table) {
        oracle.Table.forEach((row) => {
          if (row.Result.includes("⏵") && row.Summary) {
            oracleTranslations[row.$id] = row.Summary;
          } else {
            oracleTranslations[row.$id] = convertToHtmlStripped(row.Result, false);
          }
        });
      } else {
        throw new Error("Oracle is not supported");
      }
    });

    oracleCategory.Categories?.forEach((category) => {
      category.Oracles.forEach((oracle) => {
        const oracleId = oracle.$id;

        oracleTranslations[`${oracleId}-name`] = oracle.Name;
        if (oracle.Description) {
          oracleTranslations[`${oracleId}-description`] = convertToHtmlStripped(
            oracle.Description,
            false
          );
        }

        if (oracle.Oracles) {
          oracle.Oracles.forEach((subOracle) => {
            subOracle.Table.forEach((row) => {
              if (row.Result.includes("⏵") && row.Summary) {
                oracleTranslations[row.$id] = row.Summary;
              } else {
                oracleTranslations[row.$id] = convertToHtmlStripped(row.Result, false);
              }
            });
          });
        } else if (oracle.Table) {
          oracle.Table.forEach((row) => {
            if (row.Result.includes("⏵") && row.Summary) {
              oracleTranslations[row.$id] = row.Summary;
            } else {
              oracleTranslations[row.$id] = convertToHtmlStripped(row.Result, false);
            }
          });
        } else {
          throw new Error("Oracle is not supported");
        }
      });
    });
  });
  console.log(`Oracle translations built.`);
  return oracleTranslations;
}

module.exports = { buildAssetTranslations, buildOracleTranslations, buildMoveTranslations, moveId }