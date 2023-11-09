import * as VueRouter from 'vue-router';
const routes = [
    {
        path:'/',
        redirect:'/main'
    },
    {
        path:'/main',
        component:()=>import('../view/main.vue')
    },
    {
        path:'/second',
        component:()=>import('../view/second.vue')
    }
]

export const router = VueRouter.createRouter({
    history: VueRouter.createWebHistory(),
    routes,
});
