import { Routes } from '@angular/router';
import { Login } from './components/login/login';
import { Dashboard } from './components/dashboard/dashboard';
import { Admin } from './components/admin/admin';
import { AdminLogin } from './components/admin-login/admin-login';

export const routes: Routes = [

    {path:'',component:Login},
    {path:'dashboard', component:Dashboard},
    {path:'admin', component:Admin},
    {path:'admin-login', component:AdminLogin}
];
