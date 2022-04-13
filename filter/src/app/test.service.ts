import { Injectable } from '@angular/core';
export const people = [
  { name: "Alice", age: 18 },
  { name: "Mike", age: 52 },
  { name: "Allysa", age: 20 },
  { name: "Ben", age: 60 },
  { name: "Eric", age: 23 }
]

@Injectable({
  providedIn: 'root'
})
export class TestService {

  constructor() { }
}
