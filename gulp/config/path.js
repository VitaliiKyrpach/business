import * as nodePath from 'path'

const buildFolder = './dist';
const srcFolder = './src';

const rootFolder = nodePath.basename(nodePath.resolve());

export const path = {
    build: {
        html: `${buildFolder}/`,
        files: `${buildFolder}/files/`},
    src: {
        html: `${srcFolder}/*.pug`,
        files: `${srcFolder}/files/**/*.*`},
    watch: {
        html: `${srcFolder}/**/*.pug`,
        files: `${srcFolder}/files/**/*.*`},
    clean: buildFolder,
    buildFolder,
    srcFolder,
    rootFolder
}