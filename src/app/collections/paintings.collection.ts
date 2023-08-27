import { Injectable } from '@angular/core';
import { Collection } from 'ngx-collection';
import { Painting } from '../models/painting';

@Injectable({ providedIn: 'root' })
export class PaintingsCollection extends Collection<Painting> {
  constructor() {
    super({ comparatorFields: ['url'] });
  }
}
