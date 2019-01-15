import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  @ViewChild('f') signupForm: NgForm;
  defaultQuestion = 'pet';
  // defaultQuestion = 'teacher';
  answer = '';
  genders = ['male', 'female'];

  suggestUserName() {
    const suggestedName = 'Superuser';

    /* To set the value of the all form */
    // this.signupForm.setValue({
    //   userData: {
    //     username: suggestedName,
    //     email: ''
    //   },
    //   secret: 'pet',
    //   questionAnswer: '',
    //   gender: 'male'
    // });

    /*  */
    this.signupForm.form.patchValue({
      userData: {
        username: suggestedName
      }
    });
  }

  // onSubmit(form: HTMLFormElement) {
  //   console.log('Submitted!', form);
  // }

  // will return this
  // <form _ngcontent-c0="" novalidate="" class="ng-valid ng-dirty ng-touched">...</form>

  // onSubmit(form: NgForm) {
  //   console.log('Submitted!', form);
  // }
  // Will return this
  // NgForm {submitted: true, _directives: Array(3), ngSubmit: EventEmitter, form: FormGroup}

  // where we can get the values of the form
  //   value: Object
  //     email: "mail value"
  //     secret: "teacher"
  //     username: "name value"
  //

  onSubmit() {
    console.log('Submitted!', this.signupForm);
  }

}
