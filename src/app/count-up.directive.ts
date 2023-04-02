import { Directive, Input } from '@angular/core';
import { combineLatest } from 'rxjs';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { interval } from 'rxjs/internal/observable/interval';

import { distinctUntilChanged } from 'rxjs/internal/operators/distinctUntilChanged';
import { endWith } from 'rxjs/internal/operators/endWith';
import { map } from 'rxjs/internal/operators/map';
import { switchMap } from 'rxjs/internal/operators/switchMap';
import { takeWhile } from 'rxjs/internal/operators/takeWhile';
import { animationFrameScheduler } from 'rxjs/internal/scheduler/animationFrame';

@Directive({
  selector: '[appCountUp]'
})
export class CountUpDirective {
  private readonly count$ = new BehaviorSubject(0);
  // default duration value is 2000 ms
  private readonly duration$ = new BehaviorSubject(2000);


  @Input('countUp') // input name is the same as selector name
  set count(count: number) {
    this.count$.next(count);
  }

  @Input()
  set duration(duration: number) {
    this.duration$.next(duration)
  }

 
  



}
