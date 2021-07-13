let paths = {
    dev_url           : "http://localhost:3000",
    dev_output        : "./dist",
    staging_url       : "/wp-content/themes/yamazen",
    staging_output    : "./build",
    wp_url            : "/wp-content/themes/yamazen",
    wp_output         : "../yamazen-cms/wp-content/themes/yamazen",
    production_url    : "",
    production_output : ""
}
let path = {}

module.exports = function() {
    $.gulp.task("env", async function() {
        //console.log(process.argv)
        let env = process.argv[3]

        if (process.argv[3] === undefined) {
            env = 'dev' 
        } else if (process.argv[3] === '--option') {
            env = process.argv[4]
        }
        path.input      = "./src/",
        path.url        = paths[`${env}_url`]
        path.output     = paths[`${env}_output`]
        path.assets     = paths[`${env}_url`] + '/assets'

        //console.log(path)
    });
    return path
}