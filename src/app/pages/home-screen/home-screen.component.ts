import { Component, OnInit} from '@angular/core';
import { DailyMotion } from 'src/app/DailyMotionService';

import Video from 'src/app/models/Video';
@Component({
  selector: 'app-home-screen',
  templateUrl: './home-screen.component.html',
  styleUrls: ['./home-screen.component.css']
})
export class HomeScreenComponent implements OnInit {

  //properties
  name:any
  search:string = ""


  videoListFromAPI:Video[] = []

  
  constructor(private data:DailyMotion) { }

  ngOnInit(): void {
  }

  getVideos(){
    //retrieve the keyword
    this.search = this.name

    this.data.setSearch(this.search)
    //call service class
    this.data.getVideosFromAPI().subscribe((dataFromApi:any)=>{
      //console.log(dataFromApi["list"]);
      this.videoListFromAPI = dataFromApi["list"]
      console.log(this.videoListFromAPI);
      
    })
  }
}
