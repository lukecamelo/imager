import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../http.service';
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
  constructor(private http: HttpService, private sanitizer: DomSanitizer) { }
  
  ngOnInit(): void {
    this.http.getImages().subscribe((res: ResponseDataI) => {
      this.imageList = res.files.map(res => {
        return new ImagePreview(`http://localhost:4201/public/${res}`, res)
      })
    })
  }

  logImages(): void {
    console.log(this.imageList)
  }

  deleteImage(fileName): void {
    this.http.deleteImage({ fileName }).subscribe(res => console.log(res))
    this.imageList = this.imageList.filter(img => img.fileName !== fileName)
  }
}
