import { Routes } from "@angular/router";
import { HomeComponent } from "./components/home/home.component";
import { PortfolioComponent } from "./components/portfolio/portfolio.component";

export const appRoutes : Routes = 
    
    [   {path:"", component: HomeComponent},
        {path:"home", component: HomeComponent},
        {path:"portfolio", component: PortfolioComponent},
    ]