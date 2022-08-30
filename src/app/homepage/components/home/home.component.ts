import { DialogboxComponent } from './../dialogbox/dialogbox.component';
import { Router } from '@angular/router';
import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Dialog } from '@angular/cdk/dialog';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {


  public dialogBox = true;

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
  selectedMonthIndex?: number;
  presentYear?: number;

  constructor(private router: Router, public dialog: Dialog) { }

  ngOnInit(): void {
    console.log(this.dialogBox);
    this.presentYear = new Date().getFullYear();

    this.selectedMonthIndex = new Date().getMonth();
    this.selectedMonth = this.months[this.selectedMonthIndex];
    console.log(this.selectedMonthIndex);

    this.router.navigateByUrl(`/month/${this.selectedMonthIndex+1}`);
  }


  display() {
    console.log(this.selectedMonth);
    this.selectedMonthIndex = this.months.indexOf(<string>this.selectedMonth);
    const val='/month/'+'olaf';
    console.log(`/month/${this.selectedMonth}`);
    console.log(this.selectedMonthIndex);
    this.router.navigateByUrl(`/month/${this.selectedMonthIndex+1}`);
  }

  openDialog() {
    this.dialog.open(DialogboxComponent);
  }

}
