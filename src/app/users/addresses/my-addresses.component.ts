import {FunctionService} from "src/app/services/function.service";
import { VariableService } from '../../services/variable.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { HttpService } from 'src/app/services/http.service';
import { Component, Inject, ElementRef, ViewChild, NgZone ,OnInit} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { ApiService, Maps } from 'src/app/services/api.service';
const place = null as google.maps.places.PlaceResult;

@Component({
  selector: 'app-my-addresses',
  templateUrl: './my-addresses.component.html',
  styleUrls: ['./my-addresses.component.css']
})
export class AddressesComponent implements OnInit {
	param=window.location.href.split('address/')[1] == '0' ? '': window.location.href.split('address/')[1];
 public userId
  public profileSideBarData;
  public profileData;
  constructor(
  	public func:FunctionService,
    private router: Router,
    public service:HttpService,
    private toastr: ToastrService,
    public variable: VariableService,
    public apiService: ApiService, private ngZone: NgZone,private formBuilder: FormBuilder

) { }
    registerForm: FormGroup;
    submitted = false;

@ViewChild("search")
  public searchElementRef: ElementRef;
  public place: google.maps.places.PlaceResult;


	devparam=''
  ngOnInit(){
  	  	    this.func.setBack();

    this.userId = JSON.parse(localStorage.getItem('userId'));
    // this.profileData = JSON.parse(localStorage.getItem('userData'));
    console.log("user",this.profileData);
    this.devparam=this.router.url

    this.service.get('/api/getLoginDetailsBYId/'+localStorage.getItem('userId'))
      .subscribe(res => {
        this.profileData=res['data'][0]
      })
      this.apiService.api.then(maps => {
      this.initAutocomplete(maps);
    });
      
      this.registerForm = this.formBuilder.group({
            latitude: [''],
            longitude: [''],
            location: ['',Validators.required],
            street_name: ['',],
            city: [''],
            post_code: [''],
            building_number: ['',Validators.required],
            floor_flat_aprtment: ['',Validators.required],
           
            address_title: [this.param,Validators.required],
        });
      this.service.post('/api/get-user-address-by-title/'+localStorage.getItem('userId'),{address_title:this.param})
      .subscribe(res => {
        if(res['data'].length >0){
        	this.registerForm.patchValue(res['data'][0])
        }
      })
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
  	
    this.registerForm.patchValue({
    	location:place.name,
    	latitude:place.geometry.location.lat(),
    	longitude:place.geometry.location.lng()
    })

  }
get f() { return this.registerForm.controls; }

    onSubmit() {
        this.submitted = true;

        // stop here if form is invalid
        if (this.registerForm.invalid) {
            return;
        }

        this.service.post('/api/add-address-user/'+localStorage.getItem('userId'),this.registerForm.value)
      .subscribe(res => {
      	if(res['status'] == true){
      		this.toastr.success(res['msg']);
      		 this.router.navigate(['/myaddress']);

      	}else{
      		this.toastr.warning(res['msg'])
      	}
      })
    }

  Logout(){
    this.toastr.success('Logout successfully.')
     this.variable.login = true;
    this.variable.logout = false;
   localStorage.clear();  
   this.router.navigateByUrl('/dashboard', {skipLocationChange: true }).then(() => this.router.navigate(["login"]));
  }
	addAddress(title,type){
		console.log(title,type)
	}
}
