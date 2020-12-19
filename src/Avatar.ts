export class Avatar {
 file: File = null;
  url_default: string = '/static/default_img.png/';
 url: string = 'http://localhost:8000' + this.url_default;


  constructor(file:File) {
    this.file = file;
  }


}

