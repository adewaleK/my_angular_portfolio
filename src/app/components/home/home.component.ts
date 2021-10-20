import { Component, OnInit } from '@angular/core';
import { About } from 'src/app/_models/about';
import { FirstName } from 'src/app/_models/firstName';
import { LastName } from 'src/app/_models/lastName';
import { Skills } from 'src/app/_models/skills';
import { Portfolio_dataService } from 'src/app/_services/portfolio_data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  mySkills:Skills[]
  about:About
  firstName:FirstName
  lastName:LastName
  imagebaseurl = "../../../assets/"
  constructor(private portfolioData:Portfolio_dataService) { }

  ngOnInit():void {
    this.portfolioData.get_date().subscribe(
      (mydata:any)=>{
        const {message,data} = mydata;
        this.mySkills = data.skills;
        this.about = data.about;
        this.firstName=data.firstName;
        this.lastName=data.lastName;
      }
    );
  }

}
