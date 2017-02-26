import { Component, OnInit } from '@angular/core';
import { MongodbService } from '../mongodb.service';

import { Router } from '@angular/router';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  stones: any = [];
  
  selectedStone: any;
  constructor(private router: Router, private mongodbService: MongodbService) { }
  
  onSelect(stone: any): void {
    this.selectedStone = stone;
  }

  ngOnInit() {
  // Retrieve acquisitions from the API
    this.mongodbService.getAllStones().subscribe(stones => {
        this.stones = stones;
    });
  }
  
  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedStone.id]);
  }

}
