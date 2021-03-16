import { Component, OnInit, NgZone } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService, Maps } from 'src/app/services/api.service';
import { ToastrService } from 'ngx-toastr';
import { environment } from 'src/environments/environment';
const place = null as google.maps.places.PlaceResult;
@Component({
  selector: 'app-service-details',
  templateUrl: './service-details-customer.component.html',
  styleUrls: ['./service-details-customer.component.css']
})
export class ServiceDetailsCustomerComponent implements OnInit {

  public data;
  public userId;
  public user_type;
  public status;
  public progress_status;
  public service_details;
  public customerReviews;
  public stars: number[] = [1, 2, 3, 4, 5];
  public selectedValue: number = 1;
  public ratingArr = [1, 2, 3, 4, 5];
  public additional_service;
  constructor(
    public service: HttpService,
    public apiService: ApiService,
    private ngZone: NgZone,
    private route: ActivatedRoute,
    private toastr: ToastrService,
    public rt: Router) {
    this.data = route.snapshot.params['data'];
  }

  ngOnInit(): void {
    this.data = JSON.parse(window.atob(this.data));
    this.getAdditionalService();
    this.getUserAddress(this.data);
    this.userId = localStorage.getItem("userId");
    this.user_type = localStorage.getItem("user_type");
    this.getServiceDetails();
    this.apiService.api.then(maps => {
      setTimeout(() => {
        this.initAutocomplete(maps, this.data);
      }, 1000);
    });
  }

  initAutocomplete(maps: Maps, data) {
    console.log("adnan====>>", data);
    var myLatlng = new google.maps.LatLng(data.latitude, data.longitude);
    var myOptions = {
      zoom: 10,
      center: myLatlng,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    }
    console.log('document.getElementById("map")', document.getElementById("map"));
    var map = new google.maps.Map(document.getElementById("map"), myOptions);
    var marker = new google.maps.Marker({
      position: myLatlng,
      map: map,
      title: data.location
    });
  }
  getServiceDetails() {
    this.service.get('/user/getCustomerReviews/' + this.data.id)
      .subscribe(res => {
        this.customerReviews = res['data'];
      });
  }
userAddress;
   getUserAddress(data) {
    this.service.post('/api/getUserAddress',data)
      .subscribe(res => {
        this.userAddress = res['data'][0];
      });
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
    this.service.post('/api/updateServiceStatusAsCompleted', { serviceCompletedCancleUrl: environment.serviceCompletedCancleUrl, description: review_id, rating: this.selectedValue, service_provider_id: this.finalData.serviceProviderData.service_provider_id, user_id: localStorage.getItem('userId'), booking_id: this.finalData.serviceProviderData.booking_id }).subscribe(res => {
      this.toastr.success(res['message']);
      document.getElementById('closeSectionId').click()
      this.rt.navigateByUrl('/login', { skipLocationChange: true }).then(() => this.rt.navigate(["my-service"]));
    });
  }
  closeRatingPopup() {
    document.getElementById("myModal").style.display = "none";
  }
  getAdditionalService(){
    this.service.post('/api/get-additional-service-by-id',{ service_id: this.data.additional_service_ids })
    .subscribe(res => {
      this.additional_service = res['data'];
      console.log("this.additional_service", this.additional_service);
    });    
  }
}
