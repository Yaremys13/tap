import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm = this.formBuilder.group({
      userName: '',
      password: ''
    });

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
  }

}
