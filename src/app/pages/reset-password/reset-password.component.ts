import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpService } from 'src/app/services/http.service';
import { ValidationsService } from 'src/app/services/validations.service';
import { ToastrService } from 'ngx-toastr';
import { VariableService } from "./../../services/variable.service";

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {
  public showHideBtn = true;
  public showHideConBtn = true;
  public submitted: boolean;
  public resetPassword: FormGroup
  public key;
  constructor(
    private fb: FormBuilder,
    private router: Router,
    public service: HttpService,
    public validation: ValidationsService,
    private toastr: ToastrService,
    private route: ActivatedRoute,
    public variable: VariableService) {
    this.key = route.snapshot.params['key'];
  }
  ngOnInit() {
    console.log("===========>>>>", this.key);
    if(localStorage.getItem('userId') != null){
            this.router.navigate(['dashboard'])
    }
    this.createForm();
  }

  createForm() {
    this.resetPassword = this.fb.group({
      password: ['', this.validation.password_validator],
      conformPass: ['', this.validation.password_validator],
    }, { validator: this.MustMatch('password', 'conformPass') });
  }
  MustMatch(controlName: string, matchingControlName: string) {
    return (formGroup: FormGroup) => {
      const control = formGroup.controls[controlName];
      const matchingControl = formGroup.controls[matchingControlName];

      if (matchingControl.errors && !matchingControl.errors.mustMatch) {
        // return if another validator has already found an error on the matchingControl
        return;
      }

      // set error on matchingControl if validation fails
      if (control.value !== matchingControl.value) {
        matchingControl.setErrors({ mustMatch: true });
      } else {
        matchingControl.setErrors(null);
      }
    }
  }
  resetPass() {
    this.submitted = true;
    if (this.resetPassword.invalid) {
      return;
    }
    this.submitted = false;
    this.service.post("/user/resetPassword", { password: this.resetPassword.value.password, verify_key: this.key })
      .subscribe((res) => {
        if (res['status'] == true) {
          this.toastr.success(res['msg']);
          this.variable.login = true;
          this.variable.logout = false;
          localStorage.clear();
          this.router.navigate(['/login']);
        } else {
          this.toastr.warning(res['msg']);
        }
      })
  }
  showHidePassword() {
    this.showHideBtn = this.showHideBtn === false;
  }

  showHideConPassword() {
    this.showHideConBtn = this.showHideConBtn === false;
  }

}

