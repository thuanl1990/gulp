PATH = require('../path/path');

module.exports = function () {
    $.gulp.task('json', () => {
        return $.gulp.src(PATH().input + '/json/**/*.json')
            .pipe($.gulp.dest(PATH().output + '/json'))
            .pipe($.browserSync.reload({
                stream: true
        }));
    });
};