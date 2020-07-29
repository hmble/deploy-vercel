// gulpfile for sass compile
const { src, watch, dest, parallel } = require("gulp");
const sass = require("gulp-sass");
const postcss = require("gulp-postcss");
const rename = require("gulp-rename");
const cssnano = require("cssnano");
const autoprefixer = require("autoprefixer");
const browsersync = require("browser-sync").create();

const reload = browsersync.reload;

function css() {
  const plugins = [autoprefixer(), cssnano()];
  return src("sass/**/*.scss")
    .pipe(sass({ outputStyle: "expanded" }))
    .pipe(postcss(plugins))
    .pipe(rename({ suffix: ".min" }))
    .pipe(dest("./public"))
    .pipe(reload({ stream: true }));
}

function html() {
  return src("public/**/*.html").pipe(
    reload({
      stream: true,
    })
  );
}

function watching() {
  browsersync.init({
    server: {
      baseDir: "./public",
    },
    injectChanges: false,
    notify: false,
  });
  watch("sass/**/*.scss", parallel(css));
  watch("public/**/*.html", parallel(html));
}

exports.css = css;
exports.html = html;
exports.default = parallel(css, html);
exports.watch = watching;
