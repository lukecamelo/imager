import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ImageUploadComponent } from './image-dashboard/image-upload/image-upload.component'
import { ImageDashboardComponent } from './image-dashboard/image-dashboard/image-dashboard.component'

const routes: Routes = [
  {
    path: '',
    component: ImageDashboardComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
