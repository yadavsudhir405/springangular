var gulp = require("gulp"),
    exec = require("gulp-exec");

gulp.task("watch",["watchFrontEndChanges"]);

gulp.task("watchFrontEndChanges", function () {
    return  gulp.watch('src/app/**/*',['triggerBuild'])
});

gulp.task("triggerBuild", function () {
    console.log("Detected Changes");
    var options = {
        continueOnError: false, // default = false, true means don't emit error event
    };
    var reportOptions = {
        err: true, // default = true, false means don't write err
        stderr: true, // default = true, false means don't write stderr
        stdout: true // default = true, false means don't write stdout
    }
    return gulp.src("./").pipe(exec("npm run build", options))
        .pipe(exec.reporter(reportOptions));

})