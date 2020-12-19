import {AfterViewInit, Component, OnInit} from '@angular/core';
import {HttpService} from '../../../HttpService';
import {ActivatedRoute, Router} from '@angular/router';
import {Comments} from '../../../Comments';
import {Video} from '../../../Video';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit, AfterViewInit {
  video_id: number;
  current_comment: Comments;
  comment: string;
  comments_storage: Array<Comments> = new Array<Comments>();
  constructor(private httpService: HttpService, private router:Router,private activatedRouter: ActivatedRoute) {

  }

  ngOnInit() {
    this.video_id = Number(this.activatedRouter.snapshot.paramMap.get('id'))
  }

  ngAfterViewInit() {
    this.get_comments()
  }

  get_comments(){
    this.comments_storage = new Array<Comments>()
    this.httpService.getComments(this.video_id).subscribe((data: Response) => {
      console.log('Комменты пришли');
      let res = JSON.parse(JSON.stringify(data.body));
      for (let i in res) {
        let comment = new Comments(res[i]['id'], res[i]['username'], res[i]['date_of_published'], res[i]['likes'], res[i]['comments']);
        this.comments_storage.push(comment);
        console.log(this.comment);
      }

    })
  }

  like_comment(id:number){
    this.httpService.likeComment(id).subscribe( (data:Response) => {
      alert('Лайк комментария!');
      this.get_comments();
    })
  }
  add_comments(){
    let data = {
      'id': this.video_id,
      'comment': this.comment
    };
    this.httpService.addComments(data).subscribe( (data: Response) =>{
      alert('Комментарий был отправлен')
      this.get_comments()
    })
  }

}
