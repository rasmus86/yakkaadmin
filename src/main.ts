import {createApp} from 'vue'
import App from './App.vue'

import '@mdi/font/css/materialdesignicons.css';
import {createVuetify} from 'vuetify'
import 'vuetify/styles/main.sass';
import 'vuetify/components';


import {aliases, mdi} from 'vuetify/iconsets/mdi-svg'
import {mdiAccount} from '@mdi/js'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

import './style.css'
import i18n from "@/plugins/i18n.ts";
import router from "@/router";

const vuetify = createVuetify({
    icons: {
        defaultSet: 'mdi',
        aliases: {
            ...aliases,
            account: mdiAccount,
        },
        sets: {
            mdi,
        },
    },
    components,
    directives,
})

const app = createApp(App)
app.use(vuetify);
app.use(i18n);
app.use(router);
app.mount('#app');
