import {Component} from '@angular/core';

import { NativeDateAdapter, DateAdapter, MD_DATE_FORMATS } from "@angular/material";

export class AppDateAdapter extends NativeDateAdapter {

   format(date: Date, displayFormat: Object): string {
       if (displayFormat == "input") {
           let day = date.getDate();
           let month = date.getMonth() + 1;
           let year = date.getFullYear();
           /*
            * setting format date to YYYY/MM/DD.
            * md-input-container only acept format MM/DD/YYYY and YYYY/MM/DD
            * MM/DD/YYYY is default config value
           */
           return year + '/' + this._to2digit(month) + '/' + this._to2digit(day);
       } else {
           return date.toDateString();
       }
   }

   //show month in format MM, add 0's to the left for months of 1-9
   private _to2digit(n: number) {
       return ('00' + n).slice(-2);
   } 
}

//set custom config for fomart date
export const APP_DATE_FORMATS =
{
   parse: {
      dateInput: {month: 'numeric', year: 'numeric', day: 'numeric'}
   },
   display: {
      dateInput: 'input',
      monthYearLabel: {year: 'numeric', month: 'short'},
      dateA11yLabel: {year: 'numeric', month: 'short', day: ''},
      monthYearA11yLabel: {year: 'numeric', month: 'short'},
   }
}