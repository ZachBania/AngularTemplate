import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
}) 

export class FormComponent implements OnInit {
  
  form: FormGroup;
  user: any;
  message: string;
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() { 
      this.user = {
          name: 'name',
          email: 'email',
          phone: 'phone'
      };

      this.form = this.formBuilder.group({
          name: [this.user.name, Validators.required ],
          email: [this.user.email, Validators.required ],
          phone: [this.user.phone, Validators.required ]
      });
    }

  onSubmit(form: FormGroup) {
      this.message = 'Thank you ' + form.controls.name.value;
  }

}
