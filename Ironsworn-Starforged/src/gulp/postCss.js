const gulp = require('gulp');
const concat = require('gulp-concat');
const postcss = require('gulp-postcss');
const addRootSelector = require('postcss-add-root-selector');
const autoprefixer = require('autoprefixer');
const purgeCss = require('@fullhuman/postcss-purgecss');
const cssNano = require('cssnano');


gulp.task('postCssMain', async () => {
 const postCssPlugins = [
    // purgeCss({
    //   content: ['../*.html'],
    // }),
    addRootSelector({
      rootSelector: '.ui-dialog .charsheet.charactersheet'
    }),
 ];
  return gulp
    .src('./temp/Ironsworn-starforged.css')
    .pipe(postcss(postCssPlugins))
    .pipe(gulp.dest('./temp/'));
});
// gulp.task('postCssRollTemplates', async () => {
//  const postCssPlugins = [
//     purgeCss({
//       content: ['../*.html'],
//     }),
//  ];
//   return gulp
//     .src('./temp/template.css')
// });
gulp.task('postCssConcat', async () => {
  const postCssPlugins = [
    autoprefixer(),
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
    })];
  return gulp
    .src('./temp/*.css')
    .pipe(postcss(postCssPlugins))
    .pipe(concat("Ironsworn-starforged.css"))
    .pipe(gulp.dest('../'));
 });

module.exports = gulp.task('postCss', gulp.series([
  'postCssMain',
  // 'postCssRollTemplates',
  'postCssConcat'
]));


