import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class Covid19Service {
  baseUrl:string = 'https://covid19-api.org/api/';

  constructor(
    private httpClient: HttpClient
  ) { }

  GetLatestStatus(){
    return this.httpClient.get(this.baseUrl + 'status', {observe: 'response'});
  }

}
