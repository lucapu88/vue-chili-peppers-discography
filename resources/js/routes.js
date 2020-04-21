import Vue from "vue";
import VueRouter from "vue-router"; //per far si che funzioni, dare comando npm install vue-router

import Home from "./pages/Home";

Vue.use(VueRouter);

const router = new VueRouter({
    mode: "history",
    routes: [
        {
            path: "/",
            name: "home",
            component: Home
        }
    ]
});

export default router;
