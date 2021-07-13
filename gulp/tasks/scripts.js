const uglify = require('gulp-uglify'),
	rename = require('gulp-rename'),
	bro = require('gulp-bro'),
	babelify = require('babelify'),
	sourcemaps = require('gulp-sourcemaps'),
	PATH = require('../path/path');

module.exports = function () {
	$.gulp.task('js', () => {
		return $.gulp.src(PATH().input + '/assets/js/*.js')
			.pipe(sourcemaps.init())
			.pipe(bro({
				transform: [babelify.configure({ 
					presets: ['@babel/preset-env'] 
				})]
			}))
			.pipe(rename({extname: '.min.js'}))
			//.pipe(sourcemaps.write('./'))
			.pipe($.gulp.dest(PATH().output + '/assets/js'))
			.pipe($.browserSync.reload({
					stream: true
			}));
	});

	// $.gulp.task('js:build', () => {
	// 	return $.gulp.src([
	// 		PATH.input + '//js/**/*.js',
	// 		!PATH.input + '//js/components/*'
	// 	])
	// 		.pipe(bro({
	// 			transform: [babelify.configure({ 
	// 				presets: ['@babel/preset-env'] 
	// 			})] 
	// 		}))
	// 		.pipe(uglify())
	// 		.pipe(rename({extname: '.min.js'}))
	// 		.pipe($.gulp.dest(PATH.build_output + '/js'))
	// });
};
