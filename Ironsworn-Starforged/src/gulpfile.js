const gulp = require('gulp');
const gulpPug = require('gulp-pug');
const gulpData = require('gulp-data');
const gulpStylus = require('gulp-stylus');
const gulpPostcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
// const combineMediaQuery = require("postcss-combine-media-query");
// const combineDuplicatedSelectors = require("postcss-combine-duplicated-selectors");
const purgeCss = require('@fullhuman/postcss-purgecss');
const perfectionist = require('perfectionist');
const postcssAddRootSelector = require('postcss-add-root-selector');
const cssNano = require('cssnano');
const fs = require('fs');
const path = require('path');
const axios = require('axios');
const gulpMergeJson = require('gulp-merge-json');
const _ = require('lodash');

function readJSON(fileName) {
  return JSON.parse(fs.readFileSync(fileName));
}

function writeJson(fileName, data) {
  // console.log("Writing json data to", fileName);
  fs.writeFileSync(fileName, JSON.stringify(data, null, 2));
}

axios.defaults.baseURL =
  'https://raw.githubusercontent.com/rsek/dataforged/main/roll20';

gulp.task('dataforge', async () => {
  const rawData = {
    oracles: await axios.get('/oracles.json'),
    assets: await axios.get('/assets.json'),
    moves: await axios.get('/moves.json'),
    movegroups: await axios.get('/movegroups.json'),
    rolls: await axios.get('/rolls.json'),
  };
  const translationData = {
    'translation-assets': await axios.get('/translation-assets.json'),
  };

  for (let key in rawData) {
    const data = rawData[key].data;
    const fileName = path.join(__dirname, `./app/data/${key}.json`);
    writeJson(fileName, data);
  }
  for (let key in translationData) {
    const data = translationData[key].data;
    const fileName = path.join(__dirname, `./app/translations/${key}.json`);
    writeJson(fileName, data);
  }
});

gulp.task('mergeTranslation', () => {
  return gulp
    .src('app/translations/translation-**.json')
    .pipe(gulpMergeJson({ fileName: 'translation.json' }))
    .pipe(gulp.dest('../'));
});

gulp.task('data', () => {
  return gulp
    .src(['app/data/**/*.json', '../translation.json'], { allowEmpty: true })
    .pipe(
      gulpMergeJson({
        fileName: 'data.json',
        edit: (json, file) => {
          // Extract the filename and strip the extension
          var filename = path.basename(file.path),
            primaryKey = filename.replace(path.extname(filename), '');
          // Set the filename as the primary key for our JSON data
          var data = {};
          data[primaryKey.toLowerCase()] = json;

          return data;
        },
      })
    )
    .pipe(gulp.dest('./temp'));
});

const gameData = readJSON('./temp/data.json');

const workerDataKeys = ['sheets'];

gulp.task('workerData', async () => {
  const fileName = './app/workers/scripts/_data.js';

  // console.log(data.sheets);
  const dataArray = workerDataKeys.map(
    (key) => `const ${key} = ${JSON.stringify(gameData[key], null, 2)};`
  );
  // console.log("dataArray:", dataArray);
  // console.log("Writing JS object constants to", fileName);
  fs.writeFileSync(fileName, dataArray.join(' '), { encoding: 'utf-8' });
});

const stylusDataObj = {
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

gulp.task('css', async () => {
  function toStylusObject(options) {
    const objectArray = options.object;
    const nameKey = options.nameKey;
    const blacklist = [...(options.blacklist || []), nameKey];
    const output = _.mapValues(
      _.keyBy(objectArray, (arrItem) => {
        return arrItem[nameKey];
      }),
      (item) => {
        return _.omit(item, blacklist);
      }
    );
    // console.log(output);
    return output;
  }
  await gameData;
  const stylusDataOut = _.mapValues(stylusDataObj, (value) =>
    toStylusObject(value)
  );
  return gulp
    .src('./app/Ironsworn-starforged.styl')
    .pipe(gulpStylus({ rawDefine: stylusDataOut }))
    .pipe(gulp.dest('./temp'));
});

gulp.task('html', () => {
  return gulp
    .src('./app/Ironsworn-starforged.pug')
    .pipe(
      gulpData(() => {
        return readJSON('./temp/data.json');
      })
    )
    .pipe(
      gulpPug({
        // pretty: true,
        ...require('./app/pug.config'),
      })
    )
    .pipe(gulp.dest('../'));
});

gulp.task('postCss', async () => {
  const plugins = [
    purgeCss({
      content: ['../*.html'],
      fontFace: true,
      // i really oughta do some stylus cleanup, but until then...
    }),
    autoprefixer(),
    postcssAddRootSelector({
      rootSelector: '.ui-dialog div.charsheet.charactersheet',
      // lazy way of gaining some specificity over r20's selectors :D
      // also keeps the css in stylus uncluttered + related to only the stuff we can see in the compiled html
    }),
    cssNano({
      preset: [
        'default',
        {
          discardComments: { removeAll: true },
        },
        {
          cssDeclarationSorter: { order: 'smacss' },
        },
      ],
    }),
    // cssNano doesn't have granular whitespace config, so we beautify it w/ another postCss plugin to keep the css readable for ppl building this thing; r20 minifies the spacing on its own, anyways.
    perfectionist({ format: 'compact', indentSize: 2 }),
    // FIXME perfectionist doesn't seem to be doing anything
  ];
  return gulp
    .src('./temp/*.css')
    .pipe(gulpPostcss(plugins))
    .pipe(gulp.dest('../'));
});

const taskSeries = [
  'dataforge',
  'mergeTranslation',
  'data',
  'workerData',
  'css',
  'html',
  'postCss',
];

gulp.task(
  'watch',
  gulp.series(taskSeries, () => {
    gulp.watch('./app/**/*.styl', gulp.series(['css']));
    gulp.watch(['./app/**/*.pug', './app/**/*.js'], gulp.series(['html']));
  })
);

gulp.task('build', gulp.series(taskSeries));
