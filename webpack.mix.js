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

mix
    .js('vendor/almasaeed2010/adminlte/plugins/jquery/jquery.min.js', 'public/js')
    .js('vendor/almasaeed2010/adminlte/dist/js/adminlte.min.js', 'public/js')
    .js('vendor/almasaeed2010/adminlte/plugins/bootstrap/js/bootstrap.bundle.min.js', 'public/js')
    .js('vendor/almasaeed2010/adminlte/plugins/chart.js/Chart.min.css', 'public/js')
    .js('resources/js/app.js', 'public/js')
    
    .css('vendor/almasaeed2010/adminlte/dist/css/adminlte.min.css', 'public/css')
    .css('vendor/components/font-awesome/css/all.min.css', 'public/css')
    
    .copy('resources/Images', 'public/images')

    .vue();
