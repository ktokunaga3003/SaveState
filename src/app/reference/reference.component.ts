import { Component, OnInit } from '@angular/core';
import { StateServiceService } from '../service/state-service.service';
import { InputFormValue } from '../type/input-form';

@Component({
  selector: 'poc-reference',
  templateUrl: './reference.component.html',
  styleUrls: ['./reference.component.css'],
  providers: [StateServiceService],
})
export class ReferenceComponent implements OnInit {
  inputValue: Partial<InputFormValue> = {
    name: '',
    birthday: '',
    hobby: '',
  };

  constructor(private stateService: StateServiceService) {}

  ngOnInit(): void {
    this.stateService.getInputValue().subscribe((inputValue) => {
      console.log('値をゲット！', inputValue)
      this.inputValue = inputValue;
    });
  }
}
