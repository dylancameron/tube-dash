/** @type {import('tailwindcss').Config} */
export default {
	content: ["./src/**/*.{js,ts,jsx,tsx}", "./index.html"],
	theme: {
		extend: {
			fontFamily: {
				sans: ["Poppins", "sans-serif"],
				serif: ["Merriweather", "serif"],
				mono: ["Inconsolata", "monospace"],
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
