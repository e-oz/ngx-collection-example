import { inject, Injectable } from '@angular/core';
import { ComponentStore } from '@ngrx/component-store';
import { PaintingsService } from '../api/paintings.service';
import { PaintingsCollection } from '../collections/paintings.collection';
import { switchMap, mergeMap, timer } from 'rxjs';
import { Painting } from '../models/painting';

export interface PaintingsListState {
  // in the real app, you will have some fields here
  // but in this example I don't want to distract you
  // by adding unnecessary lines of code
}

// It could be implemented without usage of `ComponentStore` at all (just regular `.subscribe()`),
// But I want to promote this best practice - move out of your component as many business logic as possible,
// and move it to the Store. ComponentStore in this case.

// ... also, resulting code without ComponentStore is more wordy,
// if you care about unsubscribing on "destroy" event ;)

@Injectable()
export class PaintingsListStore extends ComponentStore<PaintingsListState> {
  readonly collection = inject(PaintingsCollection);

  constructor(private readonly api: PaintingsService) {
    super({});
    this.load();
  }

  private readonly load = this.effect((_) =>
    _.pipe(
      switchMap(() =>
        this.collection.read({
          request: this.api.getPaintings(),
        })
      )
    )
  );

  readonly rate = this.effect<{ painting: Painting; rate: number }>((_) =>
    _.pipe(
      switchMap(({ painting, rate }) =>
        this.collection.update({
          request: this.api.ratePainting(painting, rate),
          item: painting,
        })
      )
    )
  );

  readonly remove = this.effect<Painting>((_) =>
    _.pipe(
      mergeMap((painting) =>
        this.collection.delete({
          request: timer(1000),
          item: painting,
        })
      )
    )
  );
}
