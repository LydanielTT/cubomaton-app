import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class MongodbService {
  
  private stonesUrl = 'api/stones';  // URL to web api
  
  constructor(private http: Http) { }

  // Get all posts from the API
  getAllAcquisitions() {
    return this.http.get('/api/posts')
      .map(res => res.json());
  }
  
  getAllStones() {
    return this.http.get('/api/stones')
      .map(res => res.json());
  }
  
  getStone(id: number): Promise<any> {
    const url = `${this.stonesUrl}/${id}`;
    return this.http.get(url)
      .toPromise()
      .then(res => res.json())
      .catch(this.handleError); //catch server failures
  }
  
  private handleError(error: any): Promise<any> {
    console.log('error');
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
