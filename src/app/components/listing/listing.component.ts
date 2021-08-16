
import { Component, OnInit, Input } from '@angular/core';
import Video from 'src/app/models/Video';


@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.css']
})
export class ListingComponent implements OnInit {

  constructor() { }

  @Input() listing:Video[] = []

  @Input() showPlaylistbutton:boolean = true

  ngOnInit(): void {

  }

}
