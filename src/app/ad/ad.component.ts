import { Component, OnInit ,Input} from '@angular/core';
import { IAdsComponent } from '../iads.component';
@Component({
  selector: 'app-ad',
  templateUrl: './ad.component.html',
  styleUrls: ['./ad.component.css']
})
export class AdComponent implements OnInit,IAdsComponent {
  @Input() data: any;
  constructor() { }

  ngOnInit() {
  }

}
