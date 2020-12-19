export class User_statistics{
  count_followers: number = null;
  amount_videos: number = null;
  likes_on_videos: number = null;


  constructor(count_followers: number, amount_videos: number, likes_on_videos: number) {
    this.count_followers = count_followers;
    this.amount_videos = amount_videos;
    this.likes_on_videos = likes_on_videos;
  }
}
