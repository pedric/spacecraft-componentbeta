const config				= require('../../config')
if(!config.import) return

const path					= require('path')
const gulp					= require('gulp')
const argv 					= require('yargs').argv
const component 		= require(argv.component)

const importViewTask = function() {
	return gulp.src(path.join(component, config.import.view.src, '/**/*.{' + config.import.view.extensions + '}'))
	.pipe(gulp.dest(path.join(config.import.view.dest, argv.component)))
}

gulp.task('importView', importViewTask)
module.exports = importViewTask