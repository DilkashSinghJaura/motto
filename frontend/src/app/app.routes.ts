import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Authorization } from './pages/authorization/authorization';

export const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: Home },
    { path: 'authorization', component: Authorization }
];