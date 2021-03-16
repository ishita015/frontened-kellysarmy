import { Component, Inject, ElementRef, ViewChild, NgZone ,OnInit} from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ApiService, Maps } from 'src/app/services/api.service';
const place = null as google.maps.places.PlaceResult;
import { HttpService } from 'src/app/services/http.service';


import { TranslateService } from '@ngx-translate/core';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
	userId=localStorage.getItem('userId')
  user_type=localStorage.getItem('user_type')

@ViewChild("search")
  public searchElementRef: ElementRef;
  public place: google.maps.places.PlaceResult;
  public happy_point = 0;

  constructor(private service:HttpService,private toastr: ToastrService,public apiService: ApiService, private ngZone: NgZone,
    public translate: TranslateService) {
      translate.setDefaultLang('en');
     }

     useLanguage(language: string) {
      this.translate.use(language);
    }

/*========== Slider Section Start Here========*/
    customOptions: any = {
      loop: true,
      mouseDrag: true,
      touchDrag: false,
      pullDrag: false,
      dots: true,
      navSpeed: 700,
      margin: 24,
      items: 1,
      dotsContainer: '.testimonial-pagination',
       navText: ['', ''],
      responsive: {
        1024:{
          items: 3,
          },
        768: {
          items: 2,
        },
        320: {
          items: 1,
        },
      },
    }
    /*========== Slider Section End Here========*/
  currentMonth=''
    checkAddClass=0;
  ngOnInit(): void {
    //   this.apiService.api.then(maps => {
    //   this.initAutocomplete(maps);
    // });
    this.getUserAddress();
    this.happyPoints();
    var param = window.location.href.split('home/')[1];
    console.log('===================',param)
    if(param == 'scroll'){
      this.checkAddClass=1;
      document.getElementById('devaIDss').scrollIntoView(true);
      }else{
      this.checkAddClass=0;
  }

    const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

const d = new Date();
this.currentMonth=monthNames[d.getMonth()];
  }
  userAddressData=[]
    getUserAddress(){
      this.service.post('/api/get-address-user/'+localStorage.getItem('userId'),{})
      .subscribe(res => {
        this.userAddressData=res['data']
      })
    }
	lat=0;
    lng=0;
    locationn=''
// placeChanged(place) {
//     this.lat=place.geometry.location.lat();
//     this.lng=place.geometry.location.lng();
// 	this.locationn=place.vicinity
//     console.log(this.lat,this.lng,this.locationn)
//   }

selectAd(id){
  alert(id)
  this.locationn=id
}
  scroll(el: HTMLElement) {
    console.log(el)
  	// if(this.locationn == ''){
  	// 	this.toastr.warning('Please select location.')
  	// }else{
   //     this.service.get('/api/get-address-byid/'+this.locationn).subscribe(ress=>{
   //          this.lat=ress['data'][0].latitude;
   //          this.lng=ress['data'][0].longitude;
   //          this.locationn=this.locationn;
   //        })
  		el.scrollIntoView({ behavior: "smooth", block: "start" });
  	// }
}


 
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
  this.locationn=place.name

  }

  happyPoints(){
    this.service.get('/user/getHappyPoints')
      .subscribe(res => {
        this.happy_point=res['data'][0].points;
    })
  }
}
