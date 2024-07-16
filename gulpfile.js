import gulp from 'gulp'
import ghPages from 'gulp-gh-pages'
import {path} from './gulp/config/path.js'
import { plugins } from './gulp/config/plugins.js'
import { reset } from './gulp/tasks/reset.js'
import { html } from './gulp/tasks/html.js'
import { server } from './gulp/tasks/server.js'
import { images } from './gulp/tasks/images.js'
import { js } from './gulp/tasks/js.js'

global.app = {path, gulp, plugins}

const watcher = () =>{
    gulp.watch(path.watch.html, html);
    gulp.watch(path.watch.images, images);
    gulp.watch(path.watch.js, js);
}

const mainTasks = gulp.parallel(html, images, js)

const dev = gulp.series(reset, mainTasks, gulp.parallel(watcher, server))

gulp.task('default', dev)
gulp.task('deploy', function() {
    return gulp.src('./dist/**/*',{encoding: false})
      .pipe(ghPages());
  });

// const deploy = () =>{
//     return gulp.src('./dist/**/*',{encoding: false})
//       .pipe(ghPages());
// }

// exports.default = dev;
// exports.deploy = deploy;