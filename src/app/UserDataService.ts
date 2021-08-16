import { Injectable } from "@angular/core";
import Video from "./models/Video";

@Injectable({
  providedIn: 'root'
})
export class UserDataService{


  playlist:Video[] = []


  addVideo(video:Video):void{
    this.playlist.push(video)

  }

  retrieveVideos():Video[]{
    return this.playlist
  }

  delete():void{
    this.playlist = []
  }
}