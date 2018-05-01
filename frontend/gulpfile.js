var gulp = require("gulp"),
    exec = require("gulp-exec");

gulp.task("watch",["watchFrontEndChanges","detectDistChanges"]);

gulp.task("watchFrontEndChanges", function () {
    return  gulp.watch('src/**/*',['triggerBuild'])
});

gulp.task("triggerBuild", function () {
    console.log("Detected Changes");
    var options = {
        continueOnError: false,
    };
    var reportOptions = {
        err: true, // default = true, false means don't write err
        stderr: true, // default = true, false means don't write stderr
        stdout: true // default = true, false means don't write stdout
    }
    return gulp.src("./").pipe(exec("npm run local-build", options))
        .pipe(exec.reporter(reportOptions));

})

gulp.task("detectDistChanges",function () {
    gulp.watch('./dist/META-INF/resources/**/*',['copyFilesToTarget']);
});

gulp.task('copyFilesToTarget',['triggerBuild'],function () {
    console.log("Copying files to Target");
    gulp.src('./dist/META-INF/resources/**/*').pipe(gulp.dest('./target/classes/META-INF/resources'));
    console.log("Copying files Done");

});