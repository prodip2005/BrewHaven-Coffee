/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ['var(--font-geist-sans)', 'system-ui', 'sans-serif'],
                serif: ['Georgia', 'Cambria', 'Times New Roman', 'Times', 'serif'],
            },
            colors: {
                background: "var(--background)",
                foreground: "var(--foreground)",
                primary: "#6F4E37",
                secondary: "#A67B5B",
                accent: "#F4E4BC",
                surface: "#FFFFFF",
            },
            boxShadow: {
                'soft': '0 4px 20px -2px rgba(0, 0, 0, 0.1)',
                'hover': '0 10px 25px -5px rgba(0, 0, 0, 0.15)',
            },
            animation: {
                'loop-scroll': 'loop-scroll 40s linear infinite',
            },
            keyframes: {
                'loop-scroll': {
                    from: { transform: 'translateX(0)' },
                    to: { transform: 'translateX(-100%)' },
                }
            }
        },
    },
    plugins: [],
};
