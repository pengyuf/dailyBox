import { RouteRecordRaw } from 'vue-router';


export const routes: RouteRecordRaw[] = [
    {
        path: '/',
        component: () => import('@/views/index.vue'),
        children: [
            { path: 'home', name: 'home', meta: { navTitle: '首页', keepAlive: false }, component: () => import('@/views/home.vue') },
            { path: 'editer', name: 'editer', meta: { navTitle: '编辑', keepAlive: false }, component: () => import('@/views/editer.vue') },
            { path: 'setting', name: 'setting', meta: { navTitle: '设置', keepAlive: false }, component: () => import('@/views/setting.vue') },
        ]
    },
]