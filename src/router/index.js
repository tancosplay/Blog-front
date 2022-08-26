import VueRouter from "vue-router"
import Vue from 'vue'

import UsersLogin from '../components/UsersLogin'
import UsersRegist from '../components/UsersRegist'
import UserPageIndex from '../components/UserPageIndex'
import UserWrite from '../components/UserWrite'
import UserView from '../components/UserView'

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
            component: UserPageIndex,
            redirect: '/Index/:check/:UserInputName/view',
            children: [{         
                path: 'write/:value',
                name: 'UserWrite',
                component: UserWrite
            }, {
                path: 'view',
                name: 'UserView',
                component: UserView
            }],
            // redirect: '/Index/view'
        },
    ]
})

router.beforeEach((to, from, next) => {
    if (from.name != 'UsersLogin' || to.name != 'UserView') {
        // console.log(from.name, to.name)
        next()
    } else if (to.params.check === 'false') {
        // console.log("%%%%%", to.params.check)
        alert("用户名或密码不正确");
    } else {
        next()
    }
})

export default router;