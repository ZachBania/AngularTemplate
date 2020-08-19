import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class DropdownFilterPipe implements PipeTransform {

  transform(list: any[], filters: Object) {
    const keys       = Object.keys(filters).filter(key => filters[key]);
    const filterObject = object => keys.every(key => object[key] === filters[key]);
    console.log(filterObject);
    return keys.length ? list.filter(filterObject) : list;
  }
 
}