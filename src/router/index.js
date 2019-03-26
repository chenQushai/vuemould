import Vue from 'vue'
import Router from 'vue-router'

let home = () => import('../components/home');
let test1 = () => import('../view/editorPage');
let table = () => import('../view/table');
let organization = () => import('../view/organization');
let detailPage = () => import('../components/detailPage')
let userPermissionManagement = () => import('../view/userPermissionManagement');
Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            redirect: '/home'

        },
        {
            path: '/home',
            name: 'home',
            component: home,
            children: [
                {
                    path: 'test1',
                    name: 'test1',
                    component: test1
                },
                {
                    path: "table",
                    name: 'test2',
                    component: table
                },
                {
                    path: "organization",
                    name: "organization",
                    component: organization
                },
                {
                    path: "detailPage",
                    name: "detailPage",
                    component: detailPage
                },
                {
                    path: "userPermissionManagement",
                    name: "userPermissionManagement",
                    component: userPermissionManagement
                }
            ]
        }
    ]
})
