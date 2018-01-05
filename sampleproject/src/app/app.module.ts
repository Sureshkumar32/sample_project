import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { SamplenavbarComponent } from './samplenavbar/samplenavbar.component';
import { SamplehomeComponent } from './samplehome/samplehome.component';
import { SampleaboutComponent } from './sampleabout/sampleabout.component';


@NgModule({
  declarations: [
    AppComponent,
    SamplenavbarComponent,
    SamplehomeComponent,
    SampleaboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
