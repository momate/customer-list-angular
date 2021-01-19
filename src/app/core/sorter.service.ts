import { Injectable } from '@angular/core';

@Injectable()
export class SorterService {
 
  constructor() { }

  direction : number = 1;
  property: string = null;

  sort(collection: any[], prop: any){

    this.property = prop;
    this.direction = (this.property === prop) ? this.direction * -1 : 1;

    collection.sort((a: any, b: any) => {

      let aVal = a[prop];
      let bVal = b[prop];

      if(aVal === bVal){
        return 0;
      }else if (aVal > bVal){
        return this.direction * -1;
      }else {
        return this.direction * 1;
     }
        
    });
    
  }
}
