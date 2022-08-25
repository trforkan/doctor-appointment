import { CalenderComponent } from './calender/calender.component';
import { HomeComponent } from './homepage/components/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: "", component: HomeComponent },
  // { path: "", component: CalenderComponent },
  { path: "month/:id", component: CalenderComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
