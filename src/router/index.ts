import {createWebHistory, createRouter} from 'vue-router';
import routes from './routes.ts';

const router = createRouter({
    history: createWebHistory(),
    routes: routes,
});

// @ts-ignore
router.beforeEach((to, from, next) => {
    document.title = 'Yakka Admin';
    next();
});

export default router;
