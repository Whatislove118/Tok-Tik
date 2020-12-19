import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {HttpService} from '../../../HttpService';

@Component({
  selector: 'app-add-video',
  templateUrl: './add-video.component.html',
  styleUrls: ['./add-video.component.css']
})
export class AddVideoComponent implements OnInit {

  video: File = null;
  video_description: string = null;
  hash_tags: string = null;
  audio_name: string = null;
  author_name: string = null;
  constructor(private router: Router, private httpService: HttpService) { }

  ngOnInit() {
  }

  handleVideoInput(files: FileList) {
    this.video = files.item(0);
  }



  sendVideo(){
    let formData = new FormData();
    console.log(this.video);
    formData.append('video', this.video, this.video.name);
    formData.append('video_description', this.video_description);
    formData.append('hashtags', this.hash_tags);
    formData.append('audio_name', this.audio_name);
    formData.append('author_name', this.author_name);
    this.httpService.sendVideo(formData).subscribe( (data: Response) =>{
      console.log(console.log(JSON.parse(JSON.stringify(data.body))));
      alert('Видео было успешно добавлено!')
    }, onerror => {
      alert('Ошибка')
    })

  }

}
