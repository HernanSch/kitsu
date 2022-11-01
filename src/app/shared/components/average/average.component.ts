import { KitsuService } from './../../services/kitsu.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-average',
  templateUrl: './average.component.html',
  styleUrls: ['./average.component.scss']
})
export class AverageComponent implements OnInit {

  @Input() listAverage!:any;
  @Input() listUsercount!:any;
  @Input() listUpComing!:any;
  @Input() list!:any;
  @Input() listCurrent!:any;

  constructor(private kitsuService: KitsuService) { }

  ngOnInit(): void {

  }

}
