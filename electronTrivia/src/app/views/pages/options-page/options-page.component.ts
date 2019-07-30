import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'el-options-page',
  templateUrl: './options-page.component.html',
  styleUrls: ['./options-page.component.scss']
})
export class OptionsPageComponent implements OnInit {

  easy='Easy';
  medium='Medium';
  hard='Hard';

  Sheet1 = '/1/public/values?alt=json';
  Sheet2 = '/2/public/values?alt=json';
  Sheet3 = '/3/public/values?alt=json';

  constructor(private dServe: DataService) { }

  ngOnInit() {
  }

  loadEasy() {
    this.dServe.setData(this.Sheet1);
  }
  loadMedium() {
    this.dServe.setData(this.Sheet2);
  }
  loadHard() {
    this.dServe.setData(this.Sheet3)
  }
    
}
