import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { InputFormValue } from '../type/input-form';

@Injectable()
export class StateServiceService {
  private _inputValue: BehaviorSubject<Partial<InputFormValue>> | undefined;
  private inputValue: Observable<Partial<InputFormValue>> | undefined;
  private emptyValue: InputFormValue = {
    name: '',
    birthday: '',
    hobby: '',
  };

  constructor() {}

  commitInputValue(inputValue: Partial<InputFormValue>) {
    // if (this._inputValue) {
    //   console.log('ここ')
    //   const currentState = this._inputValue.getValue();
    //   this._inputValue.next({ ...currentState, ...inputValue });
    //   return this.inputValue
    // } else {
      console.log('こっち')
      this._inputValue = new BehaviorSubject(inputValue)
      this.inputValue = this._inputValue.asObservable()
      console.log(this.inputValue)
      return this.inputValue
    // }
  }

  getInputValue(): Observable<Partial<InputFormValue>> {
    console.log('_inputValue', this._inputValue)
    console.log('inputValue', this.inputValue);
    return this.inputValue ? this.inputValue : of(this.emptyValue);
  }
}
