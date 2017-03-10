import { Component, OnInit, Input } from '@angular/core';
import { MongodbService } from '../mongodb.service';
import { PythonService } from '../python.service';
import { ActivatedRoute, Router } from '@angular/router';

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
  today = new Date();
  stones: Stone[];
  selectedStone: Stone;
  newstone : Stone = {
   name:'',
   id:null,
   updateAt:this.formatDate(this.today)
   };
  
  constructor(private router: Router, 
  private mongodbService: MongodbService,
  private pythonService: PythonService) { }
  
  @Input()
  stone: Stone;
  
  onSelect(stone: Stone): void {
    this.selectedStone = stone;
  }

  ngOnInit() {
  // Retrieve acquisitions from the API
    this.mongodbService.getAllStones()
        .subscribe(stones => {this.stones = stones});
  }
  
  formatDate(d) {

    var dd = d.getDate()
    if ( dd < 10 ) dd = '0' + dd

    var mm = d.getMonth()+1
    if ( mm < 10 ) mm = '0' + mm

    var yy = d.getFullYear()

    return new Date(dd+'/'+mm+'/'+yy)
  }

  add(stone: Stone) {
//    name = name.trim();
//    if (!name) { 
//      return ; 
//    }
    console.log(stone.name);
    this.mongodbService.create(stone)
        .then(stone => {
          this.stones.push(stone);
          this.selectedStone = null;
        })
  }

  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedStone.id]);
  }
  
  callPython(): void {
    this.pythonService.callPython()
        .subscribe();
  }

}
