import defaultTheme from 'tailwindcss/defaultTheme';
import forms from '@tailwindcss/forms';

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.tsx',
    ],

    theme: {
        extend: {
            colors:{
                'sidebar-bg': '#404e67',
                'sidebar-text': '#dcdcdc',
                'sidebar-mute': '#929395',
                'main-text': '#969eb1',
                'main-bold': '#474450',
                'my-orange': {
                  500: "#feb595",
                  700: "#fe9467",
                },
                'my-green': {
                  500: "#0df0a1",
                  700: "#0ac483",
                },
                'my-red': {          
                  500: "#ee5d4e",
                  700: "#eb3624",
                },
            },
            fontFamily: {
                sans: ['Figtree', ...defaultTheme.fontFamily.sans],
            },
        },
    },

    plugins: [forms],
};
