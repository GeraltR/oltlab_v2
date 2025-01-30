/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{html,js,ts,jsx,tsx}"],
    theme: {
        extend: {
            fontFamily: {
                printItalic: ['Instrument Serif Italic'],
                printRegular: ['Instrument Serif Regular']
            }
        },
    },
    variants: {
        extend: {
            opacity: ['disabled']
        }
    },
    plugins: [],
}

