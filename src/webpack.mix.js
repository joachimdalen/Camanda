let mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */
let contentRoot = 'resources/assets/';
let publicRoot = 'public/'
mix.setPublicPath('./');

mix.react(contentRoot + 'js/app.js', publicRoot + 'js');
mix.sass(contentRoot + 'sass/app.scss', publicRoot + 'css').options({
    processCssUrls: false
});;
mix.styles([contentRoot + 'css/tabler.css'], publicRoot + 'css/vendor.css').options({
    processCssUrls: false
});;
mix.copyDirectory(contentRoot + 'fonts', publicRoot + 'fonts');
mix.copyDirectory(contentRoot + 'images', publicRoot + 'img');


mix.version();