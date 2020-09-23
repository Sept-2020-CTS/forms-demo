import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-model-driven-form',
  templateUrl: './model-driven-form.component.html',
  styleUrls: ['./model-driven-form.component.css']
})
export class ModelDrivenFormComponent implements OnInit {

  complexForm: FormGroup;


  constructor(formBuider: FormBuilder) {
    this.complexForm = formBuider.group({
      name: new FormControl(null, [
        Validators.required,
        Validators.maxLength(10)
      ]),
      age: new FormControl(null, [
        Validators.required,
        this.ageRangeValidator
      ])
    });
  }

  ngOnInit(): void {
  }

  submitForm(data) {
    console.log("Reactive Form data : ", data);
    console.log("Reactive Component data : ", this.complexForm.value);
  }

  ageRangeValidator(control: AbstractControl): { [key: string]: boolean } | null {

    if (control.value !== undefined && (control.value < 18 || control.value > 40)) {
      return { 'ageRangeOutOfBound': true };
    }
    return null;

  }

  get name() { return this.complexForm.get("name"); }

  get age() { return this.complexForm.get("age"); }
}
