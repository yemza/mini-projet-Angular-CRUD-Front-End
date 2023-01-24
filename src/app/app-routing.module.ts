import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

     
  {
    path : '',
    redirectTo :'/utilisateurs',
    pathMatch :'full'
  },

  {
    path : 'utilisateurs',
    loadChildren: () => import('./application/application.module').then(m => m.ApplicationModule)
  },

  {
    path : '**',
    redirectTo :'/utilisateurs',
    pathMatch :'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
