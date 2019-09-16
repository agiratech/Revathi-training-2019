import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  // transform(value: any, filterString : string, propName : string):any {
  //   if(value.lenght == 0 || filterString === ""){
  //     return value;
  //   }
  //   const resultArray = [];
  //   for ( const item of value){
  //     if(item[propName] === filterString){
  //       resultArray.push(item);
  //     }
  //   }
  //   return resultArray;
  // }

  transform(items: any[], value: string, label:string): any[] {
    if (!items) return [];
    if (!value) return  items;
    if (value == '' || value == null) return [];
    return items.filter(e => e[label].toLowerCase().indexOf(value) > -1 );
    
  }

}

