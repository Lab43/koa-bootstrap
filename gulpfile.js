var gulp = require('gulp')
	, nodemon = require('gulp-nodemon')
	, compass = require('gulp-compass')
	, jshint = require('gulp-jshint')
  , mocha = require('gulp-mocha')
  , exit = require('gulp-exit')
  , concat = require('gulp-concat')
  , uglify = require('gulp-uglify')
  , minifyCss = require('gulp-minify-css')
  , bower = require('gulp-bower')
  , config = require('./config')('development')
;

// compile scss
gulp.task('compass', function () {
	gulp.src('public/scss/app.scss')
		.pipe(compass({
      css: 'public/css',
      sass: 'public/scss',
      image: 'public/img',
      import_path: ['bower_components/bootstrap-sass-official/vendor/assets/stylesheets']
  	}))
		.pipe(gulp.dest('public/css'))
	;
});

// lint js
gulp.task('lint', function () {
	gulp.src(['./**/*.js', '!node_modules/**/*', '!bower_components/**/*', '!public/build/*.js'])
		.pipe(jshint({
			laxcomma: true,
      esnext: true,
      trailing: true,
		}))
		.pipe(jshint.reporter('jshint-stylish'))
	;
});

// can't be run directly because of node -harmony flag
// use $ npm test
gulp.task('test', function () {
  gulp.src(['test/**/*.js'])
    .pipe(mocha({
      reporter: 'spec'
    }))
    .pipe(exit())
  ;
});

// run app in development
// will restart node when js changes, and recompile css when scss changes
gulp.task('run', function () {
	nodemon({script: 'app.js', nodeArgs: ['--harmony']})
		.on('change', function () {
			console.log('nodemon change');
		})
		.on('restart', function () {
			console.log('nodemon restart');
		})
	;
	gulp.watch('public/**/*.scss', ['compass']);
});

// build js and css for production
gulp.task('build', function () {
  gulp.src(config.scripts)
    .pipe(concat('all.js'))
    .pipe(uglify())
    .pipe(gulp.dest('public/build'))
  ;
  gulp.src(config.stylesheets)
    .pipe(concat('all.css'))
    .pipe(minifyCss({
      keepSpecialComments: 0
    }))
    .pipe(gulp.dest('public/build'))
  ;
});

gulp.task('postinstall', function () {
  bower();
});

// can't be run directly because of node -harmony flag
// use $ npm test
gulp.task('default', ['lint', 'test']);
