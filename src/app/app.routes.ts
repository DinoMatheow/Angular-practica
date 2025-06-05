import { Routes } from '@angular/router';

export const routes: Routes = [

  {
    path: '',
    loadChildren: () => import('./who-front/who-front.routes').then(m => m.WhoFrontroutes),
  },

];
