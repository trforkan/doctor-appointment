import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { first } from 'rxjs';

@Component({
  selector: 'app-calender',
  templateUrl: './calender.component.html',
  styleUrls: ['./calender.component.scss']
})
export class CalenderComponent implements OnInit {




  monthIndex?: number;

  flag=true;

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
  currentDate: number = 1;




  dateRow = [
    1,2,3,4,5,6
  ];

  lists: any[] = [

  ];


  temporaryArray = [
    this.getAllDaysInMonth(new Date().getFullYear(),0),
    this.getAllDaysInMonth(2022,1),
    this.getAllDaysInMonth(2022,2),
    this.getAllDaysInMonth(2022,3),
    this.getAllDaysInMonth(2022,4),
    this.getAllDaysInMonth(2022,5),
    this.getAllDaysInMonth(2022,6),
    this.getAllDaysInMonth(2022,7),
    this.getAllDaysInMonth(2022,8),
    this.getAllDaysInMonth(2022,9),
    this.getAllDaysInMonth(2022,10),
    this.getAllDaysInMonth(2022,11)
  ]

  firstPos: number=1;
  lastPos: number=1;
  month: number = new Date().getMonth();

  constructor(public route: ActivatedRoute , public cdrf: ChangeDetectorRef) { }

  ngOnInit(): void {
    // this.dateIncrement();


    console.log(this.temporaryArray);
    this.currentDate=1;
    this.firstPos=1;
    this.lastPos=1;

    this.route.params.subscribe(({id}) => {
      console.log("params=",id);
      this.month=id-1;
      console.log(this.temporaryArray);
      // this.lists=(this.getAllDaysInMonth(2022,id-1));
      // this.lists=this.temporaryArray[id-1];
      // this.temporaryArray[id]=(this.getAllDaysInMonth(2022,id-1))
      // console.log("list=",this.lists);
      this.firstPos = this.temporaryArray[this.month][0].getDay();
      console.log("fpos=",this.firstPos)
      // this.cdrf.detectChanges();
    });
  }


  getAllDaysInMonth(year:number, month:number) {
    const date = new Date(year, month, 1);
    const dates = [];

    while (date.getMonth() === month) {
      dates.push(new Date(date));
      date.setDate(date.getDate() + 1);
    }

    return dates;
  }



  dateIncrement() {
    this.currentDate++;
    this.firstPos++;
    console.log(this.currentDate," ",this.firstPos);
    this.firstPos%=7;
    // this.weekIndex++;
    // this.weekIndex%=7;
    // console.log(this.currentDate, this.weekIndex);
    // if(this.currentDate>this.lists.length+1)this.currentDate=0;
  }


  getDay(number: number) {
    return this.lists[number-1].getDay();
  }
  display() {
    console.log(this.currentDate);
  }

}
