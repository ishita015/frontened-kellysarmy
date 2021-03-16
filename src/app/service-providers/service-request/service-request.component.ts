import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import { HttpService } from 'src/app/services/http.service';
import { ToastrService } from 'ngx-toastr';
import { Router, Route, ActivatedRoute } from '@angular/router';
import { environment } from 'src/environments/environment';

import { TranslateService } from '@ngx-translate/core';
@Component({
  selector: 'app-service-request',
  templateUrl: './service-request.component.html',
  styleUrls: ['./service-request.component.css']
})
export class ServiceRequestComponent implements OnInit {
  user_id = localStorage.getItem('userId');
  data;
  language;
  RequestData = [];
  constructor(public service: HttpService, private toastr: ToastrService,
    public translate: TranslateService,
    private rt: Router,) {

    translate.setDefaultLang('en');
  }

  useLanguage(language: string) {
    this.language = language;
    this.translate.use(language);
    // this.rt.navigateByUrl('/login', { skipLocationChange: true }).then(() => {
    //   this.rt.navigate(['/service-providers/service-request']);
    // });
    this.getserviceReq();  
  }

  ngOnInit() {
    this.language = localStorage.getItem('language');
    this.getserviceReq()
  }
  getserviceReq() {
    this.service.get('/api/getServiceReqInprovider/'+this.language+'?user_id=' + localStorage.getItem('userId').toString()).subscribe(res => {
      this.RequestData = res['data']
      console.log("this.RequestData=======", this.RequestData);
    })
  }
  acceptService(value, type) {
    value.user_id = localStorage.getItem('userId').toString();
    value.type = type;
    value.myServicesUrl = environment.myServicesUrl;
    value.serviceInProgressUrl = environment.serviceInProgressUrl;
    this.service.post('/api/acceptService', value).subscribe(res => {
      this.toastr.success(res['message'])
      this.rt.navigateByUrl('/login', { skipLocationChange: true }).then(() => this.rt.navigate(["service-providers/service-request"]));

    })
  }

  serviceDetails(data) {
    data.accept_decline = "accept_decline"
    this.data = window.btoa(JSON.stringify(data));
    this.rt.navigate(['service-providers/service-details-provider', this.data]);
  }
}
