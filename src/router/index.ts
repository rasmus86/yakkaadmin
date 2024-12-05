import {createWebHistory, createRouter} from 'vue-router';
import routes from './routes.ts';
import {AuthStore, useAuthStore} from "@/stores/auth-store.ts";

const router = createRouter({
    history: createWebHistory(),
    routes: routes,
});

// @ts-ignore
router.beforeEach((to, from, next) => {
    document.title = 'Yakka Admin';
    const authStore: AuthStore = useAuthStore();
    const requiresAuth = to.meta.requiresAuth as boolean;
    const roles = to.meta.roles as Array<string>;

    if (requiresAuth && !authStore?.user) {
        next({ name: 'job' });
    } else if (requiresAuth && roles && roles.length > 0) {
        if (authStore.user && roles.includes(authStore.user.type)) {
            next();
        } else {
            next({ name: 'job' });
        }
    } else {
        // Route does not require authentication
        next();
    }
});

export default router;
