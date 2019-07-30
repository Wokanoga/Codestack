import { Component, OnInit } from '@angular/core';
import { TimerService } from 'src/app/service/timer.service';
import { DataService } from 'src/app/service/data.service';
import { Subscription } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { ScoreService } from 'src/app/service/score.service';

@Component({
  selector: 'el-game-page',
  templateUrl: './game-page.component.html',
  styleUrls: ['./game-page.component.scss']
})
export class GamePageComponent implements OnInit {

  constructor(private timeServe: TimerService,
    private dataServe: DataService,
    private toastr: ToastrService,
    private router: Router, 
    private score: ScoreService) { }

  randomArr: Array<number>;
  qNum: number;
  iter: number = -1
  a1: string;
  a2: string;
  a3: string;
  a4: string;
  correctAnswer: string;
  question: string;
  subscription: Subscription = new Subscription;
  incorrectCounter: number = 0;
  continue: string = 'Continue';

  showSuccess() {
    this.toastr.success('Nice job!');
  }

  showFailure() {
    this.toastr.error('WRONG');
  }

  showOutofTime() {
    this.toastr.error('BE FASTER');
  }

  ngOnInit(): void {
    this.score.score = 0;
    this.randomArr = [];
    while (this.randomArr.length < 10) {
      let r = Math.floor(Math.random() * 10);
      if (this.randomArr.indexOf(r) === -1) this.randomArr.push(r);
    }
    console.log(this.randomArr);
    this.fillVariables();
  }

  checkAnswer(a: string) {
    //Need to do something when they pick the right or wrong answer.
    if (a === this.correctAnswer) {
      this.showSuccess();
      this.score.score++;
    } else {
      this.showFailure();
    }
    this.fillVariables();
  }

  fillVariables() {
    if (this.iter == 9) {
      this.router.navigate(['endScreen']);
    } else {
      this.iter++;
      this.timeServe.startTimer();
      this.qNum = this.randomArr[this.iter];
      this.a1 = this.dataServe.triviaQ[this.qNum].a1;
      this.a2 = this.dataServe.triviaQ[this.qNum].a2;
      this.a3 = this.dataServe.triviaQ[this.qNum].a3;
      this.a4 = this.dataServe.triviaQ[this.qNum].a4;
      this.correctAnswer = this.dataServe.triviaQ[this.qNum].correctA;
      this.question = this.dataServe.triviaQ[this.qNum].question;
    }
  }

  ngOnDestroy(): void {
    this.timeServe.stopTimer();
    this.subscription.unsubscribe();
  }
}
