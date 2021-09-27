const gulp = require('gulp');
const mergeJson = require('gulp-merge-json');

module.exports = async function mergeTranslations() {
  return gulp
    .src('app/translations/translation-**.json')
    .pipe(mergeJson({ fileName: 'translation.json' }))
    .pipe(gulp.dest('../'));
};