import { RouteRecordRaw } from 'vue-router';


export const routes: RouteRecordRaw[] = [
    {
        path: '/',
        component: () => import('@/views/index.vue'),
        redirect: 'home',
        children: [
            { path: 'home', name: 'home', meta: { navTitle: '首页', keepAlive: false }, component: () => import('@/views/home.vue') },
            { path: 'editor', name: 'editor', meta: { navTitle: '编辑', keepAlive: false }, component: () => import('@/views/editor.vue') },
            { path: 'setting', name: 'setting', meta: { navTitle: '设置', keepAlive: false }, component: () => import('@/views/setting.vue') },
            { path: 'sourceList', name: 'sourceList', meta: { navTitle: '图库', keepAlive: false }, component: () => import('@/views/sourceList.vue') },
            { path: 'login', name: 'login', meta: { navTitle: '登录', keepAlive: false }, component: () => import('@/views/login.vue') },
            { path: 'register', name: 'register', meta: { navTitle: '注册', keepAlive: false }, component: () => import('@/views/register.vue') },
        ]
    },
]