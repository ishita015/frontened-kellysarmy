import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { VariableService } from "./../../services/variable.service";
import Swal from 'sweetalert2'

import { TranslateService } from '@ngx-translate/core';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  userId = localStorage.getItem('userId');
  languageType = localStorage.getItem('language');
  user_type;
  language;
  constructor(private router: Router,
    public variable: VariableService,
    public translate: TranslateService) {
    translate.setDefaultLang('en');
  }

  useLanguage(language: string) {
    Swal.fire({
      title: 'Are you sure want to change language?',
      text: 'Website will reload',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes'
    }).then((result) => {

      console.log('-------', result.isConfirmed)
      if (result.isConfirmed == true) {


        localStorage.setItem('language', language);
        this.translate.use(language);
        // if(language =='pt'){
        //   document.getElementById('PRID').click()
        // }else{
        // document.getElementById('ENNID').click()
        // }

        window.location.reload();
        // this.router.navigateByUrl('/login', { skipLocationChange: true }).then(() => {
        //   this.router.navigate(['/login']);
        // });
      }
    })
  }
  ngOnInit() {
    if (this.languageType == null) {
      this.languageType = 'en'
    }


    if (localStorage.getItem('language') == null) {
      this.translate.use('en');
      // this.useLanguage('en');
    } else {
      this.translate.use(localStorage.getItem('language'));
    }



    this.user_type = localStorage.getItem('user_type');
    if (this.variable.user_type == undefined) {
      this.variable.user_type = this.user_type
    }

    if (localStorage.getItem('userId') != null) {
      this.variable.login = false;
      this.variable.user_type = this.user_type
    }
  }

  Logout() {
    this.variable.login = true;
    this.variable.logout = false;
    localStorage.removeItem('userId');
    localStorage.removeItem('BasicInfo');
    localStorage.removeItem('userData');
    this.router.navigate(['/login']);
  }
  changeLink(idd) {
    var data = document.getElementsByClassName('nav-item');
    for (var i = 0; i < data.length; ++i) {
      data[i].classList.remove('active')
    }
    if (document.getElementById(idd) != null) {

      document.getElementById(idd).classList.add('active')
    }
  }


}
