import { Routes } from '@angular/router';



export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./main/main.page').then((m) => m.MainPage),
  },
  {
    path: 'main',
    loadComponent: () => import('./main/main.page').then((m) => m.MainPage),
  },
  {
    path: 'product-list',
    loadComponent: () =>
      import('./product-list/product-list.page').then((m) => m.ProductListPage),
  },
  {
    path: 'search',
    loadComponent: () =>
      import('./product-list/product-list.page').then((m) => m.ProductListPage),
  },
];
export default routes;
