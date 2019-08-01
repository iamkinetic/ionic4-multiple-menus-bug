import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SecondHomeComponent } from './second-home/second-home.component';
import { FourthComponentComponent } from './fourth-component/fourth-component.component';
import { ThirdComponentComponent } from './third-component/third-component.component';


const routes: Routes = [{
    path: '',
    component: SecondHomeComponent,
    children: [
      { path: '', redirectTo: 'three' },
      { path: 'three', component: ThirdComponentComponent },
      { path: 'four', component: FourthComponentComponent }
    ]}
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SecondModuleRoutingModule { }
