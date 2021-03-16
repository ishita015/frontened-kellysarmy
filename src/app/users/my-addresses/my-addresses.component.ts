import { Component, OnInit } from '@angular/core';
import { FunctionService } from "src/app/services/function.service";
import { HttpService } from 'src/app/services/http.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
@Component({
  selector: 'app-my-addresses',
  templateUrl: './my-addresses.component.html',
  styleUrls: ['./my-addresses.component.css']
})
export class MyAddressesComponent implements OnInit {

  constructor(
    public func: FunctionService,
    public service: HttpService,
    private router: Router,
    private formBuilder: FormBuilder,
    public translate: TranslateService

  ) {
    translate.setDefaultLang('en');
  }

  useLanguage(language: string) {
    this.translate.use(language);
  }
  registerForm = this.formBuilder.group({
    my_home: [''],
    my_secondary_home: [''],
    office: [''],
    other: [''],
  });
  ngOnInit(): void {
    this.func.setBack();
    this.service.post('/api/get-address-user/' + localStorage.getItem('userId'), {})
      .subscribe(res => {
        console.log(res['data'])
        for (var i = 0; i < res['data'].length; ++i) {
          if (res['data'][i].address_title == 'my_home') {
            this.registerForm.patchValue({ my_home: res['data'][i].location })
          }
          if (res['data'][i].address_title == 'my_secondary_home') {
            this.registerForm.patchValue({ my_secondary_home: res['data'][i].location })
          }
          if (res['data'][i].address_title == 'office') {
            this.registerForm.patchValue({ office: res['data'][i].location })
          }
          if (res['data'][i].address_title == 'other') {
            this.registerForm.patchValue({ other: res['data'][i].location })
          }
        }
      })

  }

  addAddress(title, type) {
    console.log(title, type)
    this.router.navigate(["address/" + title])
  }
}
