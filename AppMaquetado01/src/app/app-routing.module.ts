import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'register', loadChildren: './register/register.module#RegisterPageModule' },
  { path: 'atractivos', loadChildren: './atractivos/atractivos.module#AtractivosPageModule' },
  { path: 'atractivos2', loadChildren: './atractivos2/atractivos2.module#Atractivos2PageModule' },
  { path: 'atractivos3', loadChildren: './atractivos3/atractivos3.module#Atractivos3PageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
