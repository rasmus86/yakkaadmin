import {createApp} from 'vue'
import App from './App.vue'

import '@mdi/font/css/materialdesignicons.css';
import 'vuetify/styles/main.sass';
import 'vuetify/components';



import './style.css'
import i18n from "@/plugins/i18n.ts";
import router from "@/router";
import pinia from "@/stores";
import vuetify from "@/plugins/vuetify.ts";


const app = createApp(App)
app.use(vuetify);
app.use(i18n);
app.use(router);
app.use(pinia);
app.mount('#app');
