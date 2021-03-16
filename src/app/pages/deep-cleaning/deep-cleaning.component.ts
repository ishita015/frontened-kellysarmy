import { Component, Inject, ElementRef, ViewChild, NgZone ,OnInit} from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import * as moment from 'moment';
import { HttpService } from 'src/app/services/http.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { enableRipple } from '@syncfusion/ej2-base';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { environment } from 'src/environments/environment';

import { paymentComponent } from '../payment/payment.component';

import { ApiService, Maps } from 'src/app/services/api.service';
const place = null as google.maps.places.PlaceResult;

@Component({
  selector: 'app-deep-cleaning',
  templateUrl: './deep-cleaning.component.html',
  styleUrls: ['./deep-cleaning.component.css']
})
export class DeepCleaningComponent implements OnInit {
  minDate = new Date();
  minDate1 = new Date();
a_amount=0;
      registerForm: FormGroup;
    submitted = false;
    serviceAmount=0;
    dev_happy_points=1;
master_points=1;
    Amt=0;
@ViewChild("search")
  public searchElementRef: ElementRef;
  public place: google.maps.places.PlaceResult;
        checkedHappy=0
  public formatString: string = 'HH:mm';
    public interval: number = 30;
    constructor(private spinner: NgxSpinnerService,public apiService: ApiService, private ngZone: NgZone,public dialog: MatDialog,private formBuilder: FormBuilder,public service:HttpService,private toastr: ToastrService, private router: Router) 
    { 
     }

    ngOnInit() {
    //    this.apiService.api.then(maps => {
    //   this.initAutocomplete(maps);
    // });
      if(localStorage.getItem('user_type') != null){
      if(localStorage.getItem('user_type') != '1'){
        this.router.navigate(['/'])
      }
      }
    

     document.body.scrollTop = document.documentElement.scrollTop = 0;

        this.getserviceDetail()
        this.getAllBedRoom()
        this.getUserData()
        this.getUserAddress()
        this.registerForm = this.formBuilder.group({
            location_id: ['', Validators.required],
            location: ['',],
            booking_date: ['', Validators.required],
            booking_time: ['', Validators.required],
            no_of_cleaning: ['', Validators.required],
            cleaning_duration: ['', Validators.required],
            pets: ['no'],
            no_of_pets: [''],
            cleaning_descrip: [''],
            access_property: ['I will be at home', Validators.required],

            
        });

          if(window.location.href.split('deep-cleaning/')[1] != undefined){
      var param = window.location.href.split('deep-cleaning/')[1];
       this.lat=parseFloat(param.split('/')[0]);
       this.lng=parseFloat(param.split('/')[1])
       if(param.split('/')[2] != undefined){
         // this.registerForm.patchValue({location:param.split('/')[2]})
         this.registerForm.patchValue({location:param.split('/')[2].replace(/%20/g, " ")})
       }        
      }

      if(document.getElementById('by_hour_input') != null){
       (document.getElementById('by_hour_input') as HTMLInputElement).setAttribute('readonly','true')
      }
setTimeout(() =>{
  if(document.getElementById('by_hour_input') != null){
      document.getElementById('by_hour_input')['readOnly'] = true;
  }
  }, 1000);

    }

    happy_point=0;
    getUserData(){
         this.service.get('/api/getLoginDetailsBYId/'+localStorage.getItem('userId'))
      .subscribe(res => {
         this.happy_point= res['data'][0].happy_points;
          if(res['data'][0].points_to_euro.length > 0){
           this.dev_happy_points = res['data'][0].points_to_euro[0].euro /  res['data'][0].points_to_euro[0].points;
         this.master_points= res['data'][0].points_to_euro[0].euro;
         }
      })
    }
devEV(){
var d =new Date();
if(moment(this.registerForm.value.booking_date).format("YYYY-MM-DD") == moment(d).format("YYYY-MM-DD")){
    this.minDate1=new Date()
  }else{
    this.minDate1=new Date(this.registerForm.value.booking_date)
  }
}
    userAddressData=[]
    getUserAddress(){
      this.service.post('/api/get-address-user/'+localStorage.getItem('userId'),{})
      .subscribe(res => {
        for (var i = 0; i < res['data'].length; ++i) {
          if(res['data'][i].address_title == 'my_home' ){
              res['data'][i].title='My Home'
          }

           if(res['data'][i].address_title == 'my_secondary_home' ){
              res['data'][i].title='My Secondary Home'
          }

           if(res['data'][i].address_title == 'office' ){
              res['data'][i].title='Office'
          }

           if(res['data'][i].address_title == 'other' ){
              res['data'][i].title='Other'
          }
        }

        this.userAddressData=res['data'];
      })
    }
perHour(q){
this.serviceAmount=this.serviceAmount * parseInt(q)
}
service_name;
service_id;
    getserviceDetail(){
        this.service.get('/user/getServiceById/2')
      .subscribe(res => {
          this.serviceAmount=res['data'][0]['amount'];
          this.Amt=res['data'][0]['amount'];
          this.service_id=res['data'][0]['id'];
          this.service_name=res['data'][0]['service_name'];

      })

    }
    bedroomData=[];
    checkingAmount;
    getAllBedRoom(){
        this.service.get('/api/get-all-bedroom-bathroom')
      .subscribe(res => {
          this.bedroomData=res['data'];
          this.registerForm.patchValue({
            no_of_cleaning:res['data'][0]['id'],
            cleaning_duration:res['data'][0]['duration'],
          })
          this.checkingAmount=res['data'][0]['duration']
          this.serviceAmount=this.Amt * parseInt(res['data'][0]['duration'])

               })

    }
reduceDuration(){
  if(this.checkingAmount < this.registerForm.value.cleaning_duration){
    this.registerForm.value.cleaning_duration= this.registerForm.value.cleaning_duration-1;
      this.serviceAmount=this.Amt * parseInt(this.registerForm.value.cleaning_duration)

  }

}
IncressDuration(){
  this.registerForm.value.cleaning_duration= this.registerForm.value.cleaning_duration+1;
      this.serviceAmount=this.Amt * parseInt(this.registerForm.value.cleaning_duration)
}
bedroomChange(evt){
  console.log(evt)
   this.service.get('/api/get-all-bedroom-bathroom-detail/'+evt)
      .subscribe(res => {
         
  this.registerForm.value.cleaning_duration= res['data'][0]['duration'];
  this.checkingAmount=res['data'][0]['duration']
      this.serviceAmount=this.Amt * parseInt(res['data'][0]['duration'])

})
}

append_date='';
append_time='';
changeDate(){
     if(this.registerForm.value.booking_date != ''){
         this.append_date=moment(this.registerForm.value.booking_date).format("MM-DD-YYYY");
     }
    }
changeDate1(){
         if(this.registerForm.value.booking_time != ''){
          this.append_time=moment(this.registerForm.value.booking_time).format('LT');
         }
}
    get f() { return this.registerForm.controls; }
    lat=0;
    lng=0;
// placeChanged(place) {
//     console.log(place)
//     this.lat=place.geometry.location.lat();
//     this.lng=place.geometry.location.lng();

//     this.registerForm.patchValue({location:place.vicinity})
//   }

initAutocomplete(maps: Maps) {
    let autocomplete = new maps.places.Autocomplete(this.searchElementRef.nativeElement);
    autocomplete.addListener("place_changed", () => {
      this.ngZone.run(() => {
        this.onPlaceChange(autocomplete.getPlace());
      });
    });
  }

  onPlaceChange(place) {
    this.lat=place.geometry.location.lat();
    this.lng=place.geometry.location.lng();
    this.registerForm.patchValue({location:place.name})

  }
  checkDog='';
  petsradio(v){
    this.registerForm.patchValue({pets:v})
    this.checkDog=v;
    if(v == 'other'){
      this.checkDog=';';
    }

    
    console.log(this.checkDog)
  }
    manage(v){
    this.registerForm.patchValue({access_property:v})
  }

    PaymentType='Stripe'
  Payment(e){
    this.PaymentType=e['value']
  }
    onSubmit() {
// return
        this.submitted = true;

        // stop here if form is invalid
        if (this.registerForm.invalid) {
            return;
        }
       
            console.log('===========================',this.registerForm.value.booking_time);
            // if(this.registerForm.value.booking_time > new Date()){
             this.registerForm.value.booking_date=moment(this.registerForm.value.booking_date).format("YYYY-MM-DD");
                // this.registerForm.value.booking_time=moment(this.registerForm.value.booking_time).format('LT');
                 this.registerForm.value.booking_time=moment(this.registerForm.value.booking_time).format("HH:mm");
        
               
        
                this.registerForm.value.service_id=this.service_id.toString();
                this.registerForm.value.service_name=this.service_name;
                
                this.registerForm.value.user_id=localStorage.getItem('userId');
                 
                 this.service.get('/api/get-address-byid/'+this.registerForm.value.location_id).subscribe(ress=>{
                    this.registerForm.value.latitude=ress['data'][0].latitude;
                    this.registerForm.value.longitude=ress['data'][0].longitude;
                    this.registerForm.value.location=ress['data'][0].location;
                    this.registerForm.value.service_link=environment.DeepCleaningServiceUrl;
        
                    this.registerForm.value.s_amount=this.serviceAmount + this.a_amount;


      this.service.post('/api/noServiceProviderNearByYou',this.registerForm.value).subscribe(ress=>{
          console.log("resssssssssssssssssssss", ress);
          if(ress['status'] == true){


                if(this.checkedHappy == 0){
                this.registerForm.value.coast=this.serviceAmount + this.a_amount;
                }else{
                this.registerForm.value.coast=(this.serviceAmount + this.a_amount ) - (this.happy_point * this.dev_happy_points) > 0 ? (this.serviceAmount + this.a_amount)  - (this.happy_point * this.dev_happy_points) :0;
                 }
        
                  if(this.checkedHappy == 1){
                   this.registerForm.value.happy_point = (this.happy_point * this.dev_happy_points) -  (this.serviceAmount + this.a_amount) > 0 ? (this.happy_point * this.dev_happy_points) -  (this.serviceAmount + this.a_amount) : 0;
                }else{
                  this.registerForm.value.happy_point =this.happy_point
                }
                console.log(this.registerForm.value)
        
        
                 if(this.registerForm.value.coast == 0){
                  this.spinner.show();
                     this.registerForm.value.tracking_url=environment.myServicesUrl
                     this.service.post('/api/add-booking-via-happy-points',this.registerForm.value).subscribe(finalRes=>{
                     this.toastr.success(finalRes['message']);
                      this.spinner.hide();
        
                      this.router.navigate(['/my-service']); 
                    
                   })
                 }else{
                   // this.registerForm.value.PaymentType=this.PaymentType;
                        document.body.scrollTop = document.documentElement.scrollTop = 0;
                        if(this.PaymentType == 'Stripe'){
        
        
                            const dialogRef = this.dialog.open(paymentComponent, {
                            width: '800px',
                            data: this.registerForm.value
                          });  
                        }else{
                          this.spinner.show();
                            this.registerForm.value.pay_Device='web';
        
                            delete this.registerForm.value.PaymentType;
                          this.service.post('/api/paypal',this.registerForm.value).subscribe(res=>{
                            console.log('deva',res['forwardLink'])
                            window.location.replace(res['forwardLink'])
                          }) 
                        }
        
        
        
        
                          
        
                }
                 }else{
            this.toastr.success(ress['msg']);
          }
        
                 })
            // }else{
            //   this.toastr.warning('Booking Time should be greater than current time')
            // }
            
        
               
               
                // this.service.post('/api/check-service-already-booked',this.registerForm.value).subscribe(res=>{
                //       if(res['status'] == true){
                           
                //       }else{
        
                //         this.toastr.success(res['message']);
                //       }
                // })
         
        })
    
    }

    onReset() {
        this.submitted = false;
        this.registerForm.reset();
    }
     checkHappyPoints(checked){
      if(checked == true){
        this.checkedHappy=1;
      }else{
      this.checkedHappy=0
      }
    }
    ConvertToInt(currentPage){
  return parseInt(currentPage);
}
}