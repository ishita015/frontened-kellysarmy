

import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import { HttpService } from 'src/app/services/http.service';
import { ToastrService } from 'ngx-toastr';
import { Router, Route, ActivatedRoute } from '@angular/router';
import { environment } from 'src/environments/environment';
import { TranslateService } from '@ngx-translate/core';
@Component({
  selector: 'app-service-inprogress',
  templateUrl: './service-inprogress.component.html',
  styleUrls: ['./service-inprogress.component.css']
})
export class ServiceInprogressComponent implements OnInit {

  user_id = localStorage.getItem('userId');
  RequestData = [];
  stars: number[] = [1, 2, 3, 4, 5];
  selectedValue: number = 1;
  data;
  language;
  constructor(public service: HttpService,
    public translate: TranslateService,
    private toastr: ToastrService, private rt: Router,) {
    translate.setDefaultLang('en');
  }

  useLanguage(language: string) {
    this.language = language;
    this.translate.use(language);
    this.getserviceReq();
  }

  ngOnInit() {
    this.language = localStorage.getItem('language');
    this.getserviceReq()
  }
  getserviceReq() {
    this.service.get('/api/getProgressServiceReqInprovider/'+this.language+'?user_id=' + localStorage.getItem('userId').toString()).subscribe(res => {
      this.RequestData = res['data']
    })
  }
  acceptService(value, type) {
    value.user_id = localStorage.getItem('userId').toString();
    value.type = type;
    this.service.post('/api/acceptService', value).subscribe(res => {
      this.toastr.success(res['message'])
      this.rt.navigateByUrl('/login', { skipLocationChange: true }).then(() => this.rt.navigate(["service-providers/service-inprogress"]));

    })
  }
  countStar(star) {
    this.selectedValue = star;
    console.log('Value of star', star);
  }
  finalData
  markAsCompleted(value) {
    this.finalData = value;
    document.getElementById("myModal").style.display = "block";
  }
  finalComplete() {
    var review_id = (<HTMLInputElement>document.getElementById('review_id')).value;

    this.service.post('/api/updateServiceStatusAsHalfCompleted', { myServicesUrl: environment.myServicesUrl, description: review_id, rating: this.selectedValue, user_id: localStorage.getItem('userId'), booking_id: this.finalData.booking_id }).subscribe(res => {
      this.toastr.success(res['message'])
      document.getElementById('closeSectionId').click()
      this.rt.navigateByUrl('/login', { skipLocationChange: true }).then(() => this.rt.navigate(["service-providers/service-inprogress"]));

    })
  }
  closeRatingPopup() {
    document.getElementById("myModal").style.display = "none";
  }

  serviceDetails(data) {
    this.data = window.btoa(JSON.stringify(data));
    this.rt.navigate(['service-providers/service-details-provider', this.data]);
  }
}
