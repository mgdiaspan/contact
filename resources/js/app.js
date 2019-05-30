/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

import Vue from 'vue'

import VueRouter from 'vue-router';
Vue.use(VueRouter);

import { Contact } from './pages/contact/contact';

const routes = [
    {
        path: '/contact',
        name: 'Contact',
        component: Contact
    }
];

const router = new VueRouter({
    mode: 'history',
    routes: routes // short for `routes: routes`
});

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

const app = new Vue({
    router
}).$mount('#app')

export default app;
