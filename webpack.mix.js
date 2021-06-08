const mix = require('laravel-mix');

mix.postCss('src/tailwind.css', 'public/css', [
    require('tailwindcss'),
    require('autoprefixer'),
]);