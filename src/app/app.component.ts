import {AfterViewInit, Component, ElementRef, OnInit  } from '@angular/core';
import { DatepickerOptions } from 'ng2-datepicker';
import * as frLocale from 'date-fns/locale/fr';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit  {
  public date: any;
  public day: number;
  public hoursAm: Array<number> = [0,1,2,3,4,5,6,7,8,9,10,11];
  public hoursPm: Array<number> = [12,1,2,3,4,5,6,7,8,9,10,11];
  public currentHour: number 
  public model: boolean = false;
  public modelTime: Array<any> = ['1.00 a.m','1.30 a.m','2.00 a.m','2.30 a.m','3.00 a.m','3.30 a.m','4.00 a.m','4.30 a.m','5.00 a.m','5.30 a.m'];

  
  constructor(private elementRef:ElementRef) { 
   this.date = new Date(Date.now());
   this.getDate(this.date);
  }

  ngOnInit() {
	    
  }
  
  options: DatepickerOptions = {
  minYear: 1970,
  maxYear: 2030,
  displayFormat: 'MM/DD/YYYY',
  barTitleFormat: 'MM/DD/YYYY',
  dayNamesFormat: 'dd',
  firstCalendarDay: 0, // 0 - Sunday, 1 - Monday
  locale: frLocale,
  minDate: new Date(Date.now()), // Minimal selectable date
  maxDate: new Date(Date.now()),  // Maximal selectable date
  barTitleIfEmpty: 'Click to select a date',
  placeholder: 'Click to select a date', // HTML input placeholder attribute (default: '')
  addClass: 'form-control', // Optional, value to pass on to [ngClass] on the input field
  addStyle: {}, // Optional, value to pass to [ngStyle] on the input field
  fieldId: 'my-date-picker', // ID to assign to the input field. Defaults to datepicker-<counter>
  useEmptyBarTitle: false, // Defaults to true. If set to false then barTitleIfEmpty will be disregarded and a date will always be shown 
};


getDate(d: any){
	this.date = d;
	if(this.date.getDate() != this.day){
	this.day = this.date.getDate();
	this.currentHour = new Date().getHours();
	} 
	//console.log(this.date.getDate());
}

ngAfterViewInit() {
	//this.populate();
  //this.elementRef.nativeElement.querySelector('.ngx-datepicker-input').addEventListener('click', this.getDate.bind(this));
}

openModel(){
	//this.populate();
	this.model = true;
	
}

closeModel(){
	this.model = false;
}

populate() {
    //var select = $(selector);
    var hours, minutes, ampm;
    for(var i = 0; i <= 23; i += 30){
        hours = Math.floor(i / 60);
        minutes = i % 60;
        if (minutes < 10){
            minutes = '0' + minutes; // adding leading zero
        }
        ampm = hours % 24 < 12 ? 'AM' : 'PM';
        hours = hours % 12;
        if (hours === 0){
            hours = 12;
        }
		
		//this.modelTime.push(hours + ':' + minutes + ' ' + ampm);
		console.log(hours + ':' + minutes + ' ' + ampm);
		
        /* select.append($('<option></option>')
            .attr('value', i)
            .text(hours + ':' + minutes + ' ' + ampm)); */ 
    }
}
}
