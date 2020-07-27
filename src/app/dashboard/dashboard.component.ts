import { Component, OnInit } from '@angular/core';
import {formatDate } from '@angular/common';
import { AuthService } from './../user/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  public date: Date = new Date();
  public today: string;
 
  constructor(public auth: AuthService) {
    setInterval(() => {
      this.today = formatDate(this.date, 'dd-MM-yyyy hh:mm:ss a', 'en-US');
    }, 1); 
  }

  ngOnInit(): void {
  }

}
