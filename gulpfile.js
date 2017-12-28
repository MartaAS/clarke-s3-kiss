var autoprefixer = require('gulp-autoprefixer');
var browserSync  = require('browser-sync');
var combineMq    = require('gulp-combine-mq');
var concat       = require('gulp-concat');
var config       = require('./config.json');
var cssminifiy   = require('gulp-clean-css');
var gulp         = require('gulp');
var gutil        = require('gulp-util');
var notify       = require('gulp-notify');
var plumber      = require('gulp-plumber');
var reload       = browserSync.reload;
var sass         = require('gulp-sass');
var sourcemaps   = require('gulp-sourcemaps');
var uglify       = require('gulp-uglify');

<<<<<<< HEAD
=======




>>>>>>> weLgulp
// > Gestiona los errores
var onError = function (err) {
	gutil.beep();
	console.log(err);
};

<<<<<<< HEAD
=======




>>>>>>> weLgulp
// > Procesa los archivos SASS/SCSS, añade sourcemaps y autoprefixer
gulp.task('styles', function(cb) {
	return gulp.src(config.scss.src)
		.pipe(sourcemaps.init())
		.pipe(plumber({errorHandler: notify.onError("Error: <%= error.message %>")}))
		.pipe(sass({
			outputStyle: 'extended',
		}))
		.pipe(combineMq({
			beautify: true
		}))
		.pipe(autoprefixer({
			browsers: [
				'last 2 versions',
				'ie >= 10'
			],
			cascade: false
		}))
		.pipe(sourcemaps.write('./'))
		.pipe(gulp.dest(config.scss.dest))
		.pipe(browserSync.reload({ stream:true }))
		.pipe(notify({message: 'CSS OK', onLast: true}));
});

<<<<<<< HEAD
=======




>>>>>>> weLgulp
// > Procesa los archivos SASS/SCSS, sin sourcemaps, minimizados y con autoprefixer
gulp.task('styles-min', function(cb) {
	return gulp.src(config.scss.src)
		.pipe(plumber({errorHandler: notify.onError("Error: <%= error.message %>")}))
		.pipe(sass({
			outputStyle: 'compressed',
		}))
		.pipe(combineMq({
			beautify: false
		}))
		.pipe(autoprefixer({
			browsers: [
				'last 2 versions',
				'ie >= 10'
			],
			cascade: false
		}))
		.pipe(gulp.dest(config.scss.dest))
		.pipe(notify({message: 'CSS MIN OK', onLast: true}));
});

<<<<<<< HEAD
=======




>>>>>>> weLgulp
// > Procesa los scripts concatenando
gulp.task('scripts', function(){
	return gulp.src(config.js.src)
		.pipe(sourcemaps.init())
		.pipe(plumber({errorHandler: notify.onError("Error: <%= error.message %>")}))
		.pipe(concat('main.min.js'))
		//.pipe(uglify())
		.pipe(sourcemaps.write('./'))
		.pipe(gulp.dest(config.js.dest))
		.pipe(browserSync.reload({ stream:true }))
		.pipe(notify({message: 'JS OK', onLast: true}));
});

<<<<<<< HEAD
=======




>>>>>>> weLgulp
// > Procesa los scripts concatenando, minimizando y sin sourcemaps
gulp.task('scripts-min', function(){
	return gulp.src(config.js.src)
		.pipe(plumber({errorHandler: notify.onError("Error: <%= error.message %>")}))
		.pipe(concat('main.min.js'))
		.pipe(uglify())
		.pipe(gulp.dest(config.js.dest))
		.pipe(notify({message: 'JS MIN OK', onLast: true}));
});

<<<<<<< HEAD
=======





>>>>>>> weLgulp
// > Arranca el servidor web con BrowserSync
gulp.task('default', ['styles', 'scripts'], function () {
	browserSync.init({
		server : {
			baseDir: "./"
		},
		ghostMode: false,
		online: true
	});
<<<<<<< HEAD
	gulp.watch(config.img, ['bs-reload']);
=======
	gulp.watch(config.images, ['bs-reload']);
>>>>>>> weLgulp
	gulp.watch(config.scss.src, ['styles']);
	gulp.watch(config.js.src, ['bs-reload', ['scripts']]);
	gulp.watch(config.html, ['bs-reload']);
});

<<<<<<< HEAD
=======



>>>>>>> weLgulp
// > Genera una versión lista para producción
gulp.task('deploy', ['styles-min', 'scripts-min'], function () {
});


<<<<<<< HEAD
=======



>>>>>>> weLgulp
// > Recarga las ventanas del navegador
gulp.task('bs-reload', function () {
	browserSync.reload();
});
