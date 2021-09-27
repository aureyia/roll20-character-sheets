const { task, series, watch, tree, parallel } = require('gulp');
const buildCss = require("./gulp-tasks/buildCss.js");
const concatCss = require("./gulp-tasks/concatCss.js");
const fetchDataforged = require('./gulp-tasks/fetchDataforged.js');
const mergeGameData = require('./gulp-tasks/mergeGameData.js');
const buildHtml = require('./gulp-tasks/buildHtml.js');
const workerData = require('./gulp-tasks/workerData.js');
const mergeTranslations = require('./gulp-tasks/mergeTranslations.js');


// json data tasks

const dataFiles = {
  data: [
    "oracles.json",
    "assets.json",
    "moves.json",
    "movegroups.json"
  ],
  translations: ["translation-assets.json"]
};
async function fetchGameData() {
  return fetchDataforged(dataFiles.data, "./app/data")
}
async function fetchTranslationData() {
  return fetchDataforged(dataFiles.translations, "./app/translations")
}

// data
//   fetchData
//     fetchTranslationData
//     fetchGameData
//   mergeData
//     mergeTranslations
//     mergeGameData
//   workerData

task(fetchGameData);
task(fetchTranslationData);
task("fetchData", parallel(
  fetchGameData,
  fetchTranslationData
));
task("mergeData", parallel(
  mergeGameData,
  mergeTranslations
));
task(workerData);
task("data", series(
  "fetchData",
  "mergeData",
  workerData
));

// html tasks

task(buildHtml);

// css tasks

async function buildSheetCss() {
  return buildCss("./app/Ironsworn-starforged.styl", true)
}
async function buildTemplateCss() {
  return buildCss("./app/roll-templates/template.styl")
}

task(buildSheetCss);
task(buildTemplateCss);
task(concatCss);

task("buildAllCss",
  parallel(
    buildSheetCss,
    buildTemplateCss
  )
);

task('build', series(
  "data",
  parallel(
    buildHtml,
    series(
      "buildAllCss",
      concatCss
    )
  )
));


console.log(tree({deep: true}));

// FIXME so it doesn't trigger an infinite loop

task('watch', () => {
  watch('./app/**/*.styl', css);
  watch([
    './app/common/**/*.pug',
    './app/components/**/*.pug',
    './app/pages/**/*.pug',
    './app/roll-templates/**/*.pug',
    './app/*/*.pug',
    './app/workers/scripts/*.js',
    '!./app/workers/scripts/_1-data.js'
  ], html);
});
