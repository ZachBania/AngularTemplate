import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'tableFilter'
})
export class TableFilterPipe implements PipeTransform {

  transform(list: any[], filters: Object) {
    const keys       = Object.keys(filters).filter(key => filters[key]);
    const filterTask = task => keys.every(key => task[key] === filters[key]);

    return keys.length ? list.filter(filterTask) : list;
  }

}