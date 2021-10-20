import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class Portfolio_dataService {

  baseUrl = 'https://sq009pod2.herokuapp.com/api/User';
  constructor(private http : HttpClient) { 
  }

  private userId = '953d99a4-f8bb-4bca-9d48-4f89bcd815d8';

  get_date(){
    const headers = new HttpHeaders({
      'userId': this.userId      
    });

    return this.http.
    get(this.baseUrl, {headers: headers})
  }

}



