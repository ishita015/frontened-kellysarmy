import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import { HttpService } from 'src/app/services/http.service';
import { ToastrService } from 'ngx-toastr';
import { Router, Route, ActivatedRoute } from '@angular/router';
import { environment } from 'src/environments/environment';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-myservicess',
  templateUrl: './myservicess.component.html',
  styleUrls: ['./myservicess.component.css']
})
export class MyServicessComponent implements OnInit {
  user_id = localStorage.getItem('userId');
  RequestData = [];
  stars: number[] = [1, 2, 3, 4, 5];
  selectedValue: number = 1;
  data;
  language;
  constructor(public service: HttpService, private toastr: ToastrService,
    public translate: TranslateService,
    private rt: Router,) {
    translate.setDefaultLang('en');
  }
  // useLanguage(language: string) {
  //   localStorage.setItem('language', language);
  //   this.language = language;
  //   this.translate.use(language);
  //   console.log("adnan");
  // }

  ngOnInit() {
    this.getserviceReq();
  }
  getserviceReq() {
    this.language = localStorage.getItem('language');
    console.log("this.language======", this.language)
    this.service.get('/api/getMyServicessINCustomer/'+this.language+'?user_id=' + localStorage.getItem('userId').toString()).subscribe(res => {
      this.RequestData = res['data']
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
  countStar(star) {
    this.selectedValue = star;
    console.log('Value of star', star);
  }
  finalData
  markAsCompleted(value) {
    // alert('d')
    this.finalData = value;
    document.getElementById("myModal").style.display = "block";
  }
  finalComplete() {
    var review_id = (<HTMLInputElement>document.getElementById('review_id')).value;
    console.log('review_id', review_id)
    console.log('selectedValue', this.selectedValue)
    console.log('finalData', this.finalData)

    this.service.post('/api/updateServiceStatusAsCompleted', { serviceCompletedCancleUrl: environment.serviceCompletedCancleUrl, description: review_id, rating: this.selectedValue, service_provider_id: this.finalData.serviceProviderData.service_provider_id, user_id: localStorage.getItem('userId'), booking_id: this.finalData.serviceProviderData.booking_id }).subscribe(res => {
      this.toastr.success(res['message'])
      document.getElementById('closeSectionId').click()
      this.rt.navigateByUrl('/login', { skipLocationChange: true }).then(() => this.rt.navigate(["my-service"]));

    })
  }
  closeRatingPopup() {
    document.getElementById("myModal").style.display = "none";
  }

  serviceDetails(id) {
    this.data = window.btoa(JSON.stringify(id));
    this.rt.navigate(['service-details-customer', this.data]);
  }
}
