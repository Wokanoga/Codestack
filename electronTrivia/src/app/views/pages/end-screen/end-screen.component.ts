import { Component, OnInit } from '@angular/core';
import { ScoreService } from 'src/app/service/score.service';

@Component({
  selector: 'el-end-screen',
  templateUrl: './end-screen.component.html',
  styleUrls: ['./end-screen.component.scss']
})
export class EndScreenComponent implements OnInit {

  constructor(private score: ScoreService) { }

  back2Title: string = 'Return to Title'
  ngOnInit() {
  }

}
