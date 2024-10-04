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
					50: "#ECFDF5",
					100: "#D1FAE5",
					200: "#A7F3D0",
					300: "#6EE7B7",
					400: "#34D399",
					500: "#10B981", // Default
					600: "#059669",
					700: "#047857",
					800: "#065F46",
					900: "#064E3B",
					dark: {
						50: "#D1FAE5",
						100: "#A7F3D0",
						200: "#6EE7B7",
						300: "#34D399",
						400: "#10B981",
						500: "#059669",
						600: "#047857",
						700: "#065F46",
						800: "#064E3B",
						900: "#064E3B",
					},
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
