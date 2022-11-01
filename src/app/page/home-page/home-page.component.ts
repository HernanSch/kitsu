import { KitsuService } from './../../shared/services/kitsu.service';
import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  @Input() trending!:any;
  @Input() current!:any;
  @Input() upcoming!:any;
  @Input() average!:any;
  @Input() usercount!:any;
  @Input() listAllC!:any;

  constructor(private kitsuService: KitsuService) { }

  ngOnInit(): void {
    this.kitsuService.getTrending().subscribe((res:any) => {
      this.trending = res.data
    })
      // console.log(this.trending);
    this.kitsuService.getCurrent().subscribe((res:any) => {
      this.current = res.data
    })
    this.kitsuService.getUpComing().subscribe((res:any) => {
      this.upcoming = res.data
    })
    this.kitsuService.getAverage().subscribe((res:any) => {
      this.average = res.data
    })
    this.kitsuService.getUsercount().subscribe((res:any) => {
      this.usercount = res.data
    })
    this.kitsuService.getAll().subscribe((res:any) => {
      this.listAllC = res.data
    })
  }
}
