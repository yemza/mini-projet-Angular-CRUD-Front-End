import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutComponent } from './layout/layout.component';
import { SideBareComponent } from './layout/side-bare/side-bare.component';
import { NavBareComponent } from './layout/nav-bare/nav-bare.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    LayoutComponent,
    SideBareComponent,
    NavBareComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
  ]
})
export class SharedModule { }
