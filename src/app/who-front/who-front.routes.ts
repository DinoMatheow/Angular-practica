import { Routes } from '@angular/router';
import { WhoFrontLayoutComponent } from './layouts/who-front-layout/who-front-layout.component';
import { HomePageComponent } from './pages/home-page/home-page.component';

export const WhoFrontroutes: Routes = [
  {
    path:'',
    component: WhoFrontLayoutComponent,
    children: [
      {
        path: '',
        component: HomePageComponent,
      },
    ]
  },
  {
    path: '**',
    redirectTo: '',
    }
]


export default  WhoFrontroutes;