import AuthLayout from '@/modules/auth/layouts/AuthLayout.vue';
import LandingLayout from '@/modules/landing/layouts/LandingLayout.vue';
import HomePage from '@/modules/landing/pages/HomePage.vue';
import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // Landing
    {
      path: '/',
      name: 'landing',
      component: LandingLayout,
      children: [
        {
          path: '/',
          name: 'home',
          component: HomePage,
        },
        {
          path: '/features',
          name: 'features',
          component: () => import('@landingPages/FeaturesPage.vue'),
        },
        {
          path: '/pricing',
          name: 'pricing',
          component: () => import('@landingPages/PricingPage.vue'),
        },
        {
          path: '/contact',
          name: 'contact',
          component: () => import('@landingPages/ContactPage.vue'),
        },
      ],
    },
    // Auth
    {
      path: '/auth',
      name: 'auth',
      redirect: { name: "login" },
      component: AuthLayout,
      children: [
        {
          path: 'login',
          name: 'login',
          component: () => import('@authPages/LoginPage.vue'),
        },
        {
          path: 'register',
          name: 'register',
          component: () => import('@authPages/RegisterPage.vue'),
        },
      ],
    },
  ],
});

export default router;
