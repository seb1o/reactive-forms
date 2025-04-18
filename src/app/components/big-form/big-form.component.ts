import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';


@Component({
  selector: 'app-big-form',
  imports: [ReactiveFormsModule],
  templateUrl: './big-form.component.html',
  styleUrl: './big-form.component.scss'
})
export class BigFormComponent {

   myForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    surname: new FormControl('',  [Validators.required, Validators.minLength(3)]),
    email: new  FormControl('',  [Validators.required, Validators.email]),
    dateOfBirth: new FormControl(),
    placeOfBirth: new FormControl(''),
    residence: new FormControl('', [Validators.required]),
    
   })
   
   submitForm() {
    if(this.myForm.valid){
      console.log(this.myForm.value)
    }else{
      console.log('accidenti');
      
    }
    
    }
}
