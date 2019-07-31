import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'el-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {

  constructor() { }
  @Input() btnName: string;
  ngOnInit() {
  }

}
