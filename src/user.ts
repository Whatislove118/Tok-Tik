export class User {
  login:string;
  email:string;
  password:string;

  constructor(login:string, password:string, email:string){
    this.login = login;
    this.password = password;
    this.email = email;
  }

}
