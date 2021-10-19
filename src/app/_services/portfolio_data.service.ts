import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class Portfolio_dataService {

  baseUrl = 'https://sq009pod2.herokuapp.com/api/User';

  constructor(private http : HttpClient) { 

    
  }

  get_date(){
    return this.http.
    get(this.baseUrl).
    subscribe(
      (data:any)=>{
        console.log(data);
      }
    )

  }

}



