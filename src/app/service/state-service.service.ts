import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { InputFormValue } from '../type/input-form';

@Injectable({ providedIn: 'root' })
export class StateServiceService {
  private inputValueState: BehaviorSubject<InputFormValue> | undefined;
  private emptyValue: InputFormValue = {
    name: '',
    birthday: '',
    hobby: '',
  };

  constructor() {}

  commitInputValue(inputValue: InputFormValue) {
    this.inputValueState = new BehaviorSubject(inputValue);
    console.log(this.inputValueState);
    return this.inputValueState.asObservable();
  }

  getInputValue(): Observable<InputFormValue> {
    return this.inputValueState
      ? this.inputValueState?.asObservable()
      : of(this.emptyValue);
  }
}
