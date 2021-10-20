import { Component, OnInit } from '@angular/core';
import { Projects } from 'src/app/_models/projects';
import { Portfolio_dataService } from 'src/app/_services/portfolio_data.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {
  myProjects:Projects[]
  imagebaseurl = "../../../assets/"
  constructor(private portfolioData:Portfolio_dataService) { }

  ngOnInit():void {
    this.portfolioData.get_date().subscribe(
      (myData:any)=>{
        const {message,data} = myData;
          this.myProjects = data.projects;
          this.myProjects[0].title="School-Portal-App";
          this.myProjects[1].title="Shopping-Cart-App";
          console.log(data.projects)
          //console.log(this.live);
      }
    )
  }

}
