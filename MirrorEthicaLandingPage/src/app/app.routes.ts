import { Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { AboutComponent } from './about/about.component';
import { LeersComponent } from './leers/leers.component';
import { ContactComponent } from './contact/contact.component';
import { NotFoundComponent } from './not-found/not-found.component';

export const routes: Routes = 
[
    {path: "", component: HomepageComponent},
    {path: "about", component: AboutComponent},
    {path: "leers", component: LeersComponent},
    {path: "contact", component: ContactComponent},
    {path: "**", component: NotFoundComponent}
];
