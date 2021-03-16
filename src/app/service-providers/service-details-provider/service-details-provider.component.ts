import { Component, OnInit, NgZone } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService, Maps } from 'src/app/services/api.service';
import { ToastrService } from 'ngx-toastr';
import { environment } from 'src/environments/environment';
const place = null as google.maps.places.PlaceResult;
@Component({
  selector: 'app-service-details-provider',
  templateUrl: './service-details-provider.component.html',
  styleUrls: ['./service-details-provider.component.css']
})
export class ServiceDetailsProviderComponent implements OnInit {

public data;
public user_type;
public userId=localStorage.getItem('userId');
public status;
public progress_status;
public service_details;
public customerReviews;
public stars: number[] = [1, 2, 3, 4, 5];
public selectedValue: number=1;
public ratingArr = [1,2,3,4,5];
public additional_service;
 constructor(
    public service:HttpService,
    public apiService: ApiService,
    private ngZone: NgZone,
    private route : ActivatedRoute,
    private toastr: ToastrService,
    public rt: Router)
    {
      this.data = route.snapshot.params['data'];
    }

 ngOnInit(): void {
    this.data = JSON.parse(window.atob(this.data));
    console.log("====>>>data", this.data);
    this.getAdditionalService();
        this.getUserAddress(this.data);

    this.user_type = localStorage.getItem("user_type");
    this.getServiceDetails();
    this.apiService.api.then(maps => {
      setTimeout(()=>{ 
        this.initAutocomplete(maps,this.data);
      }, 1000);
    });
  }

initAutocomplete(maps: Maps,data) {
     var myLatlng = new google.maps.LatLng(data.latitude,data.longitude);
     var myOptions = {
         zoom: 10,
         center: myLatlng,
         mapTypeId: google.maps.MapTypeId.ROADMAP
         }
     var map = new google.maps.Map(document.getElementById("map"), myOptions);
      var marker = new google.maps.Marker({
          position: myLatlng, 
          map: map,
      title:data.location
     });
  }
  userAddress;
   getUserAddress(data) {
    this.service.post('/api/getUserAddress',data)
      .subscribe(res => {
        this.userAddress = res['data'][0];
      });
  }
getServiceDetails(){
    this.service.get('/user/getCustomerReviews/'+this.data.booking_id)
      .subscribe(res => {
        this.customerReviews=res['data'];
        console.log("======>>>>> customerReviews", this.customerReviews);
      });
  }
countStar(star) {
      this.selectedValue = star;
      console.log('Value of star', star);
    }
    finalData
    markAsCompleted(value){
     this.finalData=value;
      document.getElementById("myModal").style.display = "block";
    }
    finalComplete(){
      var review_id = (<HTMLInputElement>document.getElementById('review_id')).value;
          this.service.post('/api/updateServiceStatusAsHalfCompleted',{myServicesUrl:environment.myServicesUrl,description:review_id,rating:this.selectedValue,user_id:localStorage.getItem('userId'),booking_id:this.finalData.booking_id}).subscribe(res=>{
          this.toastr.success(res['message']);
          document.getElementById('closeSectionId').click()
          this.rt.navigateByUrl('/login', {skipLocationChange: true }).then(() => this.rt.navigate(["service-providers/service-inprogress"]))
          })       
       }
    closeRatingPopup(){
      document.getElementById("myModal").style.display = "none";
    }

    acceptService(data,type){
      data.user_id=localStorage.getItem('userId').toString();
      data.type=type;
      data.myServicesUrl=environment.myServicesUrl;
      data.serviceInProgressUrl=environment.serviceInProgressUrl;
      this.service.post('/api/acceptService',data).subscribe(res=>{
       this.toastr.success(res['message'])
        this.rt.navigateByUrl('/login', {skipLocationChange: true }).then(() => this.rt.navigate(["service-providers/service-request"]));

        })
    }
    getAdditionalService(){
      this.service.post('/api/get-additional-service-by-id',{ service_id: this.data.additional_service_ids })
      .subscribe(res => {
        this.additional_service = res['data'];
        console.log("======>>>>>> additional_service", this.additional_service);
      });    
    }
}
