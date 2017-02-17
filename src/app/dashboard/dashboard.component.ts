import { Component, OnInit } from '@angular/core';
import { MongodbService } from '../mongodb.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  stones: any = [];
  
  constructor(private mongodbService: MongodbService) { }

  ngOnInit() {
  // Retrieve acquisitions from the API
    this.mongodbService.getAllStones().subscribe(stones => {
        this.stones = stones;
    });
  }

}
