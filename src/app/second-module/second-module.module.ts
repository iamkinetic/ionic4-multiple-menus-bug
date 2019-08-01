import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SecondModuleRoutingModule } from './second-module-routing.module';
import { SecondHomeComponent } from './second-home/second-home.component';
import { IonicModule } from '@ionic/angular';
import { FourthComponentComponent } from './fourth-component/fourth-component.component';
import { ThirdComponentComponent } from './third-component/third-component.component';


@NgModule({
  declarations: [
    SecondHomeComponent,
    ThirdComponentComponent,
    FourthComponentComponent
  ],
  imports: [
    CommonModule,
    SecondModuleRoutingModule,
    IonicModule
  ]
})
export class SecondModuleModule { }
