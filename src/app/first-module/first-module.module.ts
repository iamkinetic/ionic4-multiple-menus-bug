import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FirstModuleRoutingModule } from './first-module-routing.module';
import { HomeComponent } from './home/home.component';
import { ChildTwoComponent } from './child-two/child-two.component';
import { ChildOneComponent } from './child-one/child-one.component';
import { IonicModule } from '@ionic/angular';


@NgModule({
  declarations: [
    ChildOneComponent,
    ChildTwoComponent,
    HomeComponent,
  ],
  imports: [
    CommonModule,
    FirstModuleRoutingModule,
    IonicModule
  ]
})
export class FirstModuleModule { }
