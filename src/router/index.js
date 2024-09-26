// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import GameDemos from '../components/GameDemos.vue';
import PDFViewer from '../components/PDFViewer.vue';

const routes = [
  { path: '/', component: GameDemos },
  { 
    path: '/pdf-viewer', 
    name: 'pdfViewer',
    component: PDFViewer,
    props: route => ({ pdfSrc: route.params.pdfSrc, title: route.params.title }),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
