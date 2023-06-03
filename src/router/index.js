import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('../pages/home.vue'),
  },
  {
    path: '/sportsbook',
    component: () => import('../pages/sportsbook.vue'),  
  },
  {
    path: '/casino',
    component: () => import('../pages/casino.vue'),  
  },
  {
    path: '/racebook',
    component: () => import('../pages/racebook.vue'),  
  },
  {
    path: '/live-betting',
    component: () => import('../pages/live-betting.vue'),  
  },
  {
    path: '/house-rules',
    component: () => import('../pages/house-rules.vue'),  
  },
  {
    path: '/sports-rules',
    component: () => import('../pages/sports-rules.vue'),  
  },
  {
    path: '/responsible-gaming',
    component: () => import('../pages/responsible-gaming.vue'),  
  },
  {
    path: '/forgot-password',
    component: () => import('../pages/forgot-password.vue'),  
  },
  {
    path: '/props-builder',
    component: () => import('../pages/props-builder.vue'),  
  },
  {
    path: '/promotions',
    component: () => import('../pages/promotions.vue'),  
  },
  {
    path: '/registrarme',
    component: () => import('../pages/registrarme.vue'),  
  },
  {
    path: '/juegos-casino',
    component: () => import('../pages/juegos-casino.vue'),  
  },
  {
    path: '/bingo',
    component: () => import('../pages/bingo.vue'),  
  },
  {
    path: '/reglas-casino',
    component: () => import('../pages/reglas-casino.vue'),  
  },
  {
    path: '/juego-responsable',
    component: () => import('../pages/juego-responsable.vue'),  
  },
  {
    path: '/auto-exclusion',
    component: () => import('../pages/auto-exclusion.vue'),  
  },
  {
    path: '/politica-reclamos',
    component: () => import('../pages/politica-reclamos.vue'),  
  },
  {
    path: '/anti-lavado',
    component: () => import('../pages/anti-lavado.vue'),  
  },
  {
    path: '/juego-justo',
    component: () => import('../pages/juego-justo.vue'),  
  },
  {
    path: '/politica-privacidad',
    component: () => import('../pages/politica-privacidad.vue'),  
  },
  {
    path: '/politica-pago',
    component: () => import('../pages/politica-pago.vue'),  
  },
  {
    path: '/conozca-cliente',
    component: () => import('../pages/conozca-cliente.vue'),  
  },
  {
    path: '/terminos-condiciones',
    component: () => import('../pages/terminos-condiciones.vue'),  
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior() {
    return { top: 0 };
  }
})
export default router