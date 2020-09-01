import { Pipe, PipeTransform } from '@angular/core';
import { DatePipe } from '@angular/common';
@Pipe({
  name: 'formatDate'
})
export class FormatDatePipe implements PipeTransform {

  transform(value: string) {
    var datePipe = new DatePipe("en-US");
     value = datePipe.transform(value, 'dd/MM/yyyy');
     var dt = new Date(value);
     if(dt.getDay()==6 || dt.getDay() ==0)
     return "#008000";
     else
     return "#abc";
 }

}
