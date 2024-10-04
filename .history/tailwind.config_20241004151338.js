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
					50: "#EFF6FF",
					100: "#DBEAFE",
					200: "#BFDBFE",
					300: "#93C5FD",
					400: "#60A5FA",
					500: "#3B82F6",
					600: "#2563EB",
					700: "#1D4ED8",
					800: "#1E40AF",
					900: "#1E3A8A",
					dark: {
						50: "#E0E7FF",
						100: "#C7D2FE",
						200: "#A5B4FC",
						300: "#818CF8",
						400: "#6366F1",
						500: "#4F46E5",
						600: "#4338CA",
						700: "#3730A3",
						800: "#312E81",
						900: "#232554",
					},
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
