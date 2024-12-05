import {RouteRecordRaw} from 'vue-router';
import LoginView from "@/views/LoginView.vue";

const routes: Array<RouteRecordRaw> = [
    {
        path: '/login',
        name: 'login',
        component: LoginView,
        meta: {
            requiresAuth: false,
            roles: ['Guest'],
        },
    },
    {
        path: '/',
        component: () => import('@/views/JobView.vue'),
        name: 'job',
        meta: {
            requiresAuth: false,
            title: 'Dashboard',
            roles: ['Guest'],

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
                            requiresAuth: true,
                            title: 'Dashboard',
                            roles: ['Admin'],
                        },
                    },
                    {
                        path: '/home/upload',
                        component: () => import('@/views/UploadFileView.vue'),
                        name: 'UploadView',
                        meta: {
                            requiresAuth: true,
                            title: 'Dashboard',
                            roles: ['Admin'],
                        },
                    },
                    {
                        path: '/home/map',
                        component: () => import('@/views/MapView.vue'),
                        name: 'MapView',
                        meta: {
                            requiresAuth: true,
                            title: 'Dashboard',
                            roles: ['Admin'],
                        },
                    },
                    {
                        path: '/home/job',
                        component: () => import('@/views/JobView.vue'),
                        name: 'JobView',
                        meta: {
                            requiresAuth: true,
                            title: 'Dashboard',
                            roles: ['Admin'],
                        },
                    },
                    {
                        path: '/home/timesheet',
                        component: () => import('@/views/TimesheetView.vue'),
                        name: 'TimesheetView',
                        meta: {
                            requiresAuth: true,
                            title: 'Dashboard',
                            roles: ['Admin'],
                        },
                    },
                    {
                        path: '/home/chat',
                        component: () => import('@/views/ChatView.vue'),
                        name: 'ChatView',
                        meta: {
                            requiresAuth: true,
                            title: 'Chat',
                            roles: ['Admin'],
                        },
                    },
                ],
            },
        ],
    },
];
export default routes;
