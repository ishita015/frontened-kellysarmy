import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpService } from 'src/app/services/http.service';
import { ValidationsService } from 'src/app/services/validations.service';
import { ToastrService } from 'ngx-toastr';
import { VariableService } from '../../services/variable.service';

import { TranslateService } from '@ngx-translate/core';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signupForm: FormGroup;
  submitted: boolean;
  public reg_Msg;
  public showHideBtn = true;
  public reg_Obj;

  constructor(private fb: FormBuilder,
    private router: Router,
    public service:HttpService,
    public validation: ValidationsService,
    private toastr: ToastrService,
    public translate: TranslateService,
    public variable: VariableService) { 
      translate.setDefaultLang('en');
    }

    useLanguage(language: string) {
      this.translate.use(language);
    }

    ngOnInit() {
      this.createForm();
      this.getPhoneCode();
      var reffer_code_a=window.location.href.split('signup/')[1];
      if(reffer_code_a != undefined){

         this.variable.login = true;
        this.variable.logout = false;
       localStorage.clear();  
        if(reffer_code_a.search("fbclid") == -1){
           this.signupForm.patchValue({reffer_by_code:reffer_code_a})
          }else{
           this.signupForm.patchValue({reffer_by_code:reffer_code_a.split('?fbclid')[0]})
          }
      }
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
      items: 3,
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
    
    /*========== Form Value Start Here========*/
    createForm() {
      this.signupForm = this.fb.group({
        email: ['', this.validation.email_validator],
        password: ['', this.validation.password_validator],
        name: ['', this.validation.name_validation],
        mobile: ['', this.validation.mobile_validator],
        phonecode: ['', Validators.required],
        agree: ['', this.validation.onlyRequired_validator],
        reffer_by_code: [''],
      });
    }
    /*========== Form Value End Here========*/
    phoneCodeData=[];
  getPhoneCode(){
    this.service.get('/api/get-phonecode').subscribe(res=>{
      this.phoneCodeData=res['data']
    })
  }

   CheckRefferCode(referral_code){
    this.service.post('/api/referral_code',{referral_code:referral_code}).subscribe(res=>{
      if(res['status'] == false){
        this.toastr.warning(res['msg'])
      }
    })
  }
    /*==========Register Add Api Start Here========*/
    signup(){
      console.log("form value",this.signupForm.value);
      this.submitted = true;
      if (this.signupForm.invalid) {
        return;
      }
      this.submitted = false;

      this.service.post('/api/check-reffer-code',{referral_code:this.signupForm.value.reffer_by_code}).subscribe(res=>{
      var checkstatus=false;
      if(this.signupForm.value.reffer_by_code == '' ){
        checkstatus=true;
      }else{
        
          if(res['status'] == true){
            checkstatus=true;
          }

          if(res['status'] == false){
            checkstatus=false;
          }
      }

      if(checkstatus == false){
        this.toastr.warning(res['msg'])
      }else{




      this.service.getUserSignup(this.signupForm.value)
      .subscribe(res => {
          console.log("api response",res);
          this.reg_Obj = res;
          console.log("object",this.reg_Obj);
          this.reg_Msg = res
          if(this.reg_Obj.status === 0){
            this.toastr.success(this.reg_Msg.msg,'', { timeOut: 3000 });
            this.router.navigate(['/signup']);  
          }   
          else{
            this.toastr.success(this.reg_Msg.msg,'', { timeOut: 2000 });
            this.router.navigate(['/login'])
          }
      });
       }
    })
    }
    /*==========Register Add Api End Here========*/
  
    /*==========Password Show/Hide Function Start Here========*/
    showHidePassword(){
      this.showHideBtn = this.showHideBtn === false;
    }
    /*==========Password Show/Hide Function End Here========*/
  

}
