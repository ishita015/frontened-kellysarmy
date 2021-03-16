import { Component, OnInit } from '@angular/core';
import { ValidationsService } from 'src/app/services/validations.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpService } from 'src/app/services/http.service';
import { ToastrService } from 'ngx-toastr';
import { Router, ActivatedRoute } from '@angular/router';

import { TranslateService } from '@ngx-translate/core';
@Component({
  selector: 'app-send-mail-reset-password',
  templateUrl: './send-mail-reset-password.component.html',
  styleUrls: ['./send-mail-reset-password.component.css']
})
export class SendMailResetPasswordComponent implements OnInit {
  submitted: boolean;
  forgotPassword: FormGroup
  constructor(
    public validation: ValidationsService,
    private fb: FormBuilder,
    private service: HttpService,
    private toastr: ToastrService,
    private router: Router,
    public translate: TranslateService
  ) {
    translate.setDefaultLang('en');
  }

  useLanguage(language: string) {
    this.translate.use(language);
  }

  ngOnInit() {
    if (localStorage.getItem('userId') != null) {
      this.router.navigate(['dashboard'])
    }
    this.createForm();
  }
  createForm() {
    this.forgotPassword = this.fb.group({
      email: ['', this.validation.email_validator],
    });
  }
  forgotPass() {
    this.submitted = true;
    if (this.forgotPassword.invalid) {
      return;
    }
    this.submitted = false;
    this.service.post("/user/checkEmailExist", { email: this.forgotPassword.value.email }).subscribe((res) => {
      console.log("res==========", res);
      if (res['status'] == true) {
        this.toastr.success(res['msg']);
      } else {
        this.toastr.warning(res['msg']);
      }
    })
  }
}
