
import { VuetifyInstance } from 'vuetify';

declare global {
    interface CSS {
        supports: () => boolean;
    }
    interface Window {
        ResizeObserver: typeof ResizeObserver;
        vuetify: VuetifyInstance;
    }
    namespace NodeJS {
        interface Global {
            CSS: CSS;
        }
    }
}

export {};
