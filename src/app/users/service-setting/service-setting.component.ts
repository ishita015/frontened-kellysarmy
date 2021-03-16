import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';
import { ToastrService } from 'ngx-toastr';
import { Router, Route, ActivatedRoute } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
@Component({
  selector: 'app-service-setting',
  templateUrl: './service-setting.component.html',
  styleUrls: ['./service-setting.component.css']
})
export class ServiceSettingComponent implements OnInit {

  constructor(public service: HttpService, private toastr: ToastrService,
    public translate: TranslateService,
    private rt: Router) {
    translate.setDefaultLang('en');

  }

  useLanguage(language: string) {
    this.translate.use(language);
  }
  n_data = []
  ngOnInit(): void {
    this.getNotificationSetting()
  }
  getNotificationSetting() {
    this.service.post('/api/getNotificationSetting', { user_id: localStorage.getItem('userId') }).subscribe(res => {
      this.n_data = res['data'][0]
      console.log(this.n_data)
      if (res['data'][0].by_email == 1) {
        document.getElementById('byemail')['checked'] = true;
      }
      if (res['data'][0].by_sms == 1) {
        document.getElementById('bysms')['checked'] = true;
      }
      if (res['data'][0].by_push_notification == 1) {
        document.getElementById('push-notification')['checked'] = true;
      }

    })
  }

  chnageNotification(type, status) {
    console.log(type, status)
    this.service.post('/api/updateNotificationSetting', { type, status, user_id: localStorage.getItem('userId') }).subscribe(res => {
      if (res['status'] == true) {
        this.toastr.success(res['msg'])
      } else {
        this.toastr.warning(res['msg'])
      }
      this.rt.navigateByUrl('/login', { skipLocationChange: true }).then(() => {
        this.rt.navigate(['service-setting']);
      });
    })
  }
}
