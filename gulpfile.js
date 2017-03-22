"use strict";

const gulp  = require("gulp")
    , babel = require("gulp-babel")
    , mocha = require("gulp-mocha");

gulp.task("babel", () =>

    gulp.src("lib/index.js")
        .pipe(babel({
            presets: ["es2015"]
        }))
        .pipe(gulp.dest("dist"))

);

gulp.task("test", ["babel"], () =>

    gulp.src("test/index.js", { read: false })
        .pipe(mocha())

);