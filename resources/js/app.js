
// import Vue from 'vue';
import { createApp } from 'vue';
import * as VueRouter from 'vue-router';
import VueRouteMiddleware from 'vue-route-middleware';
import routes from './routes/router.js';

const app = createApp({});
const rout = VueRouter.createRouter({ history: VueRouter.createWebHistory(), routes });
rout.beforeEach(VueRouteMiddleware());

app.use(rout)
app.mount('#app', routes);
