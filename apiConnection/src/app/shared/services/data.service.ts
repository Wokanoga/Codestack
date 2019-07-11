import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

const httpOptions = {
	headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};

@Injectable({
	providedIn: 'root',
})
export class DataService {
	public data: any;
	private url = environment.apiURL;

	constructor(private http: HttpClient, private router: Router) { }

	public get(key: string): Observable<any> {
		return this.http.get(this.url + key, httpOptions)
			.pipe(
				map(res => this.data = res),
				tap((res: any) => this.handleSuccess(res, null)),
				catchError(err => this.handleError(err)),
			);
	}

	public post(route: string, item: any, optionalMsg?: string): any {
		return this.http.post(this.url + route, item)
			.pipe(
				map(res => this.data = res),
				tap((res: any) => this.handleSuccess(res, optionalMsg)),
				catchError(err => this.handleError(err)),
			);
	}

	public patch(route: string, item: any, optionalMsg?: string) {
		return this.http.patch(this.url + route, item)
			.pipe(
				map(res => this.data = res),
				tap((res: any) => this.handleSuccess(res, optionalMsg)),
				catchError(err => this.handleError(err)),
			);
	}

	private handleSuccess(res: any, optionalMsg: string) {
		if (optionalMsg) {
			alert(optionalMsg);
		}
	}

	private handleError(err: HttpErrorResponse) {
		alert(err);
		return of(err);
	}
}