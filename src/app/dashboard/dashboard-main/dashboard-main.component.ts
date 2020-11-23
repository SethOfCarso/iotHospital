import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard-main',
  templateUrl: './dashboard-main.component.html',
  styleUrls: ['./dashboard-main.component.scss']
})
export class DashboardMainComponent implements OnInit {

  now:number;

    constructor() {
        setInterval(() => {
          this.now = Date.now();
        }, 1);
    }

  ngOnInit(): void {
  }

}
