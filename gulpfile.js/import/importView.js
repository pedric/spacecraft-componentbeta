const config				= require('../../config')
if(!config.import) return

const path					= require('path')
const gulp					= require('gulp')
const argv 					= require('yargs').argv
if(argv._ != 'import') return
const component 		= require('spacecomponent_' + argv.component)

const importViewTask = function() {
	return gulp.src(path.join(component, config.import.view.src, '/**/*' + argv.component + '*.{' + config.import.view.extensions + '}'))
	.pipe(gulp.dest(path.join(config.import.view.dest, argv.component)))
}

gulp.task('importView', importViewTask)
module.exports = importViewTask