import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { InputFormValue } from '../type/input-form';
import { StateServiceService } from '../service/state-service.service';

@Component({
  selector: 'poc-input-form',
  templateUrl: './input-form.component.html',
  styleUrls: ['./input-form.component.css'],
  providers: [StateServiceService]
})
export class InputFormComponent implements OnInit {
  inputFormValue: InputFormValue = {
    name: '',
    birthday: '',
    hobby: '',
  };

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private stateService: StateServiceService
  ) {}

  inputForm: FormGroup = this.formBuilder.group({});

  ngOnInit(): void {
    this.inputForm = this.formBuilder.group({
      name: [this.inputFormValue.name, [Validators.required]],
      birthday: [this.inputFormValue.birthday, [Validators.pattern('d{8}')]],
      hobby: [this.inputFormValue.hobby, [Validators.maxLength(15)]],
    });
  }

  save() {
    console.log('この値を保存！', this.inputForm.value)
    this.stateService.commitInputValue(this.inputForm.value)
    console.log('保存した値を確認！',this.stateService.getInputValue())
    this.router.navigate(['reference']);
  }
}
