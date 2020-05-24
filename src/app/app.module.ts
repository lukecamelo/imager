import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ImageDashboardModule } from './image-dashboard/image-dashboard.module'

@NgModule({
  declarations: [
    AppComponent,
    // ImageUploadComponent,
    // ImageListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule,
    ImageDashboardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
