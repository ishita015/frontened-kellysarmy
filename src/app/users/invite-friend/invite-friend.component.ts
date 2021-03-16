import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';
import { ToastrService } from 'ngx-toastr';
import { environment } from 'src/environments/environment';
import { FunctionService } from "src/app/services/function.service";
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
@Component({
  selector: 'app-invite-friend',
  templateUrl: './invite-friend.component.html',
  styleUrls: ['./invite-friend.component.css']
})
export class InviteFriendComponent implements OnInit {
  refferUrl = '';
  constructor(private service: HttpService, private router: Router,
    public translate: TranslateService,
    private toastr: ToastrService, public func: FunctionService,) {
    translate.setDefaultLang('en');
  }
  useLanguage(language: string) {
    this.translate.use(language);
  }
  reffer_code = ''
  ngOnInit(): void {
    this.getReffer()
    this.getLoginData()
    this.func.setBack();
  }
  getLoginData() {
    this.service.get('/api/getLoginDetailsBYId/' + localStorage.getItem('userId'))
      .subscribe(res => {
        this.reffer_code = res['data'][0].reffer_code;
        this.refferUrl = environment.signupUrl + '/' + res['data'][0].reffer_code;
      })
  }
  getRefferData = []
  getReffer() {
    this.service.get('/user/getRefferData/' + localStorage.getItem('userId'))
      .subscribe(res => {
        this.getRefferData = res['data']
      })
  }
  selectType(w) {
    console.log('w', w)
    if (w == 1) {
      this.refferUrl = environment.signupUrl + '/' + this.reffer_code
    } else {
      this.refferUrl = environment.signupProviderUrl + '/' + this.reffer_code

    }
    console.log('this.refferUrl', this.refferUrl)

  }
  share() {
    var user_type = 1;
    var email = document.getElementById('email')['value'];
    if (email == '') {
      this.toastr.warning('Enter email');
    } else {
      var link = environment.refferUrl
      this.service.post('/api/reffer-friend', { user_type, link, reffer_code: this.reffer_code, email: email, user_id: localStorage.getItem('userId') }).subscribe(res => {
        if (res['status'] == true) {
          this.toastr.success(res['msg'])
          this.router.navigateByUrl('/login', { skipLocationChange: true }).then(() => {
            this.router.navigate(['invite-friend']);
          });
        } else {
          this.toastr.warning(res['msg'])
        }

      })
    }
  }
  CopymyFunction(val) {
    let selBox = document.createElement('textarea');
    selBox.style.position = 'fixed';
    selBox.style.left = '0';
    selBox.style.top = '0';
    selBox.style.opacity = '0';
    selBox.value = val;
    document.body.appendChild(selBox);
    selBox.focus();
    selBox.select();
    document.execCommand('copy');
    document.body.removeChild(selBox);
    this.toastr.success('Copied successfully')
  }
}
