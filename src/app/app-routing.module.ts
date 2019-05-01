import { AuthGuard } from './auth/auth.guard';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './user/user.component';
import { RegistrationComponent } from './user/registration/registration.component';
import { LoginComponent } from './user/login/login.component';
import { HomeComponent } from './modules/home/pages/home/home.component';
import { PruebaComponent } from './modules/prueba/pages/prueba.component';
import { AgendaComponent } from './modules/agenda/components/agenda/agenda.component';



const routes: Routes = [
  {path:'',redirectTo:'/cuentas/login',pathMatch:'full'},
  {
    path: 'cuentas', component: UserComponent,
    children: [
      { path: 'registration', component: RegistrationComponent },
      { path: 'login', component: LoginComponent },
 
    ]
  },
  {path:'home',component:HomeComponent,canActivate:[AuthGuard]},
  {path:'agenda',component:AgendaComponent,canActivate:[AuthGuard]},
  {path:'prueba',component:PruebaComponent,canActivate:[AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
