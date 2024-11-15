import {createVuetify} from 'vuetify';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';

const vuetify = createVuetify({
    components,
    directives,
});

// eslint-disable-next-line import/no-extraneous-dependencies
window.ResizeObserver = require('resize-observer-polyfill');

window.vuetify = vuetify;
