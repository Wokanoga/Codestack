import { Injectable } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Trivia } from '../interfaces/trivia';
import { timeout } from 'q';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  triviaQ: Array<Trivia>;
  Subscription = new Subscription;
  apiURLpt1 = 'https://spreadsheets.google.com/feeds/list/';
  apiKeypt2 = '13fPfYK2z8Pay-Spspj0GuvjazMIXFmwb-hrCGwhVLbQ';

  constructor(private http: HttpClient,
    private router: Router) { 
  }

  setData(sheetURL: string) {
    this.triviaQ = [];
    this.Subscription.add(this.getURL(this.apiURLpt1+this.apiKeypt2+sheetURL).subscribe(
      x => {
        for (const q of x.feed.entry) {
          let info: Trivia = {
            question: q['gsx$trivia-question']['$t'],
            a1: q['gsx$answer1']['$t'],
            a2: q['gsx$answer2']['$t'],
            a3: q['gsx$answer3']['$t'],
            a4: q['gsx$answer4']['$t'],
            correctA: q['gsx$correct-answer']['$t']
          }
          this.triviaQ.push(info);
        }
      }
    ));
    setTimeout(() => {
      this.router.navigate(['game']);
  }, 1000);
  }

  getURL(url: string): Observable<any> {  
    return this.http.get<any>(url);
  }

  ngOnDestroy(): void {
    this.Subscription.unsubscribe();
  }
}
