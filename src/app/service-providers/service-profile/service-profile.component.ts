import { enableRipple } from '@syncfusion/ej2-base';
import { Component, Inject, ElementRef, ViewChild, NgZone, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpService } from 'src/app/services/http.service';
import { ValidationsService } from 'src/app/services/validations.service';
import { ToastrService } from 'ngx-toastr';
import { VariableService } from "./../../services/variable.service";
import { FunctionService } from "../../services/function.service";
import * as moment from 'moment';
import { environment } from 'src/environments/environment';

declare var $;
import { ApiService, Maps } from 'src/app/services/api.service';
const place = null as google.maps.places.PlaceResult;

import { TranslateService } from '@ngx-translate/core';


@Component({
  selector: 'app-service-profile',
  templateUrl: './service-profile.component.html',
  styleUrls: ['./service-profile.component.css']
})
export class ServiceProfileComponent implements OnInit {
  lat = 0;
  lng = 0;
  locationn = ''
  providerType;
  @ViewChild("search")
  public searchElementRef: ElementRef;
  public place: google.maps.places.PlaceResult;
  image_path = environment.image_path


  stepForm: FormGroup;
  submitted: boolean;
  public TeamSizeHide;
  team_size_valid = false;
  password_valid = false;
  passwordForm: FormGroup;
  language;
  public formatString: string = 'HH:mm';
  public interval: number = 30;
  public postData;
  public postObj;
  public serviceId;
  public service_Obj;
  public basicInfo;
  public serviceInfo;
  public postVal;
  public serUpdateData;
  public serUpdate_Msg;
  public additional_Obj;
  public img_choose_Obj;
  public img_add_Obj;
  public img = [];
  public fileTYpe = ['image/jpg', 'image/jpeg', 'image/png', 'application/pdf'];
  public doc_file = [];
  public imgtype;
  public temp;
  public imgPdf = [];
  public resDoc = [];
  public isDocDelete = [];
  public isAppUser = true;
  add_obj;
  url1: any = '';
  url12: any = '';
  selectedFile: File = null;
  ImageId = [];
  selectProfileImg;
  selectProfileImage = false;
  imageSelect1 = true;
  passwordCheck;
  modal;
  newPaswrdCheck;
  finalCl = [];
  public showHidePass = true;
  public showHideConfirmPass = true;
  constructor(
    private fb: FormBuilder,
    private router: Router,
    public service: HttpService,
    public validation: ValidationsService,
    private toastr: ToastrService,
    public func: FunctionService,
    public translate: TranslateService,
    public variable: VariableService,
    public apiService: ApiService, private ngZone: NgZone
  ) { 
    translate.setDefaultLang('en');
  }

  useLanguage(language: string) {
    localStorage.setItem('language', language);
    this.translate.use(language);
    this.getImgChooseSerList();
  }
  
  ngOnInit() {
    if (localStorage.getItem('language') == null) this.useLanguage('en');
    this.variable.login = false;
    this.variable.logout = true;
    this.serviceId = JSON.parse(localStorage.getItem('userId'));
    this.createForm1();
    this.editProfileForm();
    this.postCodeList();
    this.getImgChooseSerList();
    // this.getImgAddSerList();
    this.paswrdChangeForm();

    console.log(this.isEnabled())
    this.apiService.api.then(maps => {
      this.initAutocomplete(maps);
    });
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
    this.lat = place.geometry.location.lat();
    this.lng = place.geometry.location.lng();
    this.locationn = place.name
    this.stepForm.patchValue({ pin_code: place.name })

  }

  /*==========Step Form1 Value Start Here========*/
  createForm1() {
    this.stepForm = this.fb.group({
      email: ['', this.validation.email_validator],
      name: ['', this.validation.name_validation],
      mobile: ['', this.validation.mobile_validator],
      password: ['', this.password_valid ? this.validation.password_validator : false],
      image: [],
      pin_code: [this.locationn, this.validation.onlyRequired_validator],
      provider_type: [''],
      team_size: ['', this.team_size_valid ? this.validation.onlyRequired_validator : false],
      vat_number: ['', this.validation.onlyRequired_validator],
      // banker_name: ['', this.validation.onlyRequired_validator],
      iban_number: ['', this.validation.onlyRequired_validator],
      // bank_name: ['', this.validation.onlyRequired_validator],
      // account_number: ['', this.validation.onlyRequired_validator],
      // rate_per_hour: ['',this.validation.onlyRequired_validator],
      service_id: [''],
      doc_name: [''],
      monday_start: [''],
      monday_end: [''],
      isAvailableMonday: [],
      tuesday_start: [''],
      tuesday_end: [''],
      isAvailableTuesday: [''],
      wednesday_start: [''],
      wednesday_end: [''],
      isAvailableWednesday: [''],
      thusday_start: [''],
      thusday_end: [''],
      isAvailableThusday: [''],
      friday_start: [''],
      friday_end: [''],
      isAvailableFriday: [''],
      saturday_start: [''],
      saturday_end: [''],
      isAvailableSaturday: [''],
      sunday_start: [''],
      sunday_end: [''],
      isAvailableSunday: ['']

    })
  }

  paswrdChangeForm() {
    this.passwordForm = this.fb.group({
      newPass: ['', this.validation.password_validator],
      conformPass: ['', this.validation.onlyRequired_validator]
    }, { validator: this.MustMatch('newPass', 'conformPass') })
  }
  /*==========Step Form1 Value Start Here========*/


  /*==========Match Password and Confirm Password Validation Code Start Here========*/
  MustMatch(controlName: string, matchingControlName: string) {
    return (formGroup: FormGroup) => {
      const control = formGroup.controls[controlName];
      const matchingControl = formGroup.controls[matchingControlName];

      if (matchingControl.errors && !matchingControl.errors.mustMatch) {
        // return if another validator has already found an error on the matchingControl
        return;
      }

      // set error on matchingControl if validation fails
      if (control.value !== matchingControl.value) {
        matchingControl.setErrors({ mustMatch: true });
      } else {
        matchingControl.setErrors(null);
      }
    }
  }
  /*==========Match Password and Confirm Password Validation Code End Here========*/

  public_type() {
    this.TeamSizeHide = true;
    this.team_size_valid = true;
  }
  individual_type() {
    this.TeamSizeHide = false;
    this.team_size_valid = false;
  }
  private_type() {
    this.TeamSizeHide = false;
    this.team_size_valid = false;
  }
  isEnabled() {
    return true
  }

  checkpass() {
    $('#exampleModal').modal('hide');
    if (this.stepForm.value.password == '') {
      this.toastr.error('Enter current password.')
      return
    } {
      if (this.stepForm.value.password.length < 5) {
        this.toastr.error("Password must be greater than 5 digits.")
        return
      } else {

        this.password_valid = true;
        this.service.checkPassword(this.stepForm.value.password, this.serviceId).subscribe(result => {
          console.log("passssssssssssss", result);
          this.passwordCheck = result;
          console.log("wwwwwwww", this.passwordCheck);
          if (this.passwordCheck.status === 1) {
            $('#exampleModal').modal('show');
          }
          else {
            this.toastr.error("Invalid Current Password", '', { timeOut: 2000 });
            $('#exampleModal').modal('hide');
          }
        })
      }
    }
  }

  paswrdSubmit() {
    this.password_valid = true;
    const form_data = this.passwordForm.value;
    this.submitted = true;
    if (this.passwordForm.invalid) {
      return;
    }
    this.submitted = false;
    console.log(this.passwordForm.value);
    this.service.confrmPaswrdChange(this.passwordForm.value, this.serviceId).subscribe(pass => {
      this.newPaswrdCheck = pass;
      if (this.newPaswrdCheck.status == 1) {
        $('#exampleModal').modal('hide');
        this.variable.login = true;
        this.variable.logout = false;
        this.variable.user_type = null;
        localStorage.clear();
        this.router.navigateByUrl('/service-providers/service-profile', { skipLocationChange: true }).then(() => this.router.navigate(["login"]));
        this.toastr.success(this.newPaswrdCheck.msg, '', { timeOut: 2000 });
      } else {
        this.toastr.error(this.newPaswrdCheck.msg, '', { timeOut: 2000 });
      }
    })
  }

  /*==========Password Show/Hide Function Start Here========*/
  showHideChangePaswrd() {
    this.showHidePass = this.showHidePass === false;
  }
  showHideConfirm() {
    this.showHideConfirmPass = this.showHideConfirmPass === false;
  }
  /*==========Password Show/Hide Function End Here========*/
  postCheck() {
    this.service.getPostCodeCheck(this.stepForm.value.pin_code_id).subscribe(msg => {
      console.log("api response", msg);
      this.postData = msg;
      if (this.postData.status === 1) {
        this.postObj = msg.data[0];
        console.log("JSON", this.postObj.id);
        this.postData = msg;
        localStorage.setItem("postId", this.postObj.id);
      }
    });
  }

  /*========== Step Form2 Image List Start Here========*/
  getImgChooseSerList() {
    this.language = localStorage.getItem('language')
    this.service.getStepTwoChooseSer(this.language)
      .subscribe(result => {
        this.img_choose_Obj = result['data'];
      });

  }
  /*========== Step Form2 Image List End Here========*/

  /*========== Step Form2 Add Image List Start Here========*/
  getImgAddSerList() {
    this.service.getStepTwoAdditional().subscribe(res => {
      this.img_add_Obj = res['data'];
    });
  }
  /*========== Step Form2 Add Image List End Here========*/

  /*==========Multiple Image Function Start Here========*/
  onFileChange(event) {
    if (event.target.files && event.target.files[0]) {
      var filesAmount = event.target.files.length;
      var fileName = event.target.files[0].name;
      var totlength = this.resDoc.length + filesAmount
      console.log("totlength", totlength);
      if (totlength > 4) {
        this.toastr.error('You can not upload more than 4 files');
        return false;
      }
      for (let i = 0; i < filesAmount; i++) {
        var reader = new FileReader();
        const fType = event.target.files[i].type;
        const type = this.fileTYpe.find(function (element) {
          if (element === fType) {
            return true;
          }
        });
        reader.onload = (event: any) => {
          if (fType === 'application/pdf' || fType === 'pdf') {
            this.imgPdf.push({ doc_name: event.target.result });
            this.resDoc.push({ doc_name: "./assets/images/pdf.png" })
            console.log("this.resDoc", this.resDoc)
          }
          else {
            // if(fType === 'application/msword' || fType === 'msword'){

            // this.imgPdf.push({doc_name: event.target.result});
            // this.resDoc.push({doc_name: "./assets/images/doc.png"});
            // }
            // else{
            this.resDoc.push({ doc_name: event.target.result });
            this.imgPdf.push({ doc_name: event.target.result });
            // }                  
          }
        }

        this.doc_file.push(event.target.files[i]);
        this.imgtype = event.target.files[i].type;
        reader.readAsDataURL(event.target.files[i]);
      }
    }
  }

  closeImage(i, id) {
    this.resDoc.splice(i, 1);
    this.doc_file.splice(i, 1);
    if (id != undefined) {
      this.isDocDelete.push(id)
    }
  }

  postCodeList() {
    this.service.getPostCode()
      .subscribe(res => {
        this.postObj = res['data'];
      });
  }

  onChangePin(id) {
    this.postVal = id.target.value;
  }

  updateIndividucalFIn(e, id) {
    if (e == true) {
    // this.stepForm.value.provider_type = id
    this.providerType = id;
    }

  }
  /*========== Edit Input Value Start Here========*/

  patchValue() {

    if (this.basicInfo.provider_type == 1) {

      var b = document.getElementById("individual") as HTMLInputElement
      b.checked = true

    }
    if (this.basicInfo.provider_type == 2) {
      var c = document.getElementById("public") as HTMLInputElement
      c.checked = true
    }
    if (this.basicInfo.provider_type == 3) {
      var f = document.getElementById("private") as HTMLInputElement
      f.checked = true
    }



    this.lat = this.basicInfo.latitude;
    this.lng = this.basicInfo.longitude;
    this.locationn = this.basicInfo.location;


    this.stepForm.get('email').patchValue(this.basicInfo.email);
    this.stepForm.get('name').patchValue(this.basicInfo.name);
    this.stepForm.get('mobile').patchValue(this.basicInfo.mobile);
    this.stepForm.get('image').patchValue(this.basicInfo.image);
    this.stepForm.get('pin_code').patchValue(this.basicInfo.location);
    this.stepForm.get('provider_type').patchValue(this.basicInfo.provider_type);
    this.providerType = this.stepForm.value.provider_type;
    this.stepForm.get('vat_number').patchValue(this.basicInfo.vat_number);

    // this.stepForm.get('banker_name').patchValue(this.basicInfo.banker_name);
    // this.stepForm.get('bank_name').patchValue(this.basicInfo.bank_name);
    this.stepForm.get('iban_number').patchValue(this.basicInfo.iban_number);
    // this.stepForm.get('account_number').patchValue(this.basicInfo.account_number);
    if (this.basicInfo.provider_type == 2) {
      this.TeamSizeHide = true;
      this.stepForm.get('team_size').patchValue(this.basicInfo.team_size);
    }else{
      this.stepForm.get('team_size').patchValue('');
    }

    // this.stepForm.get('rate_per_hour').patchValue( this.basicInfo.rate_per_hour);
    this.stepForm.get('monday_start').patchValue(this.service_Obj.monday_start);
    this.stepForm.get('isAvailableMonday').patchValue(this.service_Obj.isAvailableMonday);
    this.stepForm.get('monday_end').patchValue(this.service_Obj.monday_end);
    this.stepForm.get('tuesday_start').patchValue(this.service_Obj.tuesday_start);
    this.stepForm.get('isAvailableTuesday').patchValue(this.service_Obj.isAvailableTuesday);
    this.stepForm.get('tuesday_end').patchValue(this.service_Obj.tuesday_end);
    this.stepForm.get('wednesday_start').patchValue(this.service_Obj.wednesday_start);
    this.stepForm.get('isAvailableWednesday').patchValue(this.service_Obj.isAvailableWednesday);
    this.stepForm.get('wednesday_end').patchValue(this.service_Obj.wednesday_end);
    this.stepForm.get('thusday_start').patchValue(this.service_Obj.thusday_start);
    this.stepForm.get('isAvailableThusday').patchValue(this.service_Obj.isAvailableThusday);
    this.stepForm.get('thusday_end').patchValue(this.service_Obj.thusday_end);
    this.stepForm.get('friday_start').patchValue(this.service_Obj.friday_start);
    this.stepForm.get('isAvailableFriday').patchValue(this.service_Obj.isAvailableFriday);
    this.stepForm.get('friday_end').patchValue(this.service_Obj.friday_end);
    this.stepForm.get('saturday_start').patchValue(this.service_Obj.saturday_start);
    this.stepForm.get('isAvailableSaturday').patchValue(this.service_Obj.isAvailableSaturday);
    this.stepForm.get('saturday_end').patchValue(this.service_Obj.saturday_end);
    this.stepForm.get('sunday_start').patchValue(this.service_Obj.sunday_start);
    this.stepForm.get('isAvailableSunday').patchValue(this.service_Obj.isAvailableSunday);
    this.stepForm.get('sunday_end').patchValue(this.service_Obj.sunday_end);
  }
  /*==========Edit Input Value End Here========*/


  editProfileForm() {
    this.service.getEditServiceProfile(this.serviceId).subscribe(res => {
      this.service_Obj = res['data'][0];

      // if(this.service_Obj.isAvailableMonday == true) {
      //     this.temp = true;
      // }
      // else {
      //   this.temp = false;
      // }
      // this.service_Obj.isAvailableMonday = this.temp;
      localStorage.setItem('BasicInfo', JSON.stringify(this.service_Obj));

      for (const x of this.service_Obj.docData) {
        var pdf = x.doc_name.indexOf(".pdf");
        var msword = x.doc_name.indexOf(".doc");
        if (pdf != -1) {
          this.resDoc.push({ id: x.id, verification_id: x.verification_id, doc_name: "./assets/images/pdf.png" });
          this.imgPdf.push(x);
        } else {
          if (msword != -1) {
            this.resDoc.push({ id: x.id, verification_id: x.verification_id, doc_name: "./assets/images/doc.png" });
            this.imgPdf.push(x);
          } else {

            this.resDoc.push(x);
            this.imgPdf.push(x);
          }
        }
      }

      this.basicInfo = this.service_Obj['data']['0'];
      this.serviceInfo = this.service_Obj['serviceData'];
      for (let index = 0; index < this.serviceInfo.length; index++) {
        this.finalCl.push(this.serviceInfo[index].id);
      }

      this.func.setBack();
      if(this.basicInfo.provider_type == 2){
        this.TeamSizeHide = true;
      }
      this.patchValue();
      localStorage.setItem('BasicInfo', JSON.stringify(this.basicInfo));
      localStorage.setItem('ServiceInfo', JSON.stringify(this.serviceInfo));
    });
  }

  /*==========Update Start Here========*/

  /*==========Single Image Function Start Here========*/
  onSingleFileChange(event) {
    // this.selectImage = true;
    // this.selectImg = false;
    this.selectedFile = <File>event.target.files[0]
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]); // read file as data url
      reader.onload = (event) => { // called once readAsDataURL is completed
        this.url1 = event.target.result;
      }
    }
  }
  /*==========Single Image Function End Here========*/


  chooseServices(id) {
    if (this.finalCl.length) {
      var a = this.finalCl.includes(id);
      if (a) {
        var b = this.finalCl.indexOf(id)
        console.log("index", b);
        var c = this.finalCl.splice(b, 1);
        console.log("array", this.finalCl);
        console.log("delete", c);
      } else {
        this.finalCl.push(id);

      }
    } else {
      this.finalCl.push(id);

    }

  }


  addServices(id) {
    if (this.finalCl.length) {
      var a = this.finalCl.includes(id);
      if (a) {
        var b = this.finalCl.indexOf(id)
        var c = this.finalCl.splice(b, 1);
      } else {
        this.finalCl.push(id);
        console.log("push", this.finalCl);
      }
    } else {
      this.finalCl.push(id);
      console.log("push", this.finalCl);
    }

  }

  /*==========Single Image Function Start Here========*/
  onSingleFileProfileChange(event) {
    this.imageSelect1 = false;
    this.selectProfileImg = false;
    this.selectProfileImage = true;
    this.selectedFile = <File>event.target.files[0]
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]); // read file as data url
      reader.onload = (event) => { // called once readAsDataURL is completed
        this.url12 = event.target.result;
      }
    }
  }
  /*==========Single Image Function End Here========*/

  submitForm3() {
    if(this.providerType == 2 && this.stepForm.value.team_size == '' || this.stepForm.value.team_size == null){
      this.toastr.error("Team size is required", '', { timeOut: 2000 });
      return
    }
    const form_data = this.stepForm.value;
    this.submitted = true;
    if (this.stepForm.invalid) {
      return;
    }
    this.submitted = false;
    

    if ((this.stepForm.value.monday_start == null && this.stepForm.value.monday_end == null) &&
      (this.stepForm.value.tuesday_start == null && this.stepForm.value.tuesday_end == null) &&
      (this.stepForm.value.wednesday_start == null && this.stepForm.value.wednesday_end == null) &&
      (this.stepForm.value.thusday_start == null && this.stepForm.value.thusday_end == null) &&
      (this.stepForm.value.friday_start == null && this.stepForm.value.friday_end == null) &&
      (this.stepForm.value.saturday_start == null && this.stepForm.value.saturday_end == null) &&
      (this.stepForm.value.sunday_start == null && this.stepForm.value.sunday_end == null)) {
      this.toastr.error("Time Slot is required", '', { timeOut: 2000 });
      return false;
    }
    else {
      const formData: any = new FormData();
      if (this.resDoc.length === 0) {
        this.toastr.error("Id Proof is reqiured", '', { timeOut: 2000 });
        return false;
      }
      else {
        for (let img of this.doc_file) {
          console.log("doc_name", img);
          formData.append('doc_name', img);
        }
      }
      for (let id of this.isDocDelete) {
        console.log("imageeeeeee", id);
        formData.append('isDocDelete[]', id);
      }
      if (this.finalCl.length === 0) {
        this.toastr.error("Select services", '', { timeOut: 2000 });
        return false;
      } else {
        for (let id of this.finalCl) {
          formData.append('service_id[]', id);
        }
      }
      // this.stepForm.value.pin_code_id = this.postVal;


      this.stepForm.value.image = this.selectedFile;

      formData.append('name', this.stepForm.value.name);

      formData.append('lat', this.lat);
      formData.append('lng', this.lng);
      formData.append('location', this.locationn);

      formData.append('email', this.stepForm.value.email);

      formData.append('mobile', this.stepForm.value.mobile);

      formData.append('image', this.selectedFile);
      formData.append('pin_code_id', this.postVal);
      formData.append('provider_type', this.providerType);
     
      formData.append('team_size', this.stepForm.value.team_size);
      formData.append('vat_number', this.stepForm.value.vat_number);

      formData.append('banker_name', this.stepForm.value.banker_name);
      formData.append('bank_name', this.stepForm.value.bank_name);
      formData.append('account_number', this.stepForm.value.account_number);
      formData.append('iban_number', this.stepForm.value.iban_number);
      // formData.append('rate_per_hour', this.stepForm.value.rate_per_hour);

      if (this.stepForm.value.monday_start != undefined || this.stepForm.value.monday_end != undefined) {

        formData.append('isAvailableMonday', this.stepForm.value.isAvailableMonday);
        formData.append('monday_start', moment(this.stepForm.value.monday_start).format("HH:mm"));
        formData.append('monday_end', moment(this.stepForm.value.monday_end).format("HH:mm"));
      }
      if (this.stepForm.value.wednesday_start != undefined || this.stepForm.value.wednesday_end != undefined) {
        formData.append('isAvailableWednesday', this.stepForm.value.isAvailableWednesday);
        formData.append('wednesday_start', moment(this.stepForm.value.wednesday_start).format("HH:mm"));
        formData.append('wednesday_end', moment(this.stepForm.value.wednesday_end).format("HH:mm"));
      }
      if (this.stepForm.value.tuesday_start != undefined || this.stepForm.value.tuesday_end != undefined) {
        formData.append('isAvailableTuesday', this.stepForm.value.isAvailableTuesday);
        formData.append('tuesday_start', moment(this.stepForm.value.tuesday_start).format("HH:mm"));
        formData.append('tuesday_end', moment(this.stepForm.value.tuesday_end).format("HH:mm"));
      }
      if (this.stepForm.value.thusday_start != undefined || this.stepForm.value.thusday_end != undefined) {
        formData.append('isAvailableThusday', this.stepForm.value.isAvailableThusday);
        formData.append('thusday_start', moment(this.stepForm.value.thusday_start).format("HH:mm"));
        formData.append('thusday_end', moment(this.stepForm.value.thusday_end).format("HH:mm"));
      }
      if (this.stepForm.value.friday_start != undefined || this.stepForm.value.friday_end != undefined) {
        formData.append('isAvailableFriday', this.stepForm.value.isAvailableFriday);
        formData.append('friday_start', moment(this.stepForm.value.friday_start).format("HH:mm"));
        formData.append('friday_end', moment(this.stepForm.value.friday_end).format("HH:mm"));
      }
      if (this.stepForm.value.saturday_start != undefined || this.stepForm.value.saturday_end != undefined) {
        formData.append('isAvailableSaturday', this.stepForm.value.isAvailableSaturday);
        formData.append('saturday_start', moment(this.stepForm.value.saturday_start).format("HH:mm"));
        formData.append('saturday_end', moment(this.stepForm.value.saturday_end).format("HH:mm"));
      }
      if (this.stepForm.value.sunday_start != undefined || this.stepForm.value.sunday_end != undefined) {
        formData.append('isAvailableSunday', this.stepForm.value.isAvailableSunday);
        formData.append('sunday_start', moment(this.stepForm.value.sunday_start).format("HH:mm"));
        formData.append('sunday_end', moment(this.stepForm.value.sunday_end).format("HH:mm"));
      }



      if (this.stepForm.value.isAvailableMonday == true && this.stepForm.value.monday_start == undefined && this.stepForm.value.monday_end == undefined) {
        this.toastr.error('Monday start time and Monday end time are required')
        return
      }
      if ((this.stepForm.value.isAvailableMonday == undefined || this.stepForm.value.isAvailableMonday == false) && this.stepForm.value.monday_start != undefined && this.stepForm.value.monday_end != undefined) {
        this.toastr.error('Monday availability is required')
        return
      }
      if (this.stepForm.value.monday_start != undefined || this.stepForm.value.monday_end != undefined) {
        if (this.stepForm.value.monday_end == undefined || this.stepForm.value.monday_start == undefined) {
          if (this.stepForm.value.monday_end == undefined) {
            this.toastr.error('Monday end time is required')
            return
          } else {
            this.toastr.error('Monday start time is required')
            return
          }
        } else {
          if (new Date(this.stepForm.value.monday_start) > new Date(this.stepForm.value.monday_end)) {
            this.toastr.error('Monday end time is greater than start time')
            return
          }
        }
      }


      if (this.stepForm.value.isAvailableTuesday == true && this.stepForm.value.tuesday_start == undefined && this.stepForm.value.tuesday_end == undefined) {
        this.toastr.error('Tuesday start time and Tuesday end time are required')
        return
      }
      if ((this.stepForm.value.isAvailableTuesday == undefined || this.stepForm.value.isAvailableTuesday == false) && this.stepForm.value.tuesday_start != undefined && this.stepForm.value.tuesday_end != undefined) {
        this.toastr.error('Tuesday availability is required')
        return
      }
      if (this.stepForm.value.tuesday_start != undefined || this.stepForm.value.tuesday_end != undefined) {
        if (this.stepForm.value.tuesday_end == undefined || this.stepForm.value.tuesday_start == undefined) {
          if (this.stepForm.value.tuesday_end == undefined) {
            this.toastr.error('Tuesday end time is required')
            return
          } else {
            this.toastr.error('Tuesday start time is required')
            return
          }
        } else {
          if (new Date(this.stepForm.value.tuesday_start) > new Date(this.stepForm.value.tuesday_end)) {
            this.toastr.error('Tuesday end time is greater than start time')
            return
          }
        }
      }

      if (this.stepForm.value.isAvailableWednesday == true && this.stepForm.value.wednesday_start == undefined && this.stepForm.value.wednesday_end == undefined) {
        this.toastr.error('Wednesday start time and Wednesday end time are required')
        return
      }
      if ((this.stepForm.value.isAvailableWednesday == undefined || this.stepForm.value.isAvailableWednesday == false) && this.stepForm.value.wednesday_start != undefined && this.stepForm.value.wednesday_end != undefined) {
        this.toastr.error('Wednesday availability is required')
        return
      }
      if (this.stepForm.value.wednesday_start != undefined || this.stepForm.value.wednesday_end != undefined) {
        if (this.stepForm.value.wednesday_end == undefined || this.stepForm.value.wednesday_start == undefined) {
          if (this.stepForm.value.wednesday_end == undefined) {
            this.toastr.error('Wednesday end time is required')
            return
          } else {
            this.toastr.error('Wednesday start time is required')
            return
          }
        } else {
          if (new Date(this.stepForm.value.wednesday_start) > new Date(this.stepForm.value.wednesday_end)) {
            this.toastr.error('Wednesday end time is greater than start time')
            return
          }
        }
      }
      if ((this.stepForm.value.isAvailableThusday == undefined || this.stepForm.value.isAvailableThusday == false) && this.stepForm.value.thusday_start != undefined && this.stepForm.value.thusday_end != undefined) {
        this.toastr.error('Thursday availability is required')
        return
      }
      if (this.stepForm.value.isAvailableThusday == true && this.stepForm.value.thusday_start == undefined && this.stepForm.value.thusday_end == undefined) {
        this.toastr.error('Thursday start time and Thursday end time are required')
        return
      }
      if (this.stepForm.value.thusday_start != undefined || this.stepForm.value.thusday_end != undefined) {
        if (this.stepForm.value.thusday_end == undefined || this.stepForm.value.thusday_start == undefined) {
          if (this.stepForm.value.thusday_end == undefined) {
            this.toastr.error('Thursday end time is required')
            return
          } else {
            this.toastr.error('Thursday start time is required')
            return
          }
        } else {
          if (new Date(this.stepForm.value.thusday_start) > new Date(this.stepForm.value.thusday_end)) {
            this.toastr.error('Thursday end time is greater than start time')
            return
          }
        }
      }

      if (this.stepForm.value.isAvailableFriday == true && this.stepForm.value.friday_start == undefined && this.stepForm.value.friday_end == undefined) {
        this.toastr.error('Friday start time and Friday end time are required')
        return
      }
      if ((this.stepForm.value.isAvailableFriday == undefined || this.stepForm.value.isAvailableFriday == false) && this.stepForm.value.friday_start != undefined && this.stepForm.value.friday_end != undefined) {
        this.toastr.error('Friday availability is required')
        return
      }
      if (this.stepForm.value.friday_start != undefined || this.stepForm.value.friday_end != undefined) {
        if (this.stepForm.value.friday_end == undefined || this.stepForm.value.friday_start == undefined) {
          if (this.stepForm.value.friday_end == undefined) {
            this.toastr.error('Friday end time is required')
            return
          } else {
            this.toastr.error('Friday start time is required')
            return
          }
        } else {
          if (new Date(this.stepForm.value.friday_start) > new Date(this.stepForm.value.friday_end)) {
            this.toastr.error('Friday end time is greater than start time')
            return
          }
        }
      }

      if (this.stepForm.value.isAvailableSaturday == true && this.stepForm.value.saturday_start == undefined && this.stepForm.value.saturday_end == undefined) {
        this.toastr.error('Saturday start time and Saturday end time are required')
        return
      }
      if ((this.stepForm.value.isAvailableSaturday == undefined || this.stepForm.value.isAvailableSaturday == false) && this.stepForm.value.saturday_start != undefined && this.stepForm.value.saturday_end != undefined) {
        this.toastr.error('Saturday availability is required')
        return
      }
      if (this.stepForm.value.saturday_start != undefined || this.stepForm.value.saturday_end != undefined) {
        if (this.stepForm.value.saturday_end == undefined || this.stepForm.value.saturday_start == undefined) {
          if (this.stepForm.value.saturday_end == undefined) {
            this.toastr.error('Saturday end time is required')
            return
          } else {
            this.toastr.error('Saturday start time is required')
            return
          }
        } else {
          if (new Date(this.stepForm.value.saturday_start) > new Date(this.stepForm.value.saturday_end)) {
            this.toastr.error('Saturday end time is greater than start time')
            return
          }
        }
      }
      if (this.stepForm.value.isAvailableSunday == true && this.stepForm.value.sunday_start == undefined && this.stepForm.value.sunday_end == undefined) {
        this.toastr.error('Sunday start time and Sunday end time are required')
        return
      }
      if ((this.stepForm.value.isAvailableSunday == undefined || this.stepForm.value.isAvailableSunday == false) && this.stepForm.value.sunday_start != undefined && this.stepForm.value.sunday_end != undefined) {
        this.toastr.error('Sunday availability is required')
        return
      }
      if (this.stepForm.value.sunday_start != undefined || this.stepForm.value.sunday_end != undefined) {
        if (this.stepForm.value.sunday_end == undefined || this.stepForm.value.sunday_start == undefined) {
          if (this.stepForm.value.sunday_end == undefined) {
            this.toastr.error('Sunday end time is required')
            return
          } else {
            this.toastr.error('Sunday start time is required')
            return
          }
        } else {
          if (new Date(this.stepForm.value.sunday_start) > new Date(this.stepForm.value.sunday_end)) {
            this.toastr.error('Sunday end time is greater than start time')
            return
          }
        }
      }

      // if (this.stepForm.value.isAvailableMonday == undefined || this.stepForm.value.sunday_end != undefined) {
      //   if (this.stepForm.value.sunday_end == undefined || this.stepForm.value.sunday_start == undefined) {
      //     if (this.stepForm.value.sunday_end == undefined) {
      //       this.toastr.error('Sunday end time is required')
      //       return
      //     } else {
      //       this.toastr.error('Sunday start time is required')
      //       return
      //     }
      //   } else {
      //     if (new Date(this.stepForm.value.sunday_start) > new Date(this.stepForm.value.sunday_end)) {
      //       this.toastr.error('Sunday end time is greater than start time')
      //       return
      //     }
      //   }
      // }


      this.service.getUpdateServiceProfile(formData, this.serviceId)
        .subscribe(res => {
          this.toastr.success(res['msg'])
          this.service.getEditServiceProfile(this.serviceId).subscribe(res => {
            console.log("res[]", res['data'][0]);
            this.service_Obj = res['data'][0]
            localStorage.setItem('BasicInfo', JSON.stringify(this.service_Obj['data'][0]));
            // setTimeout(function(){ location.reload()}, 1000);
            // localStorage.setItem('BasicInfo', JSON.stringify(this.service_Obj));
            this.serUpdate_Msg = res;
            this.imageSelect1 = false;
            this.router.navigateByUrl('/login', { skipLocationChange: true }).then(() => {
              this.router.navigate(['service-providers/service-profile']);
            });
          })
        });
    }
  }
  newTabImage(i) {
    const win = window.open("", "_blank");
    let html = '';
    html += '<html>';
    html += '<body style="margin:0!important">';
    html += '<embed width="100%" height="100%" src="' + this.imgPdf[i].doc_name + '" type="application/pdf" />';
    html += '</body>';
    html += '</html>';
    setTimeout(() => {
      win.document.write(html);
    }, 1);
  }
  /*==========Update End Here========*/
}
