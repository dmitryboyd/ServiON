const { src, dest, watch, series, parallel } = require("gulp");
const browsersync = require("browser-sync").create();
const fileinclude = require("gulp-file-include");
const del = require("del");
const scss = require("gulp-sass");
const autoprefixer = require("gulp-autoprefixer");
const group_media = require("gulp-group-css-media-queries");
const cleanCSS = require("gulp-clean-css");
const rename = require("gulp-rename");
const uglify = require("gulp-uglify-es").default;
const imagemin = require("gulp-imagemin");

const project_folder = require("path").basename(__dirname);
const source_folder = "#src";

let path={
    build: {
        html: project_folder + "/",
        css: project_folder + "/css/",
        js: project_folder + "/js/",
        img: project_folder + "/img/",
        fonts: project_folder + "/fonts/",
    },
    src: {
        html: [source_folder + "/*.html", "!"+source_folder + "/_*.html"],
        css: source_folder + "/scss/style.scss",
        js: source_folder + "/js/script.js",
        img: source_folder + "/img/**/*.*",
        fonts: source_folder + "/fonts/*.{eot,ttf,svg,woff,woff2}",
    },
    watch: {
        html: source_folder + "/**/*.html",
        css: source_folder + "/scss/**/*.scss",
        js: source_folder + "/js/**/*.js",
        img: source_folder + "/img/**/*.*",
    },
    clean: "./" + project_folder + "/"
}

function browserSync() {
    browsersync.init({
        server:{
            baseDir: "./" + project_folder + "/"
        },
        port: 3000,
        notify: false
    })
}

function html() {
    return src(path.src.html)
        .pipe(fileinclude())
        .pipe(dest(path.build.html))
        .pipe(browsersync.stream())
}

function css() {
    return src([path.src.css, "node_modules/swiper/swiper-bundle.css"])
        .pipe(scss({
            outputStyle: "expanded"
        }))
        .pipe(group_media())
        .pipe(autoprefixer({
            overrideBrowserslist: ["last 5 versions"],
            cascade: true
        }))
        .pipe(dest(path.build.css))
        .pipe(cleanCSS())
        .pipe(rename({
            extname: ".min.css"
        }))
        .pipe(dest(path.build.css))
        .pipe(browsersync.stream())
}

function js() {
    return src([path.src.js, "node_modules/swiper/swiper-bundle.js"])
        .pipe(fileinclude())
        .pipe(dest(path.build.js))
        .pipe(uglify())
        .pipe(rename({
            extname: ".min.js"
        }))
        .pipe(dest(path.build.js))
        .pipe(browsersync.stream())
}

function img() {
    return src(path.src.img)
        .pipe(imagemin({
            progressive: true,
            svgoPlugins: [{ removeViewBox: true }],
            interlaced: true,
            optimizationLevel: 3 // 0 - 7
        }))
        .pipe(dest(path.build.img))
        .pipe(browsersync.stream())
}

function fonts() {
    return src(path.src.fonts)
        .pipe(dest(path.build.fonts))
}

function watchFiles() {
    watch([path.watch.html], html)
    watch([path.watch.css], css)
    watch([path.watch.js], js)
    watch([path.watch.img], img)
}

function clean() {
    return del(path.clean)
}

const build = series(clean, parallel(html, css, js, img, fonts));
const watching = parallel(build, watchFiles, browserSync);

exports.html = html;
exports.css = css;
exports.js = js;
exports.img = img;
exports.fonts = fonts;
exports.build = build;
exports.watching = watching;
exports.default = watching