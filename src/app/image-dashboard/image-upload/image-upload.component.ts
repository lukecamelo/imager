import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

class ImageSnippet {
  constructor(public src: string, public file: File) {}
}

@Component({
  selector: 'app-image-upload',
  templateUrl: './image-upload.component.html',
  styleUrls: ['./image-upload.component.scss']
})
export class ImageUploadComponent implements OnInit {

  selectedFile: ImageSnippet;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  processFile(imageInput: any) {
    const file: File = imageInput.files[0];
    const reader = new FileReader();

    reader.addEventListener('load', (event: any) => {
      this.selectedFile = new ImageSnippet(event.target.result, file);

      console.log("hi!!", this.selectedFile)
    })

    reader.readAsDataURL(file);
  }

  uploadImage(imageInput: any) {
    this.http.post('http://localhost:4201/upload', this.selectedFile).subscribe(res => console.log("results: ", res))
  }
}
