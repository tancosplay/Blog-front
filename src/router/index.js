import VueRouter from "vue-router"
import Vue from 'vue'

import UsersLogin from '../components/UsersLogin'
import UsersRegist from '../components/UsersRegist'
import UserPageIndex from '../components/UserPageIndex'
import UserWrite from '../components/UserWrite'

Vue.use(VueRouter)

const router = new VueRouter({
    routes: [
        {
            path: '/',
            name: 'UsersLogin',
            component: UsersLogin,
        },
        {
            path: '/Regist',
            name: 'UsersRegist',
            component: UsersRegist
        },
        {
            path: '/Index/:check/:UserInputName',
            name: 'UserPageIndex',
            component: UserPageIndex
        },
        {
            path: '/write',
            name: 'UserWrite',
            component: UserWrite
        }
    ]
})

router.beforeEach((to, from, next) => {
    if (from.name != 'UsersLogin' || to.name != 'UserPageIndex') {
        next()
    } else if (!to.params.check) {
        alert("用户名或密码不正确");
    } else {
        next()
    }
})

export default router;