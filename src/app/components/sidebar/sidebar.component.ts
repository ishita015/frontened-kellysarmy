import { VariableService } from '../../services/variable.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { HttpService } from 'src/app/services/http.service';
import Swal from 'sweetalert2';
import { TranslateService } from '@ngx-translate/core';
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  public userId
  public profileSideBarData;
  public profileData;
  constructor(
    private router: Router,
    public service: HttpService,
    private toastr: ToastrService,
    public translate: TranslateService,
    public variable: VariableService) {
    translate.setDefaultLang('en');
  }

  useLanguage(language: string) {
    localStorage.setItem('language', language);
    this.translate.use(language);
  }
  devparam = '';
  happy_point = 0;
  ngOnInit() {
    this.userId = JSON.parse(localStorage.getItem('userId'));
    // this.profileData = JSON.parse(localStorage.getItem('userData'));
    console.log("user", this.userId);
    this.devparam = this.router.url
    if (this.userId != null) {

      this.service.get('/api/getLoginDetailsBYId/' + localStorage.getItem('userId'))
        .subscribe(res => {

          if (res['data'].length > 0) {
            if (res['data'][0].user_status == 1) {
              this.profileData = res['data'][0]
              this.happy_point = res['data'][0].happy_points;
            } else {
              this.Logout1()
            }
          } else {
            this.Logout1()
          }

        })
    }

  }

  Logout1() {

    this.toastr.success('Logout successfully.')
    this.variable.login = true;
    this.variable.logout = false;
    this.variable.user_type = null;
    localStorage.clear();
    this.router.navigateByUrl('/dashboard', { skipLocationChange: true }).then(() => this.router.navigate(["login"]));
    // this.router.navigate(['/login']);
  }
  Logout() {
    var languageLogout = localStorage.getItem("language")
    var title
    var btn_yes
    var btn_cancel;
    if (languageLogout == "en") {
      title = 'Are you sure want to logout?'
      btn_yes = 'Yes'
      btn_cancel = 'Cancel'
    } else {
      title = 'Tem certeza de que deseja sair?'
      btn_yes = 'Sim'
      btn_cancel = 'Cancelar'
    }
    Swal.fire({
      title: title,
      icon: 'warning',
      showCancelButton: btn_cancel,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: btn_yes
    }).then((result) => {
      if (result.isConfirmed) {
        this.toastr.success('Logout successfully.')
        this.variable.login = true;
        this.variable.logout = false;
        this.variable.user_type = null;
        localStorage.clear();
        this.router.navigateByUrl('/dashboard', { skipLocationChange: true }).then(() => this.router.navigate(["login"]));
      }
    })
  }
}
