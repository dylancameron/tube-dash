import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import tailwindcss from "tailwindcss";
import path from "path";
import autoprefixer from "autoprefixer";
import cssInjectedByJsPlugin from "vite-plugin-css-injected-by-js";

export default defineConfig({
	plugins: [react(), cssInjectedByJsPlugin()],
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
		cssCodeSplit: false,
		sourcemap: false,
	},
	css: {
		postcss: {
			plugins: [tailwindcss(), autoprefixer()],
		},
	},
	define: {
		"process.env.NODE_ENV": '"production"',
	},
	resolve: {
		alias: {
			"@": path.resolve(__dirname, "src"),
		},
	},
});
