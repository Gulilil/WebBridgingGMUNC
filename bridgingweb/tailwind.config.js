/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{html,js,jsx}'],
    theme: {
        extend: {
            heights: {
                76: '18.75rem',
            },
            fontFamily: {
                DEFAULT: ['Lato', 'sans-serif'],
                gbDisplay: ['Hunger Games', 'Lato', 'sans-serif'],
            },
            colors: {
                sand: {
                    light: '#E2CBB1',
                    medium: '#D7A775',
                    dark: '#DE9A3A',
                },
                brown: '#4E2320',
            },
        },
    },
    plugins: [],
};
