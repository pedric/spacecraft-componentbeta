const config		= require('../../config')
if(!config.tasks.import) return

const path		= require('path')
const gulp		= require('gulp')
const spacecomponents = require('spacecomponents')
const argv 		= require('yargs').argv

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

// const importTask = function() {
// 	return gulp.src(paths.src)
// 	.pipe(gulp.dest(paths.dest))
// }



// jsTask is looking for files matching the value of param "name" 
// from "gulp import --name <value>" in folder library/js_modules together
// with the file extensions given in config.json (tasks/js/extensions)

// const importTask = function() {
// 	return gulp.src(path.join(config.root.src, config.tasks.js.src, '/**/' + argv.component + '.{' + config.tasks.js.extensions + '}'))
// 	.pipe(gulp.dest(path.join(config.root.dest, config.tasks.js.dest)))
// }


const importTask = function() {
	return gulp.src(path.join(spacecomponents, argv.component + '.html'))
	.pipe(gulp.dest(path.join(config.root.dest, config.tasks.js.dest)))
}


// Init
gulp.task('import', importTask)
module.exports = importTask