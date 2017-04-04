const config		= require('../../config')
if(!config.tasks.import) return

const path					= require('path')
const gulp					= require('gulp')
const gulpSequence  = require('gulp-sequence')
const argv 					= require('yargs').argv



const requireDir = require('require-dir')

const componentsArray = [];

const testComponent = require('spacecomponent_testfile')

// Set searchpaths for mainTask

// const paths = {
// 	src: [],
// 	dest: path.join(config.root.dest, config.tasks.main.dest)
// }

// if(config.tasks.main.src instanceof Array) {
// 	config.tasks.main.src.forEach(function(src) {
// 		paths.src.push(path.join(src, '/**/' + argv.component + '.{' + config.tasks.main.extensions + '}'))
// 	})
// } else {
// 	paths.src = path.join(config.root.src, config.tasks.main.src, '/**/' + argv.component + '.{' + config.tasks.main.extensions + '}')
// }


// mainTask is looking for files matching the value of param "name" 
// from "gulp import --name <value>" in folder library together with
// the file extensions given in config.json (tasks/main/extensions) 

const importTask = function() {
	return gulp.src(path.join(testComponent, '/**/*' + argv.component + '*.{' + config.tasks.import.main.extensions + '}'))
	.pipe(gulp.dest(path.join(config.tasks.import.main.dest)))
}



// jsTask is looking for files matching the value of param "name" 
// from "gulp import --component <value>" in folder library/js_modules together
// with the file extensions given in config.json (tasks/js/extensions)

// const importTask = function() {
// 	return gulp.src(path.join(config.root.src, config.tasks.js.src, '/**/' + argv.component + '.{' + config.tasks.js.extensions + '}'))
// 	.pipe(gulp.dest(path.join(config.root.dest, config.tasks.js.dest)))
// }



const importJs = function() {
	return gulp.src(path.join(config.tasks.import.js.src + argv.component, '/**/*' + argv.component + '*.js'))
	.pipe(gulp.dest(path.join(config.root.src, config.tasks.import.js.dest)))
}


// Init
gulp.task('import', gulpSequence(importTask, importJs))
module.exports = importTask

