import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImageUploadComponent } from './image-upload/image-upload.component'
import { ImageListComponent } from './image-list/image-list.component';
import { ImageDashboardComponent } from './image-dashboard/image-dashboard.component'


@NgModule({
  declarations: [
    ImageUploadComponent,
    ImageListComponent,
    ImageDashboardComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    ImageDashboardComponent
  ]
})
export class ImageDashboardModule { }
