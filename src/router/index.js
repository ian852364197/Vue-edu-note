import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import RefView from '@/views/RefView.vue';
import BindView from '@/views/BindView.vue';
import OnClickView from '@/views/OnClickView.vue';
import VforView from '@/views/VforView.vue';
import ComputedView from '@/views/ComputedView.vue';
import CompView from '@/views/CompView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/Ref',
      name: 'ref',
      component: RefView
    },
    {
      path: '/Bind',
      name: 'bind',
      component: BindView
    },
    {
      path: '/event',
      name: 'event',
      component: OnClickView
    },
    {
      path: '/vfor',
      name: 'vFor',
      component: VforView
    },
    {
      path: '/computed',
      name: 'computed',
      component: ComputedView
    },
    {
      path: '/component',
      name: 'component',
      component: CompView
    }
  ]
});

export default router;
