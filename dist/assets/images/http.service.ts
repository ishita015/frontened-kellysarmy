import { Injectable } from '@angular/core';


import { Router } from "@angular/router";
import { of } from "rxjs";
import { delay } from "rxjs/operators";
import { Login } from "../modals/login";
import { Signup } from "../modals/signup";

import {HttpClient, HttpHeaders} from '@angular/common/http';
import { environment } from 'src/environments/environment';
import {Observable} from 'rxjs';
import { Serviceproviderreg } from '../modals/serviceproviderreg';
@Injectable({
  providedIn: 'root'
})
export class HttpService {
  private url = environment.apiUrl;
  public httpOptions;
  constructor(private http: HttpClient,private router:Router) { 
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      })
    };
  }

  

    /*=====Login Section Apis Start======*/
    getUserLogin(loginInfo: Login): Observable<any> {
      return this.http.post(this.url + '/user/login', loginInfo);
    }
    /*=====Login Section Apis End======*/
  
    /*=====Signup Section Apis Start======*/
    getUserSignup(signupInfo: Signup): Observable<any> {
      return this.http.post(this.url + '/user/registeration', signupInfo);
    }
     /*=====Signup Section Apis End======*/
  
    /*=====Profile Section Apis Start======*/
    getUpdateProfile(signupInfo: Signup,id): Observable<any> {
      return this.http.post(this.url + '/user/update/' + id, signupInfo);
    }
  
    getEditMyProfile(id): Observable<any> {
      return this.http.get(this.url + '/user/getSingleUser/' + id);
    }
    /*===== Profile Section Apis End======*/
    
    /*=====Stepper Form Apis Start======*/
     getStepTwoChooseSer(): Observable<any> {
      return this.http.get(this.url + '/user/getmainservicelist' );
     }
     getStepTwoAdditional(): Observable<any> {
      return this.http.get(this.url + '/user/getadditionalservicelist' );
     }

     getServiceProviderReg(serProviderRegInfo: Serviceproviderreg): Observable<any> {
      return this.http.post(this.url + '/user/serviceprovideregisteration/' , serProviderRegInfo);
    }

    getEmailCheck(email): Observable<any> {
      return this.http.post(this.url + '/user/chekemailexist' , {email:email});
    }

    getPostCodeCheck(pin_code_id): Observable<any> {
      return this.http.post(this.url + '/user/chekepostcodeexist' , {pin_code:pin_code_id});
    }

    getSingleServideProvider(id){
      return this.http.get(this.url + '/user/chekepostcodeexist' + id);
    }
    getPostCode(): Observable<any>{
      return this.http.get(this.url + '/user/postcodelist' );
    }
    /*===== Stepper Form Apis End======*/

    /*=====Service Profile Section Apis Start======*/
    getEditServiceProfile(id): Observable<any> {
      return this.http.get(this.url + '/user/getsingleidverification/' + id);
    }
  
    getUpdateServiceProfile(serProviderRegInfo: Serviceproviderreg,id): Observable<any> {
      return this.http.post(this.url + '/user/updateserviceprovider/' + id, serProviderRegInfo);
    }

    /*=====Service Profile Section Apis End======*/

}
