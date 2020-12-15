export class Avatar {
  private name: string;
  private url: string = null;
  private avatar_uri: string = null;
  private file: File = null;


  constructor(file:File) {
    this.name = file.name;
    this.file = file;
  }

}

