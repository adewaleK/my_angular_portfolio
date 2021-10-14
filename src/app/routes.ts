import { Routes } from "@angular/router";
import { HomeComponent } from "./components/home/home.component";
import { PortfolioComponent } from "./components/portfolio/portfolio.component";
import { AboutComponent } from "./components/about/about.component";
import { ContactComponent } from "./components/contact/contact.component";

export const appRoutes : Routes = 
    
    [   {path:"", component: HomeComponent},
        {path:"home", component: HomeComponent},
        {path:"portfolio", component: PortfolioComponent},
        {path:"about", component: AboutComponent},
        {path:"contact", component: ContactComponent},
    ]