import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

import { Stone } from '../stone';
import { MongodbService } from '../mongodb.service';

import 'rxjs/add/operator/switchMap'; //to use Observable

@Component({
  moduleId: module.id,
  selector: 'app-detail-stone',
  templateUrl: './detail-stone.component.html',
  styleUrls: ['./detail-stone.component.css']
})
export class DetailStoneComponent implements OnInit {

  stone: Stone;
  constructor(
    private mongodbService: MongodbService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit(): void {
  this.route.params
    .switchMap((params: Params) => this.mongodbService.getStone(+params['id']))
    .subscribe(stone => this.stone = stone);
  }
  
  goBack(): void {
    this.location.back();
  }
}
