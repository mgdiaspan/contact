import Vue from 'vue';
import VueRouter from 'vue-router';

import { App } from './layouts/app';
import { Contact } from "./pages/contact/contact";

Vue.use(VueRouter);

const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            redirect: {name: 'contact'},
            name: 'app',
            component: App,
            children: [
                {
                    path: '/contact',
                    name: 'contact',
                    component: Contact
                }
            ]

        }
    ]
})

export default router;
