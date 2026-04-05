import isAuthenticatedGuard from '@/modules/auth/guards/is-authenticated.guard';
import AuthLayout from '@/modules/auth/layouts/AuthLayout.vue';
import NotFound404 from '@/modules/common/pages/NotFound404.vue';
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
        {
          path: '/pokemon/:id',
          name: 'pokemon',
          beforeEnter: [isAuthenticatedGuard],
          props: (route) => {
            const id = Number(route.params.id);

            return { pokemonId: isNaN(id) ? 1 : id };
          },
          component: () => import('../modules/pokemon/pages/PokemonPage.vue'),
        },
      ],
    },
    // Auth
    {
      path: '/auth',
      name: 'auth',
      redirect: { name: 'login' },
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
    // NotFound
    {
      path: '/:pathMatch(.*)*',
      //redirect: "/"
      component: NotFound404,
    },
  ],
});

export default router;
