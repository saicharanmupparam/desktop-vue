import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";

import "./style.scss";

import App from "./App.vue";
import Home from "./views/Home.vue";
import MyAccount from "./views/MyAccount.vue";
import Login from "./views/Login.vue";
import SignUp from "./views/SignUp.vue";

const routes = [
  { path: "/", component: Login },
  { path: "/create-user", component: SignUp },
  { path: "/home", component: Home },
  { path: "/account-details", component: MyAccount },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

createApp(App).use(router).mount("#app");
