// modal.service.ts

import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ModalService {
    private modalSubject = new BehaviorSubject<boolean>(false);
    modal$ = this.modalSubject.asObservable();
  
    setModal(value: boolean): void {
      this.modalSubject.next(value);
    }
}
