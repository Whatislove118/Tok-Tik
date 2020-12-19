export class Video{
  url: string = '';
  likes: number;
  id: number;
  description: string = '';
  hash_tags: string;
  user_id: number;
  owner_username: string = '';


  constructor(url: string, likes: number, id: number, description: string, hash_tags: string, user_id: number, owner_username: string) {
    this.url = url;
    this.likes = likes;
    this.id = id;
    this.description = description;
    this.hash_tags = hash_tags;
    this.user_id = user_id;
    this.owner_username = owner_username;
  }
}
