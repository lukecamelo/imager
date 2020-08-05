import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../http.service';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

export class ImagePreview {
  constructor(public src: string, public fileName: string) {}
}

interface ResponseDataI {
  files: Array<any>
}

@Component({
  selector: 'app-image-list',
  templateUrl: './image-list.component.html',
  styleUrls: ['./image-list.component.scss']
})
export class ImageListComponent implements OnInit {
  public searchText: string;
  public imageList: Array<ImagePreview>
  
  constructor(private http: HttpService, private sanitizer: DomSanitizer) {
    http.apiData$.subscribe(images => this.imageList = images.files.map(res => {
      return new ImagePreview(`http://localhost:4201/public/${res}`, res)
    }))
  }
  
  ngOnInit(): void { }

  deleteImage(fileName: string): void {
    this.http.deleteImage({ fileName }).subscribe(res => {
      console.log("deleted image", res)
      // this.http.setImageList(this.imageList)
    })
    this.imageList = this.imageList.filter(img => img.fileName !== fileName)
  }
}
