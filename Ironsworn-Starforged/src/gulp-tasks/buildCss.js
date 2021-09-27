const gulp = require('gulp');
const _ = require('lodash');
const stylus = require('gulp-stylus');
const readJson = require('./helpers/readJson')
const toStylusObject = require('./helpers/toStylusObject')
const buildStylusData = require('./helpers/buildStylusData.js');
const addRootSelector = require('postcss-add-root-selector');
const postcss = require('gulp-postcss')

module.exports = async function buildCss(stylusSrc, rootSelector=false, cssDest="./temp") {
  const postCssPlugins = [
    addRootSelector({
      rootSelector: '.ui-dialog .charsheet.charactersheet'
    }),
    // autoprefixer()
  ];
  const gameData = readJson('./temp/data.json');
  const stylusDataObj = buildStylusData(gameData);
  const stylusDataOut = _.mapValues(stylusDataObj, (value) =>
    toStylusObject(value)
  );
  if (rootSelector == false) {
    return new Promise((resolve, reject) => {
      gulp
      .src(stylusSrc)
      .pipe(stylus({ rawDefine: stylusDataOut }))
      .pipe(gulp.dest(cssDest))
      .on('end', resolve)
      .on('error', reject)});
  } else if (rootSelector == true) {
    return new Promise((resolve, reject) => {
      gulp
      .src(stylusSrc)
      .pipe(stylus({ rawDefine: stylusDataOut }))
      .pipe(postcss(postCssPlugins))
      .pipe(gulp.dest(cssDest))
      .on('end', resolve)
      .on('error', reject)
    })
  }
};
