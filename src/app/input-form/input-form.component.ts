import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { InputFormValue } from '../type/input-form';
import { StateServiceService } from '../service/state-service.service';

@Component({
  selector: 'poc-input-form',
  templateUrl: './input-form.component.html',
  styleUrls: ['./input-form.component.css'],
})
export class InputFormComponent implements OnInit {

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private stateService: StateServiceService
  ) {}

  inputForm: FormGroup = this.formBuilder.group({});

  ngOnInit(): void {
    this.stateService.getInputValue().subscribe((inputValue) => {
      this.inputForm = this.formBuilder.group({
        name: [inputValue.name, [Validators.required]],
        birthday: [
          inputValue.birthday,
          [Validators.pattern('[0-9]{8}')],
        ],
        hobby: [inputValue.hobby, [Validators.maxLength(15)]],
      });
    });
  }

  save() {
    if (this.inputForm.invalid) {
      return;
    }
    this.stateService.commitInputValue(this.inputForm.value);
    this.router.navigate(['reference']);
  }

}
