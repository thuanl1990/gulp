const plumber = require('gulp-plumber'),
	scss = require('gulp-sass'),
	autoprefixer = require('gulp-autoprefixer'),
	sourcemaps = require('gulp-sourcemaps'),
	rename = require('gulp-rename'),
	purgecss = require('gulp-purgecss'),
	cleanCSS = require('gulp-clean-css'),
	concat = require('gulp-concat'),
	PATH = require('../path/path');

module.exports = function () {
	$.gulp.task('styles', () => {
		return $.gulp.src(PATH().input + '/assets/scss/**/*.scss')
			.pipe(plumber())
			.pipe(sourcemaps.init())
			.pipe(scss().on('error', scss.logError))
			.pipe(autoprefixer({
						overrideBrowserslist:  ['last 3 versions']
			}))
			.pipe(rename(function(path){
				path.dirname = path.dirname.replace('scss', 'css');
				path.extname = '.min.css'
			}))
			.pipe(sourcemaps.write('./'))
			.pipe($.gulp.dest(PATH().output + '/assets/css/'))
			.on('end', $.browserSync.reload);
	});

	// $.gulp.task('purgecss', () => {
	// 	return $.gulp.src('.dist/assets/css/**/*.css')
	// 		.pipe(purgecss({
	// 			content: ['.dist/**/*.html', '.dist/assets/js/**/*.js'],
	// 			defaultExtractor: content => {
	// 			const broadMatches = content.match(/[^<>"'`\s]*[^<>"'`\s:]/g) || []
	// 			const innerMatches = content.match(/[^<>"'`\s.()]*[^<>"'`\s.():]/g) || []
	// 			return broadMatches.concat(innerMatches)
	// 			}
	// 		}))
	// 		.pipe(cleanCSS({compatibility: 'ie8'}))
	// 		.pipe(dest(PATH().output + '/assets/css/'));
	// });
};
