import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import laravel from "laravel-vite-plugin";
import { resolve } from "path";

export default defineConfig({
    plugins: [
        laravel({
            input: ["resources/css/app.css", "resources/js/app.tsx"],
            refresh: true,
        }),
        react(),
    ],
    server: {
        host: "0.0.0.0",
        port: 5178,
        hmr: {
            host: "localhost",
        },
        watch: {
            usePolling: true,
        },
    },
});
