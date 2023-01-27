import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

     
  {
    path : '',
    redirectTo :'/application/utilisateurs',
    pathMatch :'full'
  },

  {
    path : 'application',
    loadChildren: () => import('./application/application.module').then(m => m.ApplicationModule)
  },

  {
    path : 'application',
    redirectTo :'/application/utilisateurs',
    pathMatch :'full'
  },

  {
    path : '**',
    redirectTo :'/application/utilisateurs',
    pathMatch :'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
