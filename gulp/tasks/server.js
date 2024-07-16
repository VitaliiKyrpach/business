export const server = () =>{
    app.plugins.browsersync.init({
        server: `${app.path.build.html}`,
        notify: false,
        port: 3000
    })
}