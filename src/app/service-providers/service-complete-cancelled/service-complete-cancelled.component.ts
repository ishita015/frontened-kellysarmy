
import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import { HttpService } from 'src/app/services/http.service';
import { ToastrService } from 'ngx-toastr';
import { Router, Route, ActivatedRoute } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
@Component({
  selector: 'app-service-complete-cancelled',
  templateUrl: './service-complete-cancelled.component.html',
  styleUrls: ['./service-complete-cancelled.component.css']
})
export class ServiceCompleteCancelledComponent implements OnInit {

  user_id = localStorage.getItem('userId');
  data;
  language;
  RequestData = [];
  constructor(public service: HttpService,
    public translate: TranslateService,
    private toastr: ToastrService, private rt: Router,) {
    translate.setDefaultLang('en');

  }

  useLanguage(language: string) {
    localStorage.setItem('language', language);
    this.translate.use(language);
    this.getserviceReq();
  }
  ngOnInit() {
    if (localStorage.getItem('language') == null) this.useLanguage('en');
    this.getserviceReq();
  }
  getserviceReq() {
    this.language = localStorage.getItem('language');
    this.service.get('/api/getCompletedOrCancledServiceReqInProvider/'+this.language+'?user_id=' + localStorage.getItem('userId').toString()).subscribe(res => {
      this.RequestData = res['data']
      console.log("this.RequestData=====", this.RequestData);
    })
  }
  acceptService(value, type) {
    value.user_id = localStorage.getItem('userId').toString();
    value.type = type;
    this.service.post('/api/acceptService', value).subscribe(res => {
      this.toastr.success(res['message'])
      this.rt.navigateByUrl('/login', { skipLocationChange: true }).then(() => this.rt.navigate(["service-providers/service-request"]));

    })
  }
  serviceDetails(data) {
    this.data = window.btoa(JSON.stringify(data));
    this.rt.navigate(['service-providers/service-details-provider', this.data]);
  }
}
