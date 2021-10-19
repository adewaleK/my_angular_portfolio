import { Component, OnInit } from '@angular/core';
import { Portfolio_dataService } from 'src/app/_services/portfolio_data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private portfolioData:Portfolio_dataService) { }

  ngOnInit():void {
    this.portfolioData
  }

}
