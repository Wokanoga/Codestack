import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'el-title-page',
  templateUrl: './title-page.component.html',
  styleUrls: ['./title-page.component.scss']
})
export class TitlePageComponent implements OnInit {

  playBtn = 'Play';
  constructor() { }

  ngOnInit() {
  }

}
