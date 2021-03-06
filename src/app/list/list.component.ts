import { Component, OnInit } from '@angular/core';
import { MongodbService } from '../mongodb.service';

import { Stone } from '../stone';
@Component({
  moduleId: module.id,  
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  stones: Stone[];
  
  selectedStone: Stone;
  constructor(private mongodbService: MongodbService) { }
  
  ngOnInit() {
  // Retrieve acquisitions from the API
    this.mongodbService.getAllStones()
        .subscribe(stones => {this.stones = stones});
  }

}
