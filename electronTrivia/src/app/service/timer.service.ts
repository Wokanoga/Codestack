import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TimerService {

  constructor() { }

  timeLeft: number = 20;
  interval: any;

  startTimer() {
    this.stopTimer();
    this.timeLeft = 20;
    this.interval = setInterval(() => {
      if (this.timeLeft > 0) {
        this.timeLeft--;
      } else {
        this.stopTimer();
      }
    }, 1000)
  }

  stopTimer() {
    clearInterval(this.interval);
  }
}
