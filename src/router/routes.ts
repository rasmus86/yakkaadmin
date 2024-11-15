import {RouteRecordRaw} from 'vue-router';

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        component: () => import('@/layouts/DefaultLayout.vue'),
        children: [
            {
                path: '/',
                children: [
                    {
                        path: '/',
                        component: () => import('@/views/UploadFileView.vue'),
                        name: 'DashboardPage',
                        meta: {
                            title: 'LogIn',
                            role: 'Guest',
                        },
                    },
                    {
                        path: '/',
                        component: () => import('@/views/UploadFileView.vue'),
                        name: 'login',
                        meta: {
                            title: 'LogIn',
                            role: 'Guest',
                        },
                    },
                ],
            },
        ],
    },
];
export default routes;
