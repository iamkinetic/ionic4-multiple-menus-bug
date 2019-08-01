import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ChildOneComponent } from './child-one/child-one.component';
import { ChildTwoComponent } from './child-two/child-two.component';


const routes: Routes = [{
  path: '',
  component: HomeComponent,
  children: [
    { path: '', redirectTo: 'one' },
    { path: 'one', component: ChildOneComponent },
    { path: 'two', component: ChildTwoComponent }
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FirstModuleRoutingModule { }
