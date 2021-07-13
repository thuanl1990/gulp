const plumber = require('gulp-plumber'),
	  pug = require('gulp-pug'),
	  replace = require( 'gulp-replace' ),
	  PATH = require('../path/path');
	

module.exports = function () {
	$.gulp.task('pug', () => {
		//console.log(PATH())
		return $.gulp.src(
			[
				'!./src/pug/**/*',
				'./src/pug/*.pug'
			]
		)
			.pipe(plumber())
			.pipe(pug({
				pretty: true
			}))
			.pipe(replace('.css@version', () => {
				return '.min.css?v=' + Date.now()
			}))
			.pipe(replace('.js@version', () => {
				return '.min.js?v=' + Date.now()
			}))
			.pipe(replace('@path', () => {
				return PATH().assets
			}))
			.pipe(plumber.stop())
			.pipe($.gulp.dest(PATH().output))
			.on('end', $.browserSync.reload);
	});
	// $.gulp.task('pug:build', () => {
		
	// 	return $.gulp.src(
	// 		[
	// 			'./src/pug/*.pug', 
	// 			'./src/pug/**/*.pug', 
	// 			'!./src/pug/layout/*',  
	// 			'!./src/pug/index/*', 
	// 			'!./src/pug/components/*', 
	// 			'!./src/pug/*/modules/*'
	// 		]
	// 	)
	// 		.pipe(pug({
	// 			pretty: true
	// 		}))
	// 		.pipe(replace('.css@version', () => {
	// 			return '.min.css?v=' + Date.now()
	// 		}))
	// 		.pipe(replace('.js@version', () => {
	// 			return '.min.js?v=' + Date.now()
	// 		}))
	// 		.pipe(replace('@path', () => {
	// 			return PATH.build_url
	// 		}))
	// 		.pipe($.gulp.dest('./dist/'))
	// });
};
