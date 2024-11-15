import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import vuetify from 'vite-plugin-vuetify'
import VueI18nPlugin from '@intlify/unplugin-vue-i18n/vite';
import path from "path";
import {dirname} from "node:path";
import {fileURLToPath} from "url";

// https://vite.dev/config/
export default defineConfig({
    css: {
        preprocessorOptions: {
            sass: {},
            scss: {
                api: 'modern-compiler',
                silenceDeprecations: ["legacy-js-api"],
                additionalData: `
                    @use "@/assets/scss/_variables.scss";
                    @use "@/assets/scss/_reset.scss";
                    @use "@/assets/scss/yakka_admin.scss";
                `,
            },
        },
    },
    plugins: [
        vue(),
        vuetify({
            autoImport: true,
            styles: {
                configFile: './src/assets/scss/settings.scss',
            },
        }),
        VueI18nPlugin({
            include: path.resolve(
                dirname(fileURLToPath(import.meta.url)),
                './src/locales/**',
            ),
        }),
    ],
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src'),
        },
    },
    build: {
        chunkSizeWarningLimit: 1600,
    },
})
