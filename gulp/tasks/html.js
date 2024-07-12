import GulpPug from "gulp-pug"

export const html = () =>{
    return app.gulp.src(app.path.src.html)
        .pipe(GulpPug({
            pretty: true,
            verbose: true,
        }))
        .pipe(app.gulp.dest(app.path.build.html))
        .pipe(app.plugins.browsersync.stream())
}