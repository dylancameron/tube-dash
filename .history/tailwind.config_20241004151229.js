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
			colors: {
				primary: {
					DEFAULT: "#3B82F6",
					dark: "#2563EB",
				},
				secondary: {
					DEFAULT: "#10B981",
					dark: "#059669",
				},
				tertiary: {
					DEFAULT: "#F59E0B",
					dark: "#D97706",
				},
				default: {
					DEFAULT: "#6B7280",
					dark: "#4B5563",
				},
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
