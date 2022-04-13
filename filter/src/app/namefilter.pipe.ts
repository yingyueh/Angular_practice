import { Pipe, PipeTransform } from '@angular/core';


export interface People{
  name: string;
  age: number;
  height?:number;
}

@Pipe({
  name: 'namefilter'
})
export class NamefilterPipe implements PipeTransform {

   tet:People={
    name:'test',
    age:18
  }

  transform(peopleList: any, searchText: any) {
  // transform(peopleList: People[], searchText: any) {
    if (searchText) {
      if (searchText) {
        return peopleList.filter((p: any) => p.name.toLowerCase().includes(searchText.toLowerCase()))
      } else {
        return peopleList
      }
    }
  }
}
