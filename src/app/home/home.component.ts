import { AdService } from './../ad.service';
import { Component, OnInit } from '@angular/core';
AdService
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  ads;
   itemData=[{
    "label": 'Umbrella',
    "description": "Afraid of rain? check out our coolest umbrella.",
    "price":"$45.00",
     "image":"assets/image13.jpg"
   },{
    "label": 'A.C.',
    "description": "In hot summer if you want to stay as cool as 'C' check out our A.C.",
    "price":"$700.00",
     "image":"assets/image14.jpg"
   },{
    "label": 'Winter jacket',
    "description": "Thinking of moving out in cool winter then you need a jacket which keeps you warmer.",
    "price":"$67.00",
     "image":"assets/image15.jpg"
   }]
  weatherData = [{
    "image": "assets/image16.jpg"
  }, {
    "image": "assets/image17.jpg"
  }, {
    "image": "assets/image18.jpg"
  }];
  constructor(private adService: AdService) { }

  ngOnInit() {
    this.ads = this.adService.getAds();
  }

}
