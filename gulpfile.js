var gulp = require("gulp");
var browserify = require("browserify");
var babelify = require("babelify");
var source = require("vinyl-source-stream");

gulp.task("default", function () {
    console.log("in default task")
});


gulp.task("demo-createElement", function () {
    return browserify("./src/demo-createElement.js")
        .transform(babelify)
        .bundle()
        .pipe(source("demo-react.js"))
        .pipe(gulp.dest("./build/"));

});
