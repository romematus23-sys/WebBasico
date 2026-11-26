import { Routes } from '@angular/router';
import { Home } from './presentation/home/home';
import { About } from './presentation/about/about';
import { Notfound } from './presentation/notfound/notfound';

export const routes: Routes = [
    {path:'',component:Home},
    {path:'about',component:About},
    {path:'**',component:Notfound}
];
