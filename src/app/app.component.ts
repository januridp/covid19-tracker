import { Component } from '@angular/core';
import { Covid19Service } from './services/covid19.service';
import { 
  MatSnackBar,
 } from '@angular/material/snack-bar';

export interface Status {
  country: string;
  last_update: string;
  cases: number;
  deaths: number;
  recovered: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title   = 'Covid-19 Tracker'; 
  statusResponse: any;
  statuses: Status[];

  constructor(
    private covid19Service: Covid19Service,
    private _snackBar: MatSnackBar
  ){ }

  ngOnInit() {
    console.log("ngOnInit!!!");
    this.covid19Service.GetLatestStatus().subscribe((statusResponse : any)=>{
      if (statusResponse.status === 200) {
        this.statuses = statusResponse.body;
        // this.statuses.forEach(element => {
        //   this.statuses = statusResponse;
        // });
      } else {
        this.statuses = null;
      }
      // this.statusResponse.forEach(element => {
      //   this.statuses = this.statusResponse;
      // });
    });
  }

  refresh(): void {
    window.location.reload();
    this._snackBar.open("Refreshed!", "OK", {
      duration: 2000,
    });
    console.log("Refresh!!!")
  }

}
