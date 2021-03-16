import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MustMatch } from './must-match.validator';
import { FunctionService } from "src/app/services/function.service";
import Swal from 'sweetalert2'
import { HttpService } from 'src/app/services/http.service';
import { VariableService } from 'src/app/services/variable.service';

import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { TranslateService } from '@ngx-translate/core';
@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false;
  public showHidePass = true;
  public showHideConfirmPass = true;
  public currPass = true
  constructor(private formBuilder: FormBuilder, public func: FunctionService, public service: HttpService,
    private toastr: ToastrService,
    public translate: TranslateService,
    private router: Router,
    public variable: VariableService

  ) {
    translate.setDefaultLang('en');
  }

  useLanguage(language: string) {
    this.translate.use(language);
  }
  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({

      currentPass: ['', [Validators.required, Validators.minLength(6)]],
      newPass: ['', [Validators.required, Validators.minLength(6)]],
      conformPass: ['', [Validators.required, Validators.minLength(6)]],

    }, {
      validator: MustMatch('newPass', 'conformPass')
    })
    this.func.setBack();

  }

  get f() { return this.registerForm.controls; }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.registerForm.invalid) {
      return;
    }

    // display form values on success
    Swal.fire({
      title: 'Are you sure want to change password?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes'
    }).then((result) => {
      if (result.isConfirmed) {
        this.service.post('/user/changeCustomerPass/' + localStorage.getItem('userId'), this.registerForm.value)
          .subscribe(res => {
            if (res['status'] == 1) {
              this.toastr.success(res['msg'])
              this.variable.login = true;
              this.variable.logout = false;
              localStorage.clear();
              this.router.navigateByUrl('/dashboard', { skipLocationChange: true }).then(() => this.router.navigate(["login"]));
            } else {
              this.toastr.warning(res['msg'])
            }
          })

      }
    })
  }

  onReset() {
    this.submitted = false;
    this.registerForm.reset();
  }
  showHideChangePaswrd() {
    this.showHidePass = this.showHidePass === false;
  }
  showHideConfirm() {
    this.showHideConfirmPass = this.showHideConfirmPass === false;
  }
  showcurrPass() {
    this.currPass = this.currPass === false;
  }
}
