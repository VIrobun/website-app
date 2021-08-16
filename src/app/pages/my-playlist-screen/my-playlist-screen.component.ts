import { Component, OnInit } from '@angular/core';
import Video from 'src/app/models/Video';
import { UserDataService } from 'src/app/UserDataService';

@Component({
  selector: 'app-my-playlist-screen',
  templateUrl: './my-playlist-screen.component.html',
  styleUrls: ['./my-playlist-screen.component.css']
})
export class MyPlaylistScreenComponent implements OnInit {

  constructor(private userPlaylist:UserDataService) { }

  playlist:Video[] = []
  showPlaylistbutton:boolean = false

  show:number = 0

  ngOnInit(): void {
    this.playlist = this.userPlaylist.retrieveVideos()
    if (this.playlist.length !== 0) {
      this.show = 1
      console.log("1");
      console.log(this.playlist);
      
      
    }

  }
clearPlaylist(){
  this.userPlaylist.delete()
  this.playlist = []
  console.log("Playlis delete selected: ", this.userPlaylist.retrieveVideos());
  this.show = 0
  
}
}
