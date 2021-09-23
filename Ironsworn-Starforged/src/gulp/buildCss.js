const gulp = require('gulp');
const _ = require('lodash');
const stylus = require('gulp-stylus');

const readJson = require('./helpers/readJson')
const toStylusObject = require('./helpers/toStylusObject')
const gameData = readJson('./temp/data.json');

module.exports = gulp.task('buildCss', async () => {
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
  const stylusDataOut = _.mapValues(stylusDataObj, (value) =>
    toStylusObject(value)
  );
  return gulp
    .src(['./app/Ironsworn-starforged.styl', "./app/roll-templates/template.styl"])
    .pipe(stylus({ rawDefine: stylusDataOut }))
    .pipe(gulp.dest('./temp/'))
});
