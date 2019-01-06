import { AdComponent } from './ad/ad.component';

import { Injectable } from '@angular/core';
import { AdItem } from './ad.item';


@Injectable({
  providedIn: 'root'
})
export class AdService {

  constructor() { }
  getAds() {
    return [[
      new AdItem(AdComponent,   {headline: 'In Kansas',
      body: 'Submit your zipcode now',image:'assets/image1.jpg'}),

new AdItem(AdComponent,   {headline: 'In Arkansas',
      body: 'Find out more?',image:'assets/image2.jpg'}),
    ],
  [
    new AdItem(AdComponent,   {headline: 'In California',
    body: 'Submit your zipcode now',image:'assets/image3.jpg'}),

new AdItem(AdComponent,   {headline: 'In 	Delaware',
    body: 'Find out more?',image:'assets/image4.jpg'}),
  ],[
    new AdItem(AdComponent,   {headline: 'In Florida',
    body: 'Submit your zipcode now',image:'assets/image5.jpg'}),

new AdItem(AdComponent,   {headline: 'In Georgia',
    body: 'Find out more?',image:'assets/image6.jpg'}),
  ],[
    new AdItem(AdComponent,   {headline: 'In Missouri',
    body: 'Submit your zipcode now',image:'assets/image7.jpg'}),

new AdItem(AdComponent,   {headline: 'In Illinois',
    body: 'Find out more?',image:'assets/image8.jpg'}),
  ],
[
  new AdItem(AdComponent,   {headline: 'In Texas',
  body: 'Submit your zipcode now',image:'assets/image9.jpg'}),

new AdItem(AdComponent,   {headline: 'In Ohio',
  body: 'Find out more?',image:'assets/image10.jpg'}),
],[
  new AdItem(AdComponent,   {headline: 'In Virginia',
  body: 'Submit your zipcode now',image:'assets/image11.jpg'}),

new AdItem(AdComponent,   {headline: 'In New York',
  body: 'Find out more?',image:'assets/image10.png'}),
]];
  }
}
