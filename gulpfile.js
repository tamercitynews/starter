var gulp                = require( 'gulp' );
var sass                = require( 'gulp-sass' );
var uglify              = require( 'gulp-uglify' );
var uglifyCSS           = require( 'gulp-uglifycss' );
var cleanCSS            = require( 'gulp-clean-css' );
var concat              = require( 'gulp-concat' );
var resolveDependencies = require( 'gulp-resolve-dependencies' );
var imagemin            = require( 'gulp-imagemin' );
var clean               = require( 'gulp-clean' );

var
  source         = './src/',
  dest           = './public',
  nodeModulesSrc = './node_modules';


var css = {
  in      : source + '/scss/style.scss',
  out     : dest + '/css/',
  watch   : source + '/scss/**/*',
  bundle  : 'bundle.min.css',
  sassOpts: {
    outputStyle    : 'nested',
    precision      : 8,
    errLogToConsole: true
  }
};


gulp.task(
  'sass',
  function ( done )
  {
    return gulp.src( css.in )
               .pipe( sass( css.sassOpts ) )
               .pipe( concat( css.bundle ) )
              //  .pipe( uglifyCSS() )
              //  .pipe( cleanCSS() )
               .pipe( gulp.dest( css.out ) );
    done();
  }
);

gulp.task(
  'default',
  gulp.series( 'sass',
               function ( done )
               {
                 done();
               }
  )
);
