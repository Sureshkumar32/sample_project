import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SamplehomeComponent } from './samplehome/samplehome.component';
import { SampleaboutComponent } from './sampleabout/sampleabout.component';

const routes: Routes = [
  { path: '', component: SamplehomeComponent },
  { path: 'about', component: SampleaboutComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
 }
