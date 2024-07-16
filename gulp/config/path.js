import * as nodePath from 'path'

const buildFolder = './dist';
const srcFolder = './src';

const rootFolder = nodePath.basename(nodePath.resolve());

export const path = {
    build: {
        html: `${buildFolder}/`,
        images: `${buildFolder}/img`,
        js: `${buildFolder}/js`},
    src: {
        html: `${srcFolder}/*.pug`,
        images: `${srcFolder}/img/**/*.{jpg,png,jpeg,webp}`,
        svg: `${srcFolder}/img/**/*.svg`,
        js: `${srcFolder}/js/*.js`},
    watch: {
        html: `${srcFolder}/**/*.pug`,
        images: `${srcFolder}/img/**/*.{jpg,png,svg,jpeg,webp}`,
        js: `${srcFolder}/js/*.js`
    },
    clean: buildFolder,
    buildFolder,
    srcFolder,
    rootFolder
}