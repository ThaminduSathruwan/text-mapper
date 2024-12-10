/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            colors: {
                blue: {
                    500: "#4299e1",
                    600: "#3182ce",
                },
                purple: {
                    600: "#805ad5",
                },
            },
        },
    },
    plugins: [],
}

