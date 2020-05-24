import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

class ImagePreview {
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

  public imageList: Array<ImagePreview>
  constructor(private http: HttpClient, private sanitizer: DomSanitizer) { }
  
  ngOnInit(): void {
    this.http.get('http://localhost:4201/images').subscribe((res: ResponseDataI) => {
      this.imageList = res.files.map(res => {
        return new ImagePreview(`http://localhost:4201/public/${res}`, res)
      })
    })
  }

  logImages(): void {
    console.log(this.imageList)
  }

  deleteImage(fileName): void {
    this.http.post('http://localhost:4201/delete', { fileName }).subscribe(res => console.log(res))
  }
}
