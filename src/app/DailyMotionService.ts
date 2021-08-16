import { Injectable } from '@angular/core';
import Video from './models/Video';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DailyMotion {


  constructor(private http:HttpClient) { }

  search:string = ""


  public setSearch(val:string){
    val = val.split(' ').join('+');
    this.search = val
  }

  getVideosFromAPI():Observable<Video[]>{
    //mapping into an array of video objects
    return this.http.get<any>(
      "https://api.dailymotion.com/videos?fields=id%2Cthumbnail_360_url%2Ccreated_time%2Cviews_total%2Ctitle%2Cowner.username%2cowner.avatar_80_url&search=" + this.search)

  }
}
