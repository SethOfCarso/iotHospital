import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Subject, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DashboardAPIService {

  newURL:string;
  urlGETTemperature = 'https://industrial.api.ubidots.com/api/v1.6/variables/5fbc7e7673efc35da4ff3329/values';
  urlGETOxigene = 'https://industrial.api.ubidots.com/api/v1.6/variables/5fbc7e750ff4c31c331fb8ea/values';
  token = 'BBFF-8XRqQNbNsBTUAX9RDgeTms4LfhMKex';

  valTemp1:any = [];
  valTemp1Subject = new BehaviorSubject<[]>([]);

  valOxi1:any =[];
  valOxi1Subject = new BehaviorSubject<[]>([]);

  constructor(private http: HttpClient) {

   }

   readValTemp1(){
    return this.valTemp1.slice();
  }

  readValOxi1(){
    return this.valOxi1.slice();
  }

  //  ===========================================
  //  Get usuarios from server
  //  ===========================================
  loadValTemperatura() {
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type','application/json').set('X-Auth-Token', this.token);
    this.http.get(this.urlGETTemperature,{headers: headers}).subscribe(
      (data:any) => {
        // console.log("Temperatura");
        // console.log(data.results);
        this.valTemp1 = data.results;
        this.valTemp1Subject.next(this.readValTemp1());
        // this.answSubject.next('Se cargaron los usuarios correctamente');
      },
      (err) => (console.log(err))
    );
  }

  loadValOxigeno() {
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type','application/json').set('X-Auth-Token', this.token);
    this.http.get(this.urlGETOxigene,{headers: headers}).subscribe(
      (data:any) => {
        // console.log("Oxigeno");
        // console.log(data.results);
          this.valOxi1 = data.results;
        this.valOxi1Subject.next(this.readValOxi1());
        
        // this.answSubject.next('Se cargaron los usuarios correctamente');
      },
      (err) => (console.log(err))
    );
  }

}
