'use strict';

var gulp = require('gulp');
var gutil = require('gulp-util');
var jshint = require('gulp-jshint');
var watchify = require('watchify');

var browserify = require('browserify');
var handlebars = require('gulp-handlebars');
var declare = require('gulp-declare');
var concat = require('gulp-concat');
var wrap = require('gulp-wrap');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var sourcemaps = require('gulp-sourcemaps');
var hbsfy = require('hbsfy');
var rename = require('gulp-rename');
var assign = require('lodash').assign;



//================================================================
// Options config
//================================================================

// Browserify custom options
var browserifyOptions = {
	entries: './client/javascripts/app.js',
	debug: true,
	// defining transforms here will avoid crashing your stream
	extensions: ['.hbs'],
	transform: [hbsfy]
}
// Configure hbsfy
hbsfy.configure({
  	extensions: ['hbs']
});
var opts = assign({}, watchify.args, browserifyOptions);

//================================================================
// End options config
//================================================================




//================================================================
// Tasks
//================================================================

// define the default task
gulp.task('default', ['build']);

// The build task
gulp.task('build', ['copyHtml', 'copyStylesheets', 'compileJS'])


// configure the jshint task
gulp.task('jshint', function() {
	return gulp.src('client/javascripts/**/*.js')
		.pipe(jshint())
		.pipe(jshint.reporter('jshint-stylish'));
});


// configure which tasks to watch and what tasks to use on file changes
gulp.task('watch', function() {
	gulp.watch('client/javascripts/**/*.js', ['jshint']);
});


gulp.task('copyHtml', function() {
	gulp.src('client/*.html').pipe(gulp.dest('./public'));
});


gulp.task('copyStylesheets', function() {
	gulp.src('client/stylesheets/*').pipe(gulp.dest('./public/stylesheets'));
});


gulp.task('compileJS', function() {
	//var b = watchify(browserify(opts));
	var b = browserify(browserifyOptions);


  	 return b.bundle()
    .pipe(source('bundle.js'))
    .pipe(buffer())
    .pipe(sourcemaps.init({loadMaps: true}))
        // Add transformation tasks to the pipeline here.
        .on('error', gutil.log)
    .pipe(sourcemaps.write('./'))
    //.pipe(rename('bundle.js'))
    .pipe(gulp.dest('./public/javascripts/'));
});


// Compile handlebars templates to client/javascripts/templates.js
gulp.task('compileTemplates', function() {
	gulp.src('./client/javascripts/templates/*.hbs')
		.pipe(handlebars())
		.pipe(wrap('Handlebars.template(<%= contents %>)'))
		.pipe(declare({
			namespace: 'booklist',
			noRedeclare: true,	// Avoid duplicate declarations of namespace
		}))
		.pipe(concat('templates.js'))
		.pipe(gulp.dest('./client/javascripts/templates/'));
});


//================================================================
// End tasks
//================================================================



