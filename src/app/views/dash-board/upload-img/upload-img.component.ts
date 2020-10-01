import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-upload-img',
  templateUrl: './upload-img.component.html',
  styleUrls: ['./upload-img.component.css']
})
export class UploadImgComponent implements OnInit {
  @Input() _formData;
  isShow: boolean;
  constructor() { }

  ngOnInit() {
  }
  upload(files) {
    this.isShow = false;
    console.log('element, $event.target.files', files);
    if (Math.round(files[0].size / 1024) < 500) {
    } else {
      this.isShow = true;
    }
  }
}
