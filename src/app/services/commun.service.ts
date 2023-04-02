import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommunService {
    showSideBar = new Subject<boolean>();

  constructor() { }
}
