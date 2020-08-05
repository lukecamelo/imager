import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../http.service';
import { ImagePreview } from '../image-list/image-list.component';

class Image {
  constructor(public src: string, public file: File) {}
}

@Component({
  selector: 'app-image-upload',
  templateUrl: './image-upload.component.html',
  styleUrls: ['./image-upload.component.scss']
})
export class ImageUploadComponent implements OnInit {
  public formData: FormData
  public selectedFile: Image;
  public imageName: string;
  public imageList: Array<ImagePreview>

  constructor(private http: HttpService) { 
    http.apiData$.subscribe(images => this.imageList = images.files.map(res => {
      return new ImagePreview(`http://localhost:4201/public/${res}`, res)
    }))
  }

  ngOnInit(): void {
    this.formData = new FormData()
  }

  processFile(imageInput: any) {
    const file: File = imageInput.files[0];
    const reader = new FileReader();

    reader.addEventListener('load', (event: any) => {
      this.selectedFile = new Image(event.target.result, file);
    })

    reader.readAsDataURL(file);
  }

  
  uploadImage() {
    console.log(this.imageName)
    this.formData.append('imageName', this.imageName)
    this.formData.append('file', this.selectedFile.file)
    this.http.uploadImage(this.formData).subscribe(res => {
      console.log("uploaded image, ", res)
      this.http.setImageList(res)
    })
    // this.http.setImageList()
  }
}
