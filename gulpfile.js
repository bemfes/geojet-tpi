const { src, dest, watch, parallel, series} = require("gulp");

const sass = require("gulp-sass")(require("sass"));

const concat = require("gulp-concat");

const uglify = require("gulp-uglify-es").default;

const browserSync = require("browser-sync").create();

const clean = require('gulp-clean')

const autoprefixer = require("gulp-autoprefixer");

const avif = require('gulp-avif')

const webp = require('gulp-webp')

const imagemin = require('gulp-imagemin')

const newer = require('gulp-newer')

const svgSprite = require('gulp-svg-sprite')

const fonter = require('gulp-fonter')

const ttf2woff2 = require('gulp-ttf2woff2')

const zip = require('gulp-zip')

const ftp = require('vinyl-ftp')


function deploy() {
  var connect = ftp.create({
    host: '31.31.196.3',
    user: 'u2335114',
    password: 'VIkHxKi29J8CJs7P',
    parallel: 10
  })
  var project = [
    'dist/**'
  ]
  return src(project, {buffer: false}).pipe(connect.dest('./www/nachivot.ru'))
}

function arc() {
  clean('./arc.zip')
  return src('dist/**/*.*')
  .pipe(zip('arc.zip'))
  .pipe(dest('./'))
}

function fonts() {
  return src('src/fonts/*.*')
  .pipe(fonter({
    formats: ['woff', 'ttf']
  }))
  .pipe(src('src/fonts/*.ttf'))
  .pipe(ttf2woff2())
  .pipe(dest('src/fonts'))
}

function images() {
  return src(['src/images/storage/*.*', '!src/images/storage/*.svg'])
  .pipe(newer('src/images'))
  .pipe(avif({quality: 50}))

  .pipe(src('src/images/storage/*.*'))
  .pipe(newer('src/images'))
  .pipe(webp())

  .pipe(src('src/images/storage/*.*'))
  .pipe(newer('src/images'))
  .pipe(imagemin())

  .pipe(dest('src/images'))

  .pipe(src('src/icons/storage/*.svg', '!src/images/*.png', '!src/images/*.jpg'))
  .pipe(newer('src/icons'))
  .pipe(imagemin())
  .pipe(dest('src/icons'))
}

function sprite() {
  return src('src/icons/*.svg')
  .pipe(svgSprite({
    mode: {
      stack: {
        sprite:'../sprite.svg',
        example: true
      }
    }
  }))
  .pipe(dest('src/icons'))
}


function cleanDist() {
  return src('dist')
  .pipe(clean())
}

function building() {
  return src(["src/css/*.css", "src/images/*.*", "src/icons/*.svg", "src/icons/favicon.ico/*.*", "src/fonts/*.*", "src/js/*.js", "src/*.html"], {base: 'src'})
  .pipe(dest('dist'))
}

function scripts() {
  return src("src/js/main.js")
    .pipe(concat("main.min.js"))
    .pipe(uglify())
    .pipe(dest("src/js"))
    
}

function styles() {
  return src("src/sass/style.sass")
    .pipe(sass({ outputStyle: "compressed" }))
    .pipe(concat("style.min.css"))
    .pipe(autoprefixer({overrideBrowserlist: ['last 10 version']}))
    .pipe(dest("src/css"))
    
}

exports.styles = styles;
exports.scripts = scripts;
exports.images = images
exports.sprite = sprite
exports.fonts = fonts
exports.arc = arc;
exports.deploy = deploy

exports.build = series(cleanDist, building)

