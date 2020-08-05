import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImageUploadComponent } from './image-upload/image-upload.component'
import { ImageListComponent } from './image-list/image-list.component';
import { ImageDashboardComponent } from './image-dashboard/image-dashboard.component'
import { FilterPipe } from '../filter.pipe';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ImageUploadComponent,
    ImageListComponent,
    ImageDashboardComponent,
    FilterPipe
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports: [
    ImageDashboardComponent,
    FilterPipe
  ]
})
export class ImageDashboardModule { }
