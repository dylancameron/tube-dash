import { defineConfig } from "vite";
import { VitePWA } from "vite-plugin-pwa";
import react from "@vitejs/plugin-react-swc";
import tailwindcss from "tailwindcss";
import path from "path";
import autoprefixer from "autoprefixer";
import cssInjectedByJsPlugin from "vite-plugin-css-injected-by-js";

export default defineConfig({
	plugins: [
		react(),
		cssInjectedByJsPlugin(),
		VitePWA({
			includeAssets: [
				"favicon.ico",
				"apple-touch-icon.png",
				"mask-icon.svg",
			],
			manifest: {
				name: "Tube Dash Player",
				short_name: "TubeDash",
				theme_color: "#ffffff",
				icons: [
					{
						src: "pwa-64x64.png",
						sizes: "64x64",
						type: "image/png",
					},
					{
						src: "pwa-192x192.png",
						sizes: "192x192",
						type: "image/png",
					},
					{
						src: "pwa-512x512.png",
						sizes: "512x512",
						type: "image/png",
						purpose: "any",
					},
					{
						src: "maskable-icon-512x512.png",
						sizes: "512x512",
						type: "image/png",
						purpose: "maskable",
					},
				],
			},
			registerType: "autoUpdate",
		}),
	],
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
