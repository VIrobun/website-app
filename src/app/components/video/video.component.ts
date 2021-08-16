import { Component, OnInit, Input } from '@angular/core';
import Video from 'src/app/models/Video';
import { UserDataService } from 'src/app/UserDataService';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.css']
})
export class VideoComponent implements OnInit {

  //@Input() videoData:Video = {} as Video

  @Input() videoData:any;

  id:string = ""
  thumbnail:string = ""
  views:number = 0
  createdTime:number = 0
  title:string =""
  username:string =""
  avatar:string = ""

  @Input() show:boolean = false
  change:string = "change"
  display:string = "ADD TO PLAYLIST"
  
  constructor(private userPlaylist:UserDataService) { }

  ngOnInit(): void {
    console.log(this.videoData)
    this.id = this.videoData.id
    this.thumbnail = this.videoData.thumbnail_360_url
    this.avatar = this.videoData['owner.avatar_80_url']
    this.title = this.videoData.title
    this.username = this.videoData['owner.username']
    this.views = this.videoData.views_total
    this.createdTime = this.videoData.created_time 

  }
store(){

  if(this.userPlaylist.playlist.includes(this.videoData) === false){
    this.userPlaylist.addVideo(this.videoData)
    this.display = "ALREADY ADDED"
    this.change = "change2"
  }
  else{
    
  }
}
}
