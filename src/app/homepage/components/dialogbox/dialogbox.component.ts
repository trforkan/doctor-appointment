import { HomeComponent } from './../home/home.component';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { timeInterval } from 'rxjs';
// import { AmazingTimePickerService } from 'amazing-time-picker';

@Component({
  selector: 'app-dialogbox',
  templateUrl: './dialogbox.component.html',
  styleUrls: ['./dialogbox.component.scss']
})
export class DialogboxComponent implements OnInit {

  // @Output() public closeDialogbox = new EventEmitter<boolean>();

  sex = "Male";

  appointment = new FormGroup ({
    firstName: new FormControl(""),
    lastName: new FormControl(""),
    email: new FormControl(""),
    age: new FormControl(""),
    gender: new FormControl(""),
    date: new FormControl(Date),
    time: new FormControl(null)
  });



  constructor() { }

  ngOnInit(): void {
  }

  display() {
    console.log(this.appointment.value);
    alert("request successful");
  }

  // emitData() {
  //   console.log("tapped");
  //   this.closeDialogbox.emit(false);

  // }

}
