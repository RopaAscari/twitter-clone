import Vue from 'vue';
import Router from 'vue-router';

// tslint:disable-next-line
const { default: generatedRoutes } = require('../../.rdvue/routes.js');

Vue.use(Router);

export enum Page {
  Home = 'home',
  Twitter = 'twitter',
  Hello = 'hello-world',
  NotFound = 'not-found',
}

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    ...generatedRoutes,
    {
      path: '/twitter',
      name: Page.Twitter,
      meta: {
        layout: 'default',
      },
      component: () =>
        import(
          /* webpackChunkName: "hello-world" */
          '@/pages/twitter'
        ),
    },
    {
      path: '/home',
      name: Page.Home,
      meta: {
        layout: 'dashboard',
      },
      component: () =>
        import(
          /* webpackChunkName: "hello-world" */
          '@/pages/home'
        ),
    },
    {
      path: '*',
      name: Page.NotFound,
      meta: {
        layout: 'default',
      },
      component: () =>
        import(
          /* webpackChunkName: "not-found" */
          '@/pages/not-found'
        ),
    },
  ],
});
