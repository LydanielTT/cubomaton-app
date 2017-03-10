import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MongodbService } from './mongodb.service';
import { PythonService } from './python.service';
import { DetailStoneComponent } from './detail-stone/detail-stone.component';
import { ListComponent } from './list/list.component';

// Define the routes
const ROUTES = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: DashboardComponent
  },
  {
    path: 'detail/:id',
    component: DetailStoneComponent
  },
  {
    path: 'homelist',
    component: ListComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    DetailStoneComponent,
    ListComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [MongodbService, PythonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
