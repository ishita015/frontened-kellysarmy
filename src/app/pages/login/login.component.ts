import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpService } from 'src/app/services/http.service';
import { ValidationsService } from 'src/app/services/validations.service';
import { ToastrService } from 'ngx-toastr';
import { VariableService } from "./../../services/variable.service";
import Swal from 'sweetalert2';
import { TranslateService } from '@ngx-translate/core';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  signinForm: FormGroup;
  public log_Obj;
  public log_Msg;
  submitted: boolean;
  public showHideBtn = true;
  status_Obj
  constructor(private fb: FormBuilder,
    private router: Router,
    public service: HttpService,
    public validation: ValidationsService,
    private toastr: ToastrService,
    public translate: TranslateService,
    public variable: VariableService) {
    translate.setDefaultLang('en');
  }

  useLanguage(language: string) {
    this.translate.use(language);
  }


  ngOnInit() {
    this.createForm();
    if (localStorage.getItem('userId') != null) {
      if (localStorage.getItem('user_type') == '1') {
        this.router.navigate(['dashboard'])
      } else {
        this.router.navigate(['service-providers/service-profile'])
      }
    }
  }

  /*========== Slider Section Start Here========*/
  customOptions: any = {
    loop: true,
    mouseDrag: true,
    touchDrag: false,
    pullDrag: false,
    dots: true,
    navSpeed: 700,
    margin: 24,
    items: 3,
    dotsContainer: '.testimonial-pagination',
    navText: ['', ''],
    responsive: {
      1024: {
        items: 3,
      },
      768: {
        items: 2,
      },
      320: {
        items: 1,
      },
    },
  }
  /*========== Slider Section End Here========*/

  /*========== Form Value Start Here========*/
  createForm() {
    this.signinForm = this.fb.group({
      email: ['', this.validation.email_validator],
      password: ['', this.validation.password_validator],
    });
  }
  /*========== Form Value End Here========*/

  /*==========Login Add Api Start Here========*/
  signin() {
    console.log("form value", this.signinForm.value);
    this.submitted = true;
    if (this.signinForm.invalid) {
      return;
    }
    this.submitted = false;
    this.service.getUserLogin(this.signinForm.value)
      .subscribe(res => {
        if (res['data'].length > 0) {

          if (res['data'][0].user_status == 2) {
            this.toastr.warning('Your account is disabled by Admin.')
            return false;
          }
        }
        this.log_Msg = res
        if (this.log_Msg.status === 1) {
          this.variable.user_type = res['data'][0].user_type;
          this.log_Obj = res.data[0];
          this.status_Obj = res;
          localStorage.setItem('userData', JSON.stringify(this.log_Obj));
          if (this.log_Obj.user_delete == 2) {
            Swal.fire({
              title: 'You have deactivated your account. Please click confirm button if you wants to activate your account!!',
              icon: 'warning',
              showCancelButton: true,
              confirmButtonColor: '#3085d6',
              cancelButtonColor: '#d33',
              confirmButtonText: 'Conform',
            }).then((result) => {
              if (result.isConfirmed) {
                this.service.get('/user/activateAccount/' + this.log_Obj.id)
                  .subscribe(res => {


                    if (res['status'] == 1) {
                      this.variable.logout = true;
                      this.variable.login = false;
                      localStorage.setItem('userId', JSON.stringify(this.log_Obj.id));
                      localStorage.setItem('user_type', JSON.stringify(this.log_Obj.user_type));
                      if (this.log_Obj.user_type == 1) {
                        this.router.navigateByUrl('/login', { skipLocationChange: true }).then(() => this.router.navigate(["dashboard"]));
                      }
                      this.toastr.success(res['msg']);
                      this.toastr.success('Login successfully!!');
                    } else {
                      this.toastr.warning(res['msg']);
                    }
                  })
              }
            })

          } else {
            if (this.log_Obj.user_status == 4) {
              this.toastr.warning('Please wait for account approval by Admin');
              return
            } else {
              this.variable.logout = true;
              this.variable.login = false;
              if (this.signinForm.value.email === this.log_Obj.email || this.signinForm.value.password === this.log_Obj.password) {
                localStorage.setItem('userId', JSON.stringify(this.log_Obj.id));
                localStorage.setItem('user_type', JSON.stringify(this.log_Obj.user_type));
                this.variable.user_type = this.log_Obj.user_type;
                if (this.log_Obj.user_status == 1 && this.log_Obj.user_type == 1) {
                  this.toastr.success(this.log_Msg.msg, '', { timeOut: 2000 });
                  // location.reload();
                  this.router.navigateByUrl('/login', { skipLocationChange: true }).then(() => this.router.navigate(["dashboard"]));

                  // this.router.navigate(['/dashboard']);
                }
                else if (this.log_Obj.user_status == 1 && this.log_Obj.user_type == 2) {
                  localStorage.setItem('BasicInfo', JSON.stringify(this.log_Obj));
                  this.toastr.success(this.log_Msg.msg, '', { timeOut: 2000 });
                  // location.reload();
                  // this.router.navigate(['/service-providers/service-profile']);
                  this.router.navigateByUrl('/login', { skipLocationChange: true }).then(() => this.router.navigate(["service-providers/service-profile"]));

                }
                else {
                  this.toastr.error("Please verify your account", '', { timeOut: 2000 });
                  this.variable.login = true;
                  localStorage.clear();

                  this.router.navigate(['/login']);
                }

              }
            }
          }
        }

        else {
          this.variable.logout = false;
          this.variable.login = true;
          if (this.log_Msg.status === 0) {
            this.toastr.error(this.log_Msg.msg, '', { timeOut: 2000 });
            this.router.navigate(['/login']);
          }
        }
      });
  }
  /*==========Login Add Api End Here========*/

  /*==========Password Show/Hide Function Start Here========*/
  showHidePassword() {
    this.showHideBtn = this.showHideBtn === false;
  }
  /*==========Password Show/Hide Function End Here========*/


}
