import {RouteRecordRaw} from 'vue-router';
import LoginView from "@/views/LoginView.vue";

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'login',
        component: LoginView,
        meta: {
            requiredUnauth: true,
        },
    },
    {
        path: '/home',
        component: () => import('@/layouts/DefaultLayout.vue'),
        children: [
            {
                path: '/',
                children: [
                    {
                        path: '/home',
                        component: () => import('@/views/HomeView.vue'),
                        name: 'HomeView',
                        meta: {
                            title: 'Dashboard',
                            role: 'Guest',
                        },
                    },
                    {
                        path: '/home/upload',
                        component: () => import('@/views/UploadFileView.vue'),
                        name: 'UploadView',
                        meta: {
                            title: 'Dashboard',
                            role: 'Guest',
                        },
                    },
                    {
                        path: '/home/map',
                        component: () => import('@/views/MapView.vue'),
                        name: 'MapView',
                        meta: {
                            title: 'Dashboard',
                            role: 'Guest',
                        },
                    },
                    {
                        path: '/home/job',
                        component: () => import('@/views/JobView.vue'),
                        name: 'JobView',
                        meta: {
                            title: 'Dashboard',
                            role: 'Guest',
                        },
                    },
                    {
                        path: '/home/timesheet',
                        component: () => import('@/views/TimesheetView.vue'),
                        name: 'TimesheetView',
                        meta: {
                            title: 'Dashboard',
                            role: 'Guest',
                        },
                    },
                    {
                        path: '/home/chat',
                        component: () => import('@/views/ChatView.vue'),
                        name: 'ChatView',
                        meta: {
                            title: 'Chat',
                            role: 'Guest',
                        },
                    },
                ],
            },
        ],
    },
];
export default routes;
