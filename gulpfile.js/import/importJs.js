const config				= require('../../config')
if(!config.import) return

const path					= require('path')
const gulp					= require('gulp')
const argv 					= require('yargs').argv
if(argv._ != 'import') return
const component 		= require('spacecomponent_' + argv.component)

const importJsTask = function() {
	return gulp.src(path.join(component, config.import.js.src, '/**/*' + argv.component + '*.{' + config.import.js.extensions + '}'))
	.pipe(gulp.dest(path.join(config.root.src, config.import.js.dest)))
}

gulp.task('importJs', importJsTask)
module.exports = importJsTask



