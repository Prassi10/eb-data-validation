import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {NgModule} from '@angular/core';
import {Http} from '@angular/http';

import 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/catch';

///Service class to call REST API
@Injectable()
export class ParseLogFile {
  constructor(private http: Http) {}

  public getFileData = (): Observable<Response> => {
    console.log('In getConfiguration of ParseLogFile');
    return this.http.get('././assets/Populate_Grid_Values.json').map(res => res.json());
  }
}
