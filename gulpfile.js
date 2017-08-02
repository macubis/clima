var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var sass = require('gulp-sass');
var minifyCSS = require('gulp-minify-css');
var webserver = require('gulp-webserver');

/*la primera tarea concatena los archivoc js*/
gulp.task('script', function(){
	gulp.src(['node_modules/jquery/dist/jquery.js', 'node_modules/bootstrap/dist/js/bootstrap.min.js', 'assets/js/*.js'])
		.pipe(concat('script.js'))
	//carpeta dist donde voy a guardar el nuevo archivo//
		.pipe(gulp.dest('dist/js/'));

});

//la segunda tarea concatena y minifica el archivo main.scss convirtiendolo en style.min.css//
gulp.task('style', function(){
	gulp.src(['node_modules/bootstrap/dist/css/bootstrap.min.css', 'assets/sass/estilos.scss'])
		.pipe(sass().on('error', sass.logError))
		.pipe(minifyCSS())
		.pipe(concat('style.min.css'))
		.pipe(gulp.dest('dist/css/'));

});
//la tercera tarea se llamara webserver nos crea un servidor web de desarrollo que se ejecuta en el localhost puerto 8000//

gulp.task('webserver', function(){
	gulp.src('../prueba-front-end/')
		.pipe(webserver({
			fallback: 'index.html',
			livereload: true,
			directoryListing: false,
			open: true
		}));
});
gulp.task('default', ['script', 'style', 'webserver']);
