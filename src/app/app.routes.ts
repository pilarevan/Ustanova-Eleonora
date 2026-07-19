import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/home/home').then(m => m.Home)
  },
  {
    path: 'sanitetski-prijevoz',
    loadComponent: () => import('./pages/medical-transport/medical-transport').then(m => m.MedicalTransport)
  },
  {
    path: 'zdravstvena-njega',
    loadComponent: () => import('./pages/home-healthcare/home-healthcare').then(m => m.HomeHealthcare)
  },
  {
    path: 'fizikalna-terapija',
    loadComponent: () => import('./pages/physical-therapy/physical-therapy').then(m => m.PhysicalTherapy)
  },
  {
    path: 'novosti',
    loadComponent: () => import('./pages/news/news').then(m => m.News)
  },
  {
    path: 'novosti/:slug',
    loadComponent: () => import('./pages/article/article').then(m => m.Article)
  },
  {
    path: '**',
    redirectTo: ''
  }
];
