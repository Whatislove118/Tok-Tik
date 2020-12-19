export class Comments{
  comment_id:number;
  comment_username:string;
  date_of_published:string;
  comment_likes: string;
  comment_text: string;


  constructor(comment_id: number, comment_username: string, date_of_published: string, comment_likes: string, comment_text: string) {
    this.comment_id = comment_id;
    this.comment_username = comment_username;
    this.date_of_published = date_of_published;
    this.comment_likes = comment_likes;
    this.comment_text = comment_text;
  }
}
