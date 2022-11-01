import { KitsuService } from './../../services/kitsu.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {

  @Input() listAll!:any;

  constructor(private kitsuService: KitsuService) { }

  ngOnInit(): void {
  }

}
