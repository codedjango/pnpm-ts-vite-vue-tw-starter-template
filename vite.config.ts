import path from 'path'

import tailwindcss from '@tailwindcss/vite'
import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'
import VueDevTools from 'vite-plugin-vue-devtools'

// https://vite.dev/config/
export default defineConfig({
	plugins: [vue(), VueDevTools(), tailwindcss()],
	resolve: {
		alias: {
			'@': path.resolve(import.meta.dirname, './src'),
		},
		tsconfigPaths: true,
	},
	// server: {
	// 	proxy: {
	// 		'/api': {
	// 			target: 'http://127.0.0.1:8000',
	// 			changeOrigin: true,
	// 			// rewrite: (r) => r.replace(/^\/api/, ''),
	// 			headers: {
	// 				Accept: 'application/json',
	// 				'Content-Type': 'application/json',
	// 			},
	// 		},
	// 	},
	// },
})
