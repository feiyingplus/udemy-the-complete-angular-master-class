import { Component } from '@angular/core';
// 92
// 93 add Validators
import { FormControl, FormGroup, Validators } from '@angular/forms'
import { UsernameValidators } from './username.validators';

@Component({
  selector: 'signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent {
  // 92
  form = new FormGroup({
    // 93 
    // 100
    'account': new FormGroup({
      'username': new FormControl('', [
        Validators.required,
        Validators.minLength(3),
        UsernameValidators.cannotContainSpace
        // 97
      ], UsernameValidators.shouldBeUnique),
      'password': new FormControl('', Validators.required)
    })
  });

  login() {
      this.form.setErrors({
        invalidLogin: true
      })
    }

  get username_field() {
    return this.form.get('account.username');
  }
}
