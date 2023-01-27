import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from '../_shared/layout/layout.component';
import { AddUserComponent } from './add-user/add-user.component';
import { ListUtilisateurComponent } from './list-utilisateur/list-utilisateur.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path : '',
        redirectTo :'/application/utilisateurs',
        pathMatch :'full'
      },
      {
        path: 'utilisateurs',
        component: ListUtilisateurComponent,
      },
      {
        path: 'addUser',
        component: AddUserComponent,
      },
      {
        path: 'updateUser/:id',
        component: AddUserComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ApplicationRoutingModule {}
