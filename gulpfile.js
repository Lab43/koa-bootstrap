var gulp = require('gulp')
	, nodemon = require('gulp-nodemon')
	, compass = require('gulp-compass')
	, jshint = require('gulp-jshint')
  , mocha = require('gulp-mocha')
  , exit = require('gulp-exit')
;

// compile scss
gulp.task('compass', function () {
	gulp.src('./public/scss/app.scss')
		.pipe(compass({
      css: './public/css',
      sass: './public/scss',
      image: './public/img',
      javascript: './public/js',
      import_path: ['./bower_components/bootstrap-sass-official/vendor/assets/stylesheets']
  	}))
		.pipe(gulp.dest('./public/css'))
	;
});

gulp.task('lint', function () {
	gulp.src(['./**/*.js', '!node_modules/**/*', '!bower_components/**/*'])
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

gulp.task('run', function () {
	// restart node when app changes
	nodemon({script: 'app.js', nodeArgs: ['--harmony']})
		.on('change', function () {
			console.log('nodemon change');
		})
		.on('restart', function () {
			console.log('nodemon restart');
		})
	;
	// recompile scss when files change
	gulp.watch('public/**/*.scss', ['compass']);
});

// can't be run directly because of node -harmony flag
// use $ npm test
gulp.task('default', ['lint', 'test']);
