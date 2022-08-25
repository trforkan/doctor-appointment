import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ];

  weeks = [
    "Saturday",
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday"
  ]

  selectedMonth?: string;
  presentYear?: number;

  constructor(private router: Router) { }

  ngOnInit(): void {
    // console.log(new Date().getDay());
    this.presentYear = new Date().getFullYear();
    this.selectedMonth = this.months[new Date().getMonth()];
    
    this.router.navigateByUrl(`/month/${this.selectedMonth}`);
  }
  display() {
    // console.log(this.selectedMonth);
    const val='/month/'+'olaf';
    // console.log(`/month/${this.selectedMonth}`);
    this.router.navigateByUrl(`/month/${this.selectedMonth}`);
  }

}
