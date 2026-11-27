
import { Routes } from '@angular/router';

import { Home } from './presentation/home/home';
import { Body } from './presentation/body/body';
import { Personal } from './presentation/personal/personal';
import { About } from './presentation/about/about';
import { NotFound } from './presentation/notfound/notfound';

export const routes: Routes = [

  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },

  {
    path: 'home',
    component: Home
  },

  {
    path: 'armas',
    component: Body
  },

  {
    path: 'personal',
    component: Personal
  },

  {
    path: 'about',
    component: About
  },

  {
   path: '**',
    component: NotFound
  }

];
