import { Component, OnInit } from '@angular/core';
import { person } from './person.model';

@Component({
  selector: 'app-template-driven-form',
  templateUrl: './template-driven-form.component.html',
  styleUrls: ['./template-driven-form.component.css']
})
export class TemplateDrivenFormComponent implements OnInit {

  person : person;

  constructor() { }

  ngOnInit(): void {
    this.person = new person ("", 34);
  }

  submitForm(formValue){
    console.log("Template Driven Form Data : ", formValue);

    console.log("Person ", this.person);
  }

}
