import '@mdi/font/css/materialdesignicons.css';
import { createVuetify, ThemeDefinition } from 'vuetify';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';
import {aliases, mdi} from "vuetify/iconsets/mdi-svg";
import {mdiAccount} from "@mdi/js";



const lightTheme: ThemeDefinition = {
  dark: false,
  colors: {
    primaryDefault: '#FFCC0A',
  },
};

export default createVuetify({
  components,
  directives,
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
  theme: {
    defaultTheme: 'lightTheme',
    themes: {
      lightTheme,
    },
  },
});


