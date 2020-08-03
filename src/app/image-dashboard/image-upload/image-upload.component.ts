import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../http.service';

class ImageSnippet {
  constructor(public src: string, public file: File) {}
}

@Component({
  selector: 'app-image-upload',
  templateUrl: './image-upload.component.html',
  styleUrls: ['./image-upload.component.scss']
})
export class ImageUploadComponent implements OnInit {
  formData: FormData
  selectedFile: ImageSnippet;
  imageName: string;

  constructor(private http: HttpService) { }

  ngOnInit(): void {
    this.formData = new FormData()
  }

  processFile(imageInput: any) {
    const file: File = imageInput.files[0];
    const reader = new FileReader();

    reader.addEventListener('load', (event: any) => {
      this.selectedFile = new ImageSnippet(event.target.result, file);
    })

    reader.readAsDataURL(file);
  }

  updateImageName(imageNameInput: string) {
    this.imageName = imageNameInput;
  }
  
  uploadImage() {
    console.log(this.imageName)
    this.formData.append('imageName', this.imageName)
    this.formData.append('file', this.selectedFile.file)
    this.http.uploadImage(this.formData).subscribe(res => console.log("results: ", res))
  }
}
