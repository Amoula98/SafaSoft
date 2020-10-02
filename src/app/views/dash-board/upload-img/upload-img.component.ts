import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-upload-img',
  templateUrl: './upload-img.component.html',
  styleUrls: ['./upload-img.component.css']
})
export class UploadImgComponent implements OnInit {
  @Input() _formData;
  isShow: boolean;
  src = '../../../../assets/images/uploadImg/1.PNG';
  constructor() { }

  ngOnInit() {
  }
  upload(files) {
    this.isShow = false;
    console.log('element, $event.target.files', files);
    if (Math.round(files[0].size / 1024) < 500) {
      // this.getBase64(files);
      this._formData.patchValue({
        company_avatar: files[0].name
      });
    } else {
      this.isShow = true;
    }
  }
  // getBase64(file) {
  //   const reader: any = new FileReader();
  //   reader.readAsDataURL(file);
  //   reader.onload = () => {
  //     console.log(reader.result);
  //     this.src = reader.result.replace('data:application/octet-stream;base64,', 'data:image/png;base64,');
  //   console.log('element, $event.target.files', file, this.src);

  //   };
  //   reader.onerror = (error) => {
  //     console.log('Error: ', error);
  //   };
  // }
}
