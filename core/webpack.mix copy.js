const mix = require('laravel-mix');

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

mix.js(['../frontEnd/js/jquery.easing.1.3.js',
        '../frontEnd/js/bootstrap.min.js',
        '../frontEnd/js/jquery.fancybox.pack.js',
        '../frontEnd/js/jquery.fancybox-media.js',
        '../frontEnd/js/google-code-prettify/prettify.js',
        '../frontEnd/js/portfolio/jquery.quicksand.js',
        '../frontEnd/js/portfolio/setting.js',
        '../frontEnd/js/jquery.flexslider.js',
        '../frontEnd/js/animate.js',
        '../frontEnd/js/custom.js',
        '../frontEnd/js/owl-carousel/owl.carousel.js'], 'public/js')
    .sass('resources/sass/app.scss', 'public/css')
    .disableNotifications()
    .version();