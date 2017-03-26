import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { InputPropertyComponent } from "app/data-binding/input-property.component";
import { OutputPropertyComponent } from "app/data-binding/output-property.component";

@NgModule({
  declarations: [
    AppComponent,
    DataBindingComponent,
    InputPropertyComponent,
    OutputPropertyComponent
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
