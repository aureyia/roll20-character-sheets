const gulp = require('gulp');
const postcss = require('gulp-postcss');
const addRootSelector = require('postcss-add-root-selector');
const rename = require('gulp-rename');
const autoprefixer = require('autoprefixer');

module.exports = async function postCss() {
  const postCssPlugins = [
    addRootSelector({
      rootSelector: '.ui-dialog .charsheet.charactersheet'
    }),
    autoprefixer()
  ];
  return gulp
    .src('./temp/Ironsworn-starforged.css')
    .pipe(postcss(postCssPlugins))
    .pipe(rename("Ironsworn-starforged-root-selectors.css"))
    .pipe(gulp.dest('./temp/'))
}
