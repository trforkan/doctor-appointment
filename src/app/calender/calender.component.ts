import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { first } from 'rxjs';

@Component({
  selector: 'app-calender',
  templateUrl: './calender.component.html',
  styleUrls: ['./calender.component.scss']
})
export class CalenderComponent implements OnInit {

  monthIndex?: number;

  weeks = [
    "Sun",
    "Mon",
    "Tue",
    "Wed",
    "Thu",
    "Fri",
    "Sat"
  ];

  counter(i: number) {
    return new Array(i);
  }

  weekIndex = 0;
  weekName = this.weeks[this.weekIndex];
  currentDate: number = 0;




  dateRow = [
    1,2,3,4,5,6
  ];

  lists : any[]=[];

  firstPos?: number;
  lastPos?: number;

  constructor(public route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(({id}) => {
      console.log(id);
      this.monthIndex=id;
      this.getAllDaysInMonth(2022,(<number>this.monthIndex-1));
    });

    this.getAllDaysInMonth(2022,(<number>this.monthIndex-1));
    this.weekIndex=this.lists[0].getDay();
    console.log("lists=",this.lists);
    // this.firstPos= this.lists[0].getDay();
    // this.lastPos = this.lists[this.lists.length].getDay();
    // console.log(this.firstPos," ", this.lastPos)
  }


  getAllDaysInMonth(year:number, month:number) {
    const date = new Date(year, month, 1);
    // console.log(year);
    const dates = [];

    while (date.getMonth() === month) {
      dates.push(new Date(date));
      date.setDate(date.getDate() + 1);
    }

    return this.lists=dates;
  }

  dateIncrement() {
    this.currentDate++;
    this.weekIndex++;
    // this.weekIndex%=7;
    console.log(this.currentDate, this.weekIndex);
    // if(this.currentDate>this.lists.length+1)this.currentDate=0;
  }


  getDay(number: number) {
    return this.lists[number-1].getDay();
  }

}
