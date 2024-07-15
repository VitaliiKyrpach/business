import imagemin from "gulp-imagemin"
import gulpWebp from 'gulp-webp'

export const images =()=>{
    return app.gulp.src(app.path.src.images, {encoding: false})
    .pipe(app.plugins.newer(app.path.build.images))
    .pipe(gulpWebp())
    .pipe(app.gulp.dest(app.path.build.images))
    .pipe(app.gulp.src(app.path.src.images, {encoding: false}))
    .pipe(app.plugins.newer(app.path.build.images))
    .pipe(imagemin({
        progressive: true,
        svgoPlugins: [{removeViewBox: false}],
        interlaced: true,
        optimizationLevel: 3
    }))
    .pipe(app.gulp.dest(app.path.build.images))
    .pipe(app.gulp.src(app.path.src.svg))
    .pipe(app.gulp.dest(app.path.build.images))
    .pipe(app.plugins.browsersync.stream())
}
// export const images =()=>{
//     return app.gulp.src(app.path.src.images, {encoding: false})
//     .pipe(app.gulp.dest(app.path.build.images))
//     .pipe(app.gulp.src(app.path.src.svg))
//     .pipe(app.gulp.dest(app.path.build.images))
//     .pipe(app.plugins.browsersync.stream())
// }