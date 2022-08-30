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

  dateRow = [
    1,2,3,4,5,6
  ];

  lists: any[] = [
    { Dates: [] },
    { Dates: [] },
    { Dates: [] },
    { Dates: [] },
    { Dates: [] },
    { Dates: [] },
    { Dates: [] },
    { Dates: [] },
    { Dates: [] },
    { Dates: [] },
    { Dates: [] },
    { Dates: [] },
  ];



  temporaryArray = [
    this.getAllDaysInMonth(new Date().getFullYear(),0),
    this.getAllDaysInMonth(new Date().getFullYear(),1),
    this.getAllDaysInMonth(new Date().getFullYear(),2),
    this.getAllDaysInMonth(new Date().getFullYear(),3),
    this.getAllDaysInMonth(new Date().getFullYear(),4),
    this.getAllDaysInMonth(new Date().getFullYear(),5),
    this.getAllDaysInMonth(new Date().getFullYear(),6),
    this.getAllDaysInMonth(new Date().getFullYear(),7),
    this.getAllDaysInMonth(new Date().getFullYear(),8),
    this.getAllDaysInMonth(new Date().getFullYear(),9),
    this.getAllDaysInMonth(new Date().getFullYear(),10),
    this.getAllDaysInMonth(new Date().getFullYear(),11)
  ]

  firstPos: number=1;
  month: number = new Date().getMonth();

  constructor(public route: ActivatedRoute , public cdrf: ChangeDetectorRef) {


    for(let i=0; i<12; i++) {
      let curr=1;
      for(let a=0; a<42; a++) {

        if(a>=this.temporaryArray[i][0].getDay() && curr <= this.temporaryArray[i].length){
          this.lists[i].Dates.push(curr);
          curr++;
        }
        else{
          this.lists[i].Dates.push(null);
        }
      }
    }

  }

  ngOnInit(): void {


    this.route.params.subscribe(({id}) => {
      console.log("params=",id);
      this.month=id-1;

      this.firstPos = this.temporaryArray[this.month][0].getDay();

      // console.log(this.month);
      console.log(this.month ," month ",this.lists[this.month]);

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


  getDay(number: number) {
    return this.lists[number-1].getDay();
  }

}
