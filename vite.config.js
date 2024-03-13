import {resolve} from 'path';
import {svelte} from '@sveltejs/vite-plugin-svelte'
import {defineConfig} from "vite";

let static_url = "/loc_assets/dist";
 if ( process.env.NODE_ENV == "development" ) {
    static_url = "/assets/"
}


export default defineConfig({
    plugins: [
        svelte()
    ],
    root: resolve('./assets'),
    base: static_url,
    server: {
        host: 'localhost',
        port: 5173,
        open: false,
        watch: {
            usePolling: true,
            disableGlobbing: false,
        },
    },
    resolve: {
        extensions: ['.js', '.json', '.svelte', '.ts', '.tsx', '.jsx'],
    },
    build: {
        outDir: resolve('./loc_assets/dist'),
        assetsDir: '',
        manifest: true,
        emptyOutDir: true,
        rollupOptions: {
            input: {
                main: resolve('./assets/main.js'),
            },
            output: {
                chunkFileNames: undefined,
            },
        },
    },
});