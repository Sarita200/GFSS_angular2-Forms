import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { group } from 'console';
import { first } from 'rxjs';

@Component({
  selector: 'app-reactive-form',
  imports: [ReactiveFormsModule ,JsonPipe],
  templateUrl: './reactive-form.html',
  styleUrl: './reactive-form.css'
})
export class ReactiveForm {

  studentObj :FormGroup = new FormGroup({
    firstName :new FormControl('',[Validators.required,Validators.minLength(3)]),
    lastName : new FormControl(''),
    city :new FormControl('', [Validators.required , Validators.minLength(3) ]),
    address :new FormControl(''),
    zip :new FormControl('0'),
    isActive :new FormControl(false)
  })

  formValue :any;

  saveForm(){
    this.formValue = this.studentObj.value;
  }

  resetForm(){

  }
}
