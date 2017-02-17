import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class MongodbService {

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
}
