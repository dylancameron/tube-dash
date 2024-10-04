/** @type {import('tailwindcss').Config} */
export default {
	content: ["./src/**/*.{js,ts,jsx,tsx}", "./index.html"],
	darkMode: "class",
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
					50: "#FFFBEB",
					100: "#FEF3C7",
					200: "#FDE68A",
					300: "#FCD34D",
					400: "#FBBF24",
					500: "#F59E0B", // Default
					600: "#D97706",
					700: "#B45309",
					800: "#92400E",
					900: "#78350F",
					dark: {
						50: "#FFF7ED",
						100: "#FFEDD5",
						200: "#FED7AA",
						300: "#FDBA74",
						400: "#FB923C",
						500: "#F97316",
						600: "#EA580C",
						700: "#C2410C",
						800: "#9A3412",
						900: "#7C2D12",
					},
				},
				default: {
					50: "#F9FAFB",
					100: "#F3F4F6",
					200: "#E5E7EB",
					300: "#D1D5DB",
					400: "#9CA3AF",
					500: "#6B7280", // Default
					600: "#4B5563",
					700: "#374151",
					800: "#1F2937",
					900: "#111827",
					dark: {
						50: "#F3F4F6",
						100: "#E5E7EB",
						200: "#D1D5DB",
						300: "#9CA3AF",
						400: "#6B7280",
						500: "#4B5563",
						600: "#374151",
						700: "#1F2937",
						800: "#111827",
						900: "#0F172A",
					},
				},
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [
		function ({ addBase, theme }) {
			addBase({
				":root": {
					"--primary": theme("colors.primary.500"),
					"--secondary": theme("colors.secondary.500"),
				},
				".dark": {
					"--primary": theme("colors.primary.dark.500"),
					"--secondary": theme("colors.secondary.dark.500"),
				},
			});
		},
	],
};
