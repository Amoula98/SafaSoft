import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LookupsService {
  countries = [ {id: 1 , value: 'ay 7ga 1' }, {id: 2 , value: 'ay 7ga 2' }, {id: 3 , value: 'ay 7ga 3' }, {id: 4 , value: 'ay 7ga 4' }];
  cities = [ {id: 1 , value: 'ay 7ga 1' }, {id: 2 , value: 'ay 7ga 2' }, {id: 3 , value: 'ay 7ga 3' }, {id: 4 , value: 'ay 7ga 4' }];
  constructor() { }
}
