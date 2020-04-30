import vue from 'vue'
import vueRouter from 'vue-router'
import { vueRouterUtils } from 'castle-haozijunqaq-utils';
vue.use(vueRouter);
const originalReplace = vueRouter.prototype.replace
vueRouter.prototype.replace = function (location) {
    return originalReplace.call(this, location).catch(err => err)
}
const originalPush = vueRouter.prototype.push
vueRouter.prototype.push = function (location) {
    return originalPush.call(this, location).catch(err => err)
}
let routes = [
    {
        path: '/',
        fullPath: '/',
        redirect: '/Home'
    },
];

const router = new vueRouter({
    routes:vueRouterUtils.compose(routes),
    // // mode: 'history',
    // base: process.env.BASE_URL,
});
export default router
