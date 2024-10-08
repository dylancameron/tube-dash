import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import tailwindcss from "tailwindcss";
import path from "path";

export default defineConfig({
	plugins: [react()],
	build: {
		lib: {
			entry: path.resolve(__dirname, "src/index.ts"),
			name: "TubeDashPlayer",
			fileName: (format) => `tube-dash-player.${format}.js`,
			formats: ["es", "umd"],
		},
		rollupOptions: {
			external: [],
		},
	},
	resolve: {
		alias: {
			"@": path.resolve(__dirname, "src"),
		},
	},
	css: {
		postcss: {
			plugins: [tailwindcss()],
		},
	},
});
