import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions } from 'chart.js';
import { Color, Label } from 'ng2-charts';
import { DashboardAPIService } from '../dashboard-api.service';
import { interval } from 'rxjs';

@Component({
  selector: 'app-dashboard-main',
  templateUrl: './dashboard-main.component.html',
  styleUrls: ['./dashboard-main.component.scss']
})
export class DashboardMainComponent implements OnInit {

  now:number;
  temperatureData=[{value:0,timestamp:1606257014436}, {value:0,timestamp:0}];
  oxigenData=[{value:"0"},{value:0}];
  bed1=0;
  bed2=0;
  bed3=0;
  bed4=0;
  bed5=0;
  tempo=0;
  oxig:any=0;

  lastUpdate;

    constructor(private apiService:DashboardAPIService) {

      this.udpateInfo();
      this.lastUpdate = this.now;

      //in 10 seconds do something
      interval(5000).subscribe(x => {
        // console.log("Llamo cada 5 segs");
        this.udpateInfo();
        this.lastUpdate = this.now;
        this.updateBedStatus();
        if(this.bed1 == 3){
          alert("En la cama 1 URGE atención")
        }
      });

        setInterval(() => {
          this.now = Date.now();
        }, 1);
    }
    
    lineChartData: ChartDataSets[] = [
      { data: [85, 72, 78, 75, 77, 75], label: 'Crude oil prices' },
    ];

    lineChartLabels: Label[] = ['January', 'February', 'March', 'April', 'May', 'June'];

    lineChartOptions = {
      responsive: true,
    };

    lineChartColors: Color[] = [
      {
        borderColor: 'black',
        backgroundColor: 'rgba(255,255,0,0.28)',
      },
    ];

    lineChartLegend = true;
    lineChartPlugins = [];
    lineChartType = 'line';

    updateBedStatus(){
      this.tempo = this.temperatureData[0].value;
      this.oxig = this.oxigenData[0].value;
      console.log(this.tempo);
      if((this.tempo >= 36 && this.tempo <37.5 ) && (this.oxig > 94) ){
        this.bed1 = 1;
        console.log("1");
        
      } 
      if(this.tempo > 37.5 && this.tempo <= 38){
        this.bed1 = 2;
        console.log("2");
        
      }
       if(this.oxig >= 90 && this.oxig <=94 ){
        this.bed1 = 2;
        console.log("4");
      }

      if(this.tempo > 38 || this.tempo < 36){
        this.bed1 = 3;
        console.log("3");
      }
       if(this.oxig < 90){
        this.bed1 = 3;
        console.log("5");
      }
      
      console.log("Cama");
      console.log(this.bed1);

    }

    udpateInfo(){
      // console.log("Hola mundo");
      this.apiService.loadValTemperatura();
      
      this.apiService.valTemp1Subject.subscribe((data:any)=>
    {
      if(data != undefined){
        if(data[0] != undefined)
        {
        this.temperatureData = data;
        // console.log(this.temperatureData);
        } else{
        console.log("Error");
        }
      }
    })

      this.apiService.loadValOxigeno();
      this.apiService.valOxi1Subject.subscribe((data:any)=>
    {
      if(data[0] != undefined)
      {
        if(data[0] != undefined){
          this.oxigenData = data;
          // console.log(data);
        // console.log(this.oxigenData);
        }
      }
      else{
        console.log("Error");
      }
      // this.loginFalse();
    })
    }

  ngOnInit(): void {
  }

}


