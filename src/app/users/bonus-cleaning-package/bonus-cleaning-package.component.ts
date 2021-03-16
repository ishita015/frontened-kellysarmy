import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ValidationsService } from 'src/app/services/validations.service';
import { ToastrService } from 'ngx-toastr';
import { FunctionService } from "../../services/function.service";
import { Router, Route, ActivatedRoute } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
@Component({
  selector: 'app-bonus-cleaning-package',
  templateUrl: './bonus-cleaning-package.component.html',
  styleUrls: ['./bonus-cleaning-package.component.css']
})
export class BonusCleaningPackageComponent implements OnInit {
  public id;
  public submitted = false;
  public response
  totalPoints

  user_type = localStorage.getItem('user_type')
  activateForm: FormGroup;
  constructor(
    private service: HttpService,
    private validation: ValidationsService,
    private fb: FormBuilder,
    public func: FunctionService,
    private toastr: ToastrService,
    public translate: TranslateService,
    private router: Router,
  ) {
    translate.setDefaultLang('en');
  }
  useLanguage(language: string) {
    this.translate.use(language);
  }
  UserData
  ngOnInit(): void {
    this.id = localStorage.getItem("userId");
    this.createForm();
    this.getUSerDetails();
    this.func.setBack();
    this.service.get('/api/getLoginDetailsBYId/' + localStorage.getItem('userId'))
      .subscribe(res => {

        if (res['data'].length > 0) {
          if (res['data'][0].user_status == 1) {
            this.UserData = res['data'][0];
          }
        }
      })
  }
  getUSerDetails() {
    this.service.get("/user/getUserPoints/" + localStorage.getItem('userId')).subscribe(res => {
      this.totalPoints = res['data']
    })
  }
  createForm() {
    this.activateForm = this.fb.group({
      code: ['', this.validation.onlyRequired_validator],
    });
  }
  f() { return this.activateForm.controls; }
  activeteCode() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.activateForm.invalid) {
      return;
    }
    let data = {
      user_id: this.id,
      code: this.activateForm.value.code
    }
    this.service.post("/user/activateCode", data).subscribe(res => {
      // this.response = res;  	
      if (res['status']) {
        this.toastr.success(res['msg']);
      } else {
        this.toastr.error(res['msg']);
      }
      this.router.navigateByUrl('/login', { skipLocationChange: true }).then(() => {
        this.router.navigate(['bonus-cleaning']);

      });
    });
  }


  onReset() {
    this.submitted = false;
    this.activateForm.reset();
  }
}
