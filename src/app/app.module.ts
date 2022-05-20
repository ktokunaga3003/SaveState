import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopComponent } from './top/top.component';
import { InputFormComponent } from './input-form/input-form.component';
import { ReferenceComponent } from './reference/reference.component';

@NgModule({
  declarations: [
    AppComponent,
    TopComponent,
    InputFormComponent,
    ReferenceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
