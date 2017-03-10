import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class PythonService {

  constructor(private http: Http) { }

  // Call python file
//  callPython(): Promise<any> {
//    return this.http.get('/pythonway/callpython')
//               .toPromise()
//               .then(res => res.json() as any)
//               .catch(this.handleError); //catch server failures
//  }
  
    callPython() {
    return this.http.get('/pythonway/callpython')
               .map(res => res.json());
  }
  private handleError(error: any): Promise<any> {
    console.log('error');
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
