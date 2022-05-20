import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InputFormComponent } from './input-form/input-form.component';
import { ReferenceComponent } from './reference/reference.component';
import { TopComponent } from './top/top.component';

const routes: Routes = [
  { path: '', component: TopComponent },
  { path: 'input-form', component: InputFormComponent },
  { path: 'reference', component: ReferenceComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
