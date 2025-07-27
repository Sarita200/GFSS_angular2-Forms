import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-template-form',
  imports: [FormsModule,JsonPipe],
  templateUrl: './template-form.html',
  styleUrl: './template-form.css'
})
export class TemplateForm {
  studentObj :any ={
    firstName :"",
    lastName :"",
    address :"",
    zip : "",
    city :"",
    isAccept :false
  }

  formValue :any;

  saveForm(){
    debugger
    this.formValue =this.studentObj ;
  }

  resetForm(){
    this.studentObj ={
    firstName :"",
    lastName :"",
    address :"",
    zip : "",
    city :"",
    isAccept :false
  }
  }
}
