import { createApp } from 'vue';

import { createVuetify } from 'vuetify';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';

import { createRouter, createWebHistory } from 'vue-router';

import './style.css';

import App from './App.vue';
import Home from './views/Home.vue';
import MyAccount from './views/MyAccount.vue';
import Login from './views/Login.vue';
import SignUp from './views/SignUp.vue';

const routes = [
  { path: '/', component: Login },
  { path: '/create-user', component: SignUp },
  { path: '/home', component: Home },
  { path: '/account-details', component: MyAccount },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

const vuetify = createVuetify({
  components,
  directives,
});

createApp(App).use(vuetify).use(router).mount('#app');
