import { Component, OnInit } from '@angular/core';
import { MongodbService } from '../mongodb.service';

import { Router } from '@angular/router';

import { Stone } from '../stone';

@Component({
  moduleId: module.id,
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
//  stones: any = [];
//  
//  selectedStone: any;

  stones: Stone[];
  
  selectedStone: Stone;
  constructor(private router: Router, private mongodbService: MongodbService) { }
  
  onSelect(stone: Stone): void {
    this.selectedStone = stone;
  }

  ngOnInit() {
  // Retrieve acquisitions from the API
    this.mongodbService.getAllStones()
//        .subscribe(stones => {this.stones = stones});
  }
  
//  add(name: string): void {
//    name = name.trim();
//    if (!name) { return; }
//    this.mongodbService.create(name)
//        .then(hero => {
//          this.stones.push(stone);
//          this.selectedStone = null;
//        });
//  }

  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedStone.id]);
  }

}
