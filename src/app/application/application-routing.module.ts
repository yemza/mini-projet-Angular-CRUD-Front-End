import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from '../_shared/layout/layout.component';
import { ListUtilisateurComponent } from './list-utilisateur/list-utilisateur.component';

const routes: Routes = [
  {path : '' ,
       component : LayoutComponent , children:[
          {
            path : '',
            component: ListUtilisateurComponent}

     ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ApplicationRoutingModule { }
