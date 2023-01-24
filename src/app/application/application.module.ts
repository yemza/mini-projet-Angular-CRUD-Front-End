import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ApplicationRoutingModule } from './application-routing.module';
import { SharedModule } from '../_shared/shared.module';
import { ListUtilisateurComponent } from './list-utilisateur/list-utilisateur.component';
import { AddUserComponent } from './add-user/add-user.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ListUtilisateurComponent,
    AddUserComponent
  ],
  imports: [
    CommonModule,
    ApplicationRoutingModule,
    SharedModule,
    ReactiveFormsModule
  ]
})
export class ApplicationModule { }
