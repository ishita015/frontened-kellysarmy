import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpService } from 'src/app/services/http.service';
import { ValidationsService } from 'src/app/services/validations.service';
import { ToastrService } from 'ngx-toastr';
import { VariableService } from "./../../../services/variable.service";
import { FunctionService } from "../../../services/function.service";
import { enableRipple } from '@syncfusion/ej2-base';
import * as moment from 'moment';
import { Component, Inject, ElementRef, ViewChild, NgZone, OnInit } from '@angular/core';
import { ApiService, Maps } from 'src/app/services/api.service';
const place = null as google.maps.places.PlaceResult;
import { TranslateService } from '@ngx-translate/core';
//enable ripple style
enableRipple(true);
declare var $;
@Component({
  selector: 'app-step1',
  templateUrl: './step1.component.html',
  styleUrls: ['./step1.component.css']
})
export class Step1Component implements OnInit {
  @ViewChild("searchhh")
  public searchElementRef: ElementRef;
  public place: google.maps.places.PlaceResult;

  stepOneForm: FormGroup;
  stepThreeForm: FormGroup;
  stepTwoForm: FormGroup;
  submitted: boolean;

  public formatString: string = 'HH:mm';
  public interval: number = 30;
  public showHideBtn = true;
  public formData;
  public step1 = true;

  // stepform2 variable 
  public service_obj;
  public additional_obj
  public TeamSize;
  imageId = [];
  addImageId = [];
  formDataTwo;
  // data ={};
  public step2;

  // public resultname: any = '';
  images = [];
  previewImg = [];
  doc = [];
  public step3;
  public step4;
  public reg_Json;
  public selected;
  // start;
  // end;
  public email_value;
  public email_msgs;
  team_valid = false;
  public startTime;
  public reg_msg;
  public post_value;
  public post_obj;
  // PostId;
  selectedFile: File = null;
  public postObj;
  public fileTYpe = ['image/jpg', 'image/jpeg', 'image/png', 'application/pdf'];
  public fileimagetype;

  // logoPreview;
  selectDoc = false;
  public newpostVal;
  url: any = '';
  selectImg;
  language;
  selectImage = false;
  constructor(private fb: FormBuilder,
    private router: Router,
    public service: HttpService,
    public validation: ValidationsService,
    private toastr: ToastrService,
    public translate: TranslateService,
    public func: FunctionService,
    public variable: VariableService, public apiService: ApiService, private ngZone: NgZone
  ) {
    translate.setDefaultLang('en');
  }
  useLanguage(language: string) {
    localStorage.setItem('language', language);
    this.translate.use(language);

  }

  ngOnInit() {
    if (localStorage.getItem('language') == null) this.useLanguage('en');
    this.createForm1();
    this.createForm2();
    this.getPhoneCode();
    this.createForm3();
    this.getImageChooseSerList();
    this.getImageAdditionalSerList();
    this.postCodeList();
    this.apiService.api.then(maps => {
      this.initAutocomplete(maps);
    });
    this.func.setBack();

    var reffer_code_a = window.location.href.split('step1/')[1];
    if (reffer_code_a != undefined) {
      this.variable.login = true;
      this.variable.logout = false;
      localStorage.clear();
      if (reffer_code_a.search("fbclid") == -1) {
        this.stepOneForm.patchValue({ reffer_by_code: reffer_code_a })
      } else {
        this.stepOneForm.patchValue({ reffer_by_code: reffer_code_a.split('?fbclid')[0] })
      }
    }
  }

  phoneCodeData = [];
  getPhoneCode() {
    this.service.get('/api/get-phonecode').subscribe(res => {
      this.phoneCodeData = res['data']
    })
  }
  /*==========Step Form1 Value Start Here========*/
  createForm1() {
    this.stepOneForm = this.fb.group({
      email: ['', this.validation.email_validator],
      password: ['', this.validation.password_validator],
      name: ['', this.validation.name_validation],
      mobile: ['', this.validation.mobile_validator],
      phonecode: ['', Validators.required],
      image: [],
      reffer_by_code: [],
    })
  }
  /*==========Step Form1 Value Start Here========*/

  /*========== Step Form2 Value Start Here========*/
  createForm2() {
    this.stepTwoForm = this.fb.group({
      pin_code_id: ['0'],
      location: ['', this.validation.onlyRequired_validator],
      provider_type: ['', this.validation.onlyRequired_validator],
      team_size: ['', this.validation.onlyRequired_validator],

      vat_number: ['', this.validation.onlyRequired_validator],
      // banker_name: ['', this.validation.onlyRequired_validator],
      iban_number: ['', this.validation.onlyRequired_validator],
      // bank_name: ['', this.validation.onlyRequired_validator],
      // account_number: ['', this.validation.onlyRequired_validator],
      // rate_per_hour: ['',this.validation.onlyRequired_validator],
      service_id: [''],
      doc_name: [''],
    })
  }
  /*========== Step Form2 Value End Here========*/

  /*========== Step Form3 Value Start Here========*/
  createForm3() {
    this.stepThreeForm = this.fb.group({
      monday_start: [''],
      monday_end: [''],
      tuesday_start: [''],
      tuesday_end: [''],
      wednesday_start: [''],
      wednesday_end: [''],
      thusday_start: [''],
      thusday_end: [''],
      friday_start: [''],
      friday_end: [''],
      saturday_start: [''],
      saturday_end: [''],
      sunday_start: [''],
      sunday_end: [''],
    })
  }
  /*========== Step Form3 Value End Here========*/

  /*========== Step Form2 Image List Start Here========*/
  getImageChooseSerList() {
    this.language = localStorage.getItem('language');
    this.service.getStepTwoChooseSer(this.language)
      .subscribe(res => {
        this.service_obj = res['data'];
        this.service_obj.map(obj => { obj.selected = "Choose";})
      });

  }
  /*========== Step Form2 Image List End Here========*/


  lat = 0;
  lng = 0;
  placeChanged(place) {
    this.lat = place.geometry.location.lat();
    this.lng = place.geometry.location.lng();

    console.log('dddddddd', this.lat, this.lng)
    this.stepTwoForm.patchValue({ location: place.vicinity })
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

    this.stepTwoForm.patchValue({ location: place.name })

  }
  /*========== Step Form2 Add Image List Start Here========*/
  getImageAdditionalSerList() {
    this.service.getStepTwoAdditional().subscribe(res => {
      console.log("api responsee", res);
      this.additional_obj = res['data'];
      this.additional_obj.map(obj => {
        obj.selected = "Choose";

      })
    });
  }
  /*========== Step Form2 Add Image List End Here========*/

  /*==========Step2 Choose Image Start Here========*/
  imageChoose(id) {
    if (this.imageId.length) {
      var a = this.imageId.includes(id);
      if (a) {
        var b = this.imageId.indexOf(id)
        var c = this.imageId.splice(b, id);
        this.service_obj.map(obj => {
          if (obj.id === id) {
            obj.selected = "Choose";
          }
        })
      }
      else {
        this.selected = "selected"
        this.service_obj.map(obj => {
          if (obj.id === id) {
            obj.selected = "Selected";
          }
        })
        this.imageId.push(id);
        console.log("push", this.imageId);
      }
    } else {
      this.imageId.push(id);
      this.service_obj.map(obj => {
        if (obj.id === id) {
          obj.selected = "Selected";
        }
      })
      console.log("push", this.imageId);
    }
  }
  /*==========Step2 Choose Image End Here========*/

  /*==========Step2 Additional Image Start Here========*/
  imageAdd(id) {
    if (this.addImageId.length) {
      var a = this.addImageId.includes(id);
      if (a) {
        var b = this.addImageId.indexOf(id)
        var c = this.addImageId.splice(b, id);
        this.additional_obj.map(obj => {
          if (obj.id === id) {
            obj.selected = "Choose";
          }
        })
      } else {
        this.selected = "selected"
        this.additional_obj.map(obj => {
          if (obj.id === id) {
            obj.selected = "Selected";
          }
        })
        this.addImageId.push(id);
        console.log("push", this.addImageId);
      }
    } else {
      this.addImageId.push(id);
      this.additional_obj.map(obj => {
        if (obj.id === id) {
          obj.selected = "Selected";
        }
      })
      console.log("push", this.addImageId);
    }
  }
  /*==========Step2 Additional Image End Here========*/

  /*==========Step1 Email Check Start Here========*/
  emailCheck() {
    this.service.getEmailCheck(this.stepOneForm.value.email).subscribe(msg => {
      console.log("api response", msg);
      this.email_value = msg;
      console.log("JSON", this.email_value);
      this.email_msgs = msg;
      if (this.email_value.status == 1) {
        this.toastr.success(this.email_msgs.msg, '', { timeOut: 2000 });
      }
    });
  }
  /*==========Step1 Email Check End Here========*/

  /*==========Step2 Type Check Start Here========*/
  check_type_public() {
    this.TeamSize = true;
    this.team_valid = true;
    this.func.setBack();
  }
  check_type_individual() {
    this.TeamSize = false;
    this.team_valid = false;
  }
  check_type_private() {
    this.TeamSize = false;
    this.team_valid = false;
  }
  /*==========Step2 Type Check End Here========*/

  /*==========Step2 Postcode Check Start Here========*/
  postCheck() {
    this.service.getPostCodeCheck(this.stepTwoForm.value.pin_code_id).subscribe(msg => {
      console.log("api response", msg);
      this.post_value = msg;
      if (this.post_value.status === 1) {
        this.post_obj = msg.data[0];
        this.post_value = msg;
      }
    });
  }

  postCodeList() {
    this.service.getPostCode()
      .subscribe(res => {
        console.log("api responsee", res);
        this.postObj = res['data'];
      });
  }

  onChange(id) {
    this.newpostVal = id.target.value;
  }
  /*==========Step2 Postcode Check End Here========*/

  /*==========Step1 Add Start Here========*/
  submitForm1() {
    this.submitted = true;
    if (this.stepOneForm.invalid) {
      return;
    }
    this.submitted = false;
    if (this.stepOneForm.value.name === '' || this.stepOneForm.value.name === undefined ||
      this.stepOneForm.value.email === '' || this.stepOneForm.value.email === undefined ||
      this.stepOneForm.value.password === '' || this.stepOneForm.value.password === undefined ||
      this.stepOneForm.value.mobile === '' || this.stepOneForm.value.mobile === undefined) {
      this.step2 = false;
      this.step1 = true;
      this.step3 = false;
      this.step4 = false;
      document.getElementById('step2ID').classList.add('displayNone')
      document.getElementById('step1ID').classList.remove('displayNone')
      document.getElementById('step3ID').classList.add('displayNone')
      document.getElementById('step4ID').classList.add('displayNone')
    }
    else {
      this.step1 = false;
      this.step3 = false;
      this.step4 = false;
      document.getElementById('step1ID').classList.add('displayNone')
      document.getElementById('step3ID').classList.add('displayNone')
      document.getElementById('step4ID').classList.add('displayNone')
      if (this.email_value.status == 1) {
        this.step2 = false;
        this.step1 = true;
        this.step3 = false;
        this.step4 = false;

        document.getElementById('step1ID').classList.remove('displayNone')
        document.getElementById('step2ID').classList.add('displayNone')
        document.getElementById('step3ID').classList.add('displayNone')
        document.getElementById('step4ID').classList.add('displayNone')


        this.toastr.success("Email already exist", '', { timeOut: 2000 });
      }
      else {
        document.body.scrollTop = document.documentElement.scrollTop = 0;
        this.step2 = true;
        this.step1 = false;
        this.step3 = false;
        this.step4 = false;

        document.getElementById('step1ID').classList.add('displayNone')
        document.getElementById('step2ID').classList.remove('displayNone')
        document.getElementById('step3ID').classList.add('displayNone')
        document.getElementById('step4ID').classList.add('displayNone')
      }
    }
  }
  /*==========Step1 Add End Here========*/

  /*==========Step2 Add Start Here========*/
  submitForm2() {

    if (this.stepTwoForm.value.pin_code_id === '' || this.stepTwoForm.value.pin_code_id === undefined ||
      this.stepTwoForm.value.provider_type === '' || this.stepTwoForm.value.provider_type === undefined ||
      this.stepTwoForm.value.vat_number === '' || this.stepTwoForm.value.vat_number === undefined ||
      this.stepTwoForm.value.iban_number === undefined || this.stepTwoForm.value.iban_number === '' || 
      // this.stepTwoForm.value.rate_per_hour === '' || this.stepTwoForm.value.rate_per_hour === undefined ||
      (this.team_valid && (this.stepTwoForm.value.team_size === '' || this.stepTwoForm.value.team_size === undefined))
    ) {
      this.step1 = false;
      this.step2 = true;
      this.step3 = false;
      this.step4 = false;

      document.getElementById('step1ID').classList.add('displayNone')
      document.getElementById('step2ID').classList.remove('displayNone')
      document.getElementById('step3ID').classList.add('displayNone')
      document.getElementById('step4ID').classList.add('displayNone')
    }
    else {

      if (this.imageId.length == 0) {
        this.step2 = true;
        this.toastr.error("Select services", '', { timeOut: 2000 });
      }
      else if (this.images.length == 0) {
        this.step2 = true;
        this.toastr.error("Please upload document for verification", '', { timeOut: 2000 });
      }

      else {
        document.body.scrollTop = document.documentElement.scrollTop = 0;
        this.step3 = true;
        this.step1 = false;
        this.step2 = false;
        this.step4 = false;

        document.getElementById('step1ID').classList.add('displayNone')
        document.getElementById('step2ID').classList.add('displayNone')
        document.getElementById('step3ID').classList.remove('displayNone')
        document.getElementById('step4ID').classList.add('displayNone')
      }

    }
    this.submitted = true;
    if (this.stepTwoForm.invalid) {
      return;
    }
    this.submitted = false;
  }
  /*==========Step2 Add End Here========*/

  /*==========Multiple Image Function Start Here========*/
  onFileChange(event) {
    var filesAmount = event.target.files.length;
    var fileName = event.target.files[0].name;
    var totlength = this.images.length + filesAmount
    console.log("totlength", totlength);
    if (totlength > 4) {
      this.toastr.error('You can not upload more than 4 files');
      return false;
    }
    if (event.target.files && event.target.files[0]) {


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
            this.images.push("./assets/images/pdf.png");
            this.previewImg.push(event.target.result);
          }
          else {
            if (fType === 'application/msword' || fType === 'msword') {
              this.images.push("./assets/images/doc.png");
              this.previewImg.push(event.target.result);
            }
            else {
              this.images.push(event.target.result);
              this.previewImg.push(event.target.result);
            }
          }
        }
        this.doc.push(event.target.files[i]);
        this.fileimagetype = event.target.files[i].type;
        reader.readAsDataURL(event.target.files[i]);
      }
    }
  }
  /*==========Multiple Image Function End Here========*/

  /*==========Image Close Function Start Here========*/
  closeImage(i) {
    this.images.splice(i, 1);
    this.doc.splice(i, 1);
    this.previewImg.splice(i, 1)
    document.getElementById('upload_documents')['value'] = ''
  }
  /*==========Image Close Function End Here========*/

  /*==========Single Image Function Start Here========*/
  onSingleFileChange(event) {
    this.selectImage = true;
    this.selectImg = false;
    this.selectedFile = <File>event.target.files[0]
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]); // read file as data url
      reader.onload = (event) => { // called once readAsDataURL is completed
        this.url = event.target.result;
      }
    }
  }
  /*==========Single Image Function End Here========*/

  /*==========Time Add AM, PM 12 Hours Function Start Here========*/
  converAmPm(time) {
    var inputEle = time;
    var timeSplit = inputEle.split(':'),
      hours,
      minutes,
      meridian;
    hours = timeSplit[0];
    minutes = timeSplit[1];
    if (time.toLowerCase().includes('am') || time.toLowerCase().includes('pm')) {
      return time;
    } else {
      if (hours > 12) {
        meridian = 'PM';
        hours -= 12;
      } else if (hours < 12) {
        meridian = 'AM';
        if (hours == 0) {
          hours = 12;
        }
      } else {
        meridian = 'PM';
      }
      return hours + ':' + minutes + ' ' + meridian
    }
  }
  /*==========Time Add  AM, PM 12 Hours Function End Here========*/

  /*==========Step3 Add Api Start Here========*/
  submitForm3() {
    if ((this.stepThreeForm.value.monday_start === '' && this.stepThreeForm.value.monday_end === '') &&
      (this.stepThreeForm.value.tuesday_start === '' && this.stepThreeForm.value.tuesday_end === '') &&
      (this.stepThreeForm.value.wednesday_start === '' && this.stepThreeForm.value.wednesday_end === '') &&
      (this.stepThreeForm.value.thusday_start === '' && this.stepThreeForm.value.thusday_end === '') &&
      (this.stepThreeForm.value.friday_start === '' && this.stepThreeForm.value.friday_end === '') &&
      (this.stepThreeForm.value.saturday_start === '' && this.stepThreeForm.value.saturday_end === '') &&
      (this.stepThreeForm.value.sunday_start === '' && this.stepThreeForm.value.sunday_end === '')) {
      this.toastr.error("Availability time is required", '', { timeOut: 2000 });
    }
    else {
      const formData: any = new FormData();
      for (let img of this.doc) {
        formData.append('doc_name', img);
      }

      for (let id of this.imageId) {
        formData.append('service_id', id);
      }

      for (let id of this.addImageId) {
        formData.append('service_id', id);
      }
      this.stepTwoForm.value.pin_code_id = this.newpostVal;
      this.stepOneForm.value.image = this.selectedFile;
      formData.append('name', this.stepOneForm.value.name);
      formData.append('reffer_by_code', this.stepOneForm.value.reffer_by_code);
      formData.append('email', this.stepOneForm.value.email);
      formData.append('password', this.stepOneForm.value.password);
      formData.append('phonecode', this.stepOneForm.value.phonecode);
      formData.append('mobile', this.stepOneForm.value.mobile);
      formData.append('image', this.selectedFile);
      formData.append('pin_code_id', this.newpostVal);
      formData.append('provider_type', this.stepTwoForm.value.provider_type);
      formData.append('team_size', this.stepTwoForm.value.team_size);
      formData.append('vat_number', this.stepTwoForm.value.vat_number);

      formData.append('banker_name', this.stepTwoForm.value.banker_name);
      formData.append('bank_name', this.stepTwoForm.value.bank_name);
      formData.append('account_number', this.stepTwoForm.value.account_number);
      formData.append('iban_number', this.stepTwoForm.value.iban_number);
      // formData.append('rate_per_hour', this.stepTwoForm.value.rate_per_hour);

  
      /// formData.append('rate_per_hour', this.stepTwoForm.value.rate_per_hour);

      formData.append('monday_start', moment(this.stepThreeForm.value.monday_start).format("HH:mm"))
      formData.append('monday_end', moment(this.stepThreeForm.value.monday_end).format("HH:mm"))
      formData.append('tuesday_start', moment(this.stepThreeForm.value.tuesday_start).format("HH:mm"))
      formData.append('tuesday_end', moment(this.stepThreeForm.value.tuesday_end).format("HH:mm"))
      formData.append('wednesday_start', moment(this.stepThreeForm.value.wednesday_start).format("HH:mm"))
      formData.append('wednesday_end', moment(this.stepThreeForm.value.wednesday_end).format("HH:mm"))
      formData.append('thusday_start', moment(this.stepThreeForm.value.thusday_start).format("HH:mm"))
      formData.append('thusday_end', moment(this.stepThreeForm.value.thusday_end).format("HH:mm"))
      formData.append('friday_start', moment(this.stepThreeForm.value.friday_start).format("HH:mm"))
      formData.append('friday_end', moment(this.stepThreeForm.value.friday_end).format("HH:mm"))
      formData.append('saturday_start', moment(this.stepThreeForm.value.saturday_start).format("HH:mm"))
      formData.append('saturday_end', moment(this.stepThreeForm.value.saturday_end).format("HH:mm"))
      formData.append('sunday_start', moment(this.stepThreeForm.value.sunday_start).format("HH:mm"))
      formData.append('sunday_end', moment(this.stepThreeForm.value.sunday_end).format("HH:mm"))


      formData.append('longitude', this.lng);
      formData.append('latitude', this.lat);
      formData.append('location', this.stepTwoForm.value.location);

      console.log('this.stepThreeForm.value', this.stepThreeForm.value)
      if (this.stepThreeForm.value.monday_start != '' || this.stepThreeForm.value.monday_end != '') {
        if (this.stepThreeForm.value.monday_end == '' || this.stepThreeForm.value.monday_start == '') {
          if (this.stepThreeForm.value.monday_end == '') {
            this.toastr.error('Monday end time is required')
            return
          } else {
            this.toastr.error('Monday start time is required')
            return
          }
        } else {
          if (new Date(this.stepThreeForm.value.monday_start) > new Date(this.stepThreeForm.value.monday_end)) {
            this.toastr.error('Monday end time is greater than start time')
            return
          }
        }
      }

      if (this.stepThreeForm.value.tuesday_start != '' || this.stepThreeForm.value.tuesday_end != '') {
        if (this.stepThreeForm.value.tuesday_end == '' || this.stepThreeForm.value.tuesday_start == '') {
          if (this.stepThreeForm.value.tuesday_end == '') {
            this.toastr.error('Tuesday end time is required')
            return
          } else {
            this.toastr.error('Tuesday start time is required')
            return
          }
        } else {
          if (new Date(this.stepThreeForm.value.tuesday_start) > new Date(this.stepThreeForm.value.tuesday_end)) {
            this.toastr.error('Tuesday end time is greater than start time')
            return
          }
        }
      }

      if (this.stepThreeForm.value.wednesday_start != '' || this.stepThreeForm.value.wednesday_end != '') {
        if (this.stepThreeForm.value.wednesday_end == '' || this.stepThreeForm.value.wednesday_start == '') {
          if (this.stepThreeForm.value.wednesday_end == '') {
            this.toastr.error('Wednesday end time is required')
            return
          } else {
            this.toastr.error('Wednesday start time is required')
            return
          }
        } else {
          if (new Date(this.stepThreeForm.value.wednesday_start) > new Date(this.stepThreeForm.value.wednesday_end)) {
            this.toastr.error('Wednesday end time is greater than start time')
            return
          }
        }
      }

      if (this.stepThreeForm.value.thusday_start != '' || this.stepThreeForm.value.thusday_end != '') {
        if (this.stepThreeForm.value.thusday_end == '' || this.stepThreeForm.value.thusday_start == '') {
          if (this.stepThreeForm.value.thusday_end == '') {
            this.toastr.error('Thursday end time is required')
            return
          } else {
            this.toastr.error('Thursday start time is required')
            return
          }
        } else {
          if (new Date(this.stepThreeForm.value.thusday_start) > new Date(this.stepThreeForm.value.thusday_end)) {
            this.toastr.error('Thursday end time is greater than start time')
            return
          }
        }
      }
      if (this.stepThreeForm.value.friday_start != '' || this.stepThreeForm.value.friday_end != '') {
        if (this.stepThreeForm.value.friday_end == '' || this.stepThreeForm.value.friday_start == '') {
          if (this.stepThreeForm.value.friday_end == '') {
            this.toastr.error('Friday end time is required')
            return
          } else {
            this.toastr.error('Friday start time is required')
            return
          }
        } else {
          if (new Date(this.stepThreeForm.value.friday_start) > new Date(this.stepThreeForm.value.friday_end)) {
            this.toastr.error('Friday end time is greater than start time')
            return
          }
        }
      }
      if (this.stepThreeForm.value.saturday_start != '' || this.stepThreeForm.value.saturday_end != '') {
        if (this.stepThreeForm.value.saturday_end == '' || this.stepThreeForm.value.saturday_start == '') {
          if (this.stepThreeForm.value.saturday_end == '') {
            this.toastr.error('Saturday end time is required')
            return
          } else {
            this.toastr.error('Saturday start time is required')
            return
          }
        } else {
          if (new Date(this.stepThreeForm.value.saturday_start) > new Date(this.stepThreeForm.value.saturday_end)) {
            this.toastr.error('Saturday end time is greater than start time')
            return
          }
        }
      }

      if (this.stepThreeForm.value.sunday_start != '' || this.stepThreeForm.value.sunday_end != '') {
        if (this.stepThreeForm.value.sunday_end == '' || this.stepThreeForm.value.sunday_start == '') {
          if (this.stepThreeForm.value.sunday_end == '') {
            this.toastr.error('Sunday end time is required')
            return
          } else {
            this.toastr.error('Sunday start time is required')
            return
          }
        } else {
          if (new Date(this.stepThreeForm.value.sunday_start) > new Date(this.stepThreeForm.value.sunday_end)) {
            this.toastr.error('Sunday end time is greater than start time')
            return
          }
        }
      }



      this.service.getServiceProviderReg(formData).subscribe(res => {
        console.log("api response", res);
        this.reg_Json = res;
        this.reg_msg = res;
        console.log("JSON", this.reg_Json);
        this.step1 = false;
        this.step2 = false;
        this.step3 = false;
        this.step4 = true;
        document.getElementById('step1ID').classList.add('displayNone')
        document.getElementById('step2ID').classList.add('displayNone')
        document.getElementById('step3ID').classList.add('displayNone')
        document.getElementById('step4ID').classList.remove('displayNone')

        document.body.scrollTop = document.documentElement.scrollTop = 0;
        if (this.reg_msg.status === 1) {
          this.toastr.success(this.reg_msg.msg, '', { timeOut: 2000 });
          this.toastr.success(this.reg_msg.msg2, '', { timeOut: 3000 });
        } else {
          this.toastr.error(this.reg_msg.msg, '', { timeOut: 2000 });
        }
      });
    }
  }
  /*==========Step3 Add Api End Here========*/

  /*==========Back Function Start Here========*/

  back_basicInfo() {
    this.step1 = true;
    this.step2 = false;
    this.step3 = false;
    this.step4 = false;
    document.getElementById('step1ID').classList.remove('displayNone')
    document.getElementById('step2ID').classList.add('displayNone')
    document.getElementById('step3ID').classList.add('displayNone')
    document.getElementById('step4ID').classList.add('displayNone')
    this.func.setBack();
  }

  step1_back_verify() {
    if (this.stepOneForm.value.name === '' || this.stepOneForm.value.name === undefined ||
      this.stepOneForm.value.email === '' || this.stepOneForm.value.email === undefined ||
      this.stepOneForm.value.password === '' || this.stepOneForm.value.password === undefined ||
      this.stepOneForm.value.mobile === '' || this.stepOneForm.value.mobile === undefined) {
      this.step1 = true;
      this.step2 = false;
      this.step3 = false;
      this.step4 = false;
      document.getElementById('step1ID').classList.remove('displayNone')
      document.getElementById('step2ID').classList.add('displayNone')
      document.getElementById('step3ID').classList.add('displayNone')
      document.getElementById('step4ID').classList.add('displayNone')
      this.func.setBack();
    }
    else {
      this.step1 = false;
      this.step2 = true;
      this.step3 = false;
      this.step4 = false;
      document.getElementById('step1ID').classList.add('displayNone')
      document.getElementById('step2ID').classList.remove('displayNone')
      document.getElementById('step3ID').classList.add('displayNone')
      document.getElementById('step4ID').classList.add('displayNone')
      this.func.setBack();
    }
  }
  step2_back_verify() {
    if (this.stepTwoForm.value.pin_code_id === '' || this.stepTwoForm.value.pin_code_id === undefined ||
      this.stepTwoForm.value.provider_type === '' || this.stepTwoForm.value.provider_type === undefined ||
      this.stepTwoForm.value.vat_number === '' || this.stepTwoForm.value.vat_number === undefined ||
      // this.stepTwoForm.value.rate_per_hour === '' || this.stepTwoForm.value.rate_per_hour === undefined ||
      (this.team_valid && (this.stepTwoForm.value.team_size === '' || this.stepTwoForm.value.team_size === undefined))) {

      this.step1 = false;
      this.step2 = true;
      this.step3 = false;
      this.step4 = false;

      document.getElementById('step1ID').classList.add('displayNone')
      document.getElementById('step2ID').classList.remove('displayNone')
      document.getElementById('step3ID').classList.add('displayNone')
      document.getElementById('step4ID').classList.add('displayNone')
    }
    else {

      this.step1 = false;
      this.step2 = false;
      this.step3 = true;
      this.step4 = false;

      document.getElementById('step1ID').classList.add('displayNone')
      document.getElementById('step2ID').classList.add('displayNone')
      document.getElementById('step3ID').classList.remove('displayNone')
      document.getElementById('step4ID').classList.add('displayNone')
      this.func.setBack();
    }
  }
  step2_back_available() {
    if (
      // this.stepTwoForm.value.pin_code_id === '' || this.stepTwoForm.value.pin_code_id === undefined ||
      this.stepTwoForm.value.provider_type === '' || this.stepTwoForm.value.provider_type === undefined ||
      this.stepTwoForm.value.vat_number === '' || this.stepTwoForm.value.vat_number === undefined ||
      // this.stepTwoForm.value.rate_per_hour === '' || this.stepTwoForm.value.rate_per_hour === undefined ||
      (this.team_valid && (this.stepTwoForm.value.team_size === '' || this.stepTwoForm.value.team_size === undefined))) {

      this.step1 = false;
      this.step2 = true;
      this.step3 = false;
      this.step4 = false;

      document.getElementById('step1ID').classList.add('displayNone')
      document.getElementById('step2ID').classList.remove('displayNone')
      document.getElementById('step3ID').classList.add('displayNone')
      document.getElementById('step4ID').classList.add('displayNone')
    }
    else {

      this.step1 = false;
      this.step2 = false;
      this.step3 = true;
      this.step4 = false;

      document.getElementById('step1ID').classList.add('displayNone')
      document.getElementById('step2ID').classList.add('displayNone')
      document.getElementById('step3ID').classList.remove('displayNone')
      document.getElementById('step4ID').classList.add('displayNone')
      this.func.setBack();
    }
  }
  step3_back_available() {
    if ((this.stepThreeForm.value.monday_start === '' &&
      this.stepThreeForm.value.tuesday_start === '' &&
      this.stepThreeForm.value.wednesday_start === '' &&
      this.stepThreeForm.value.thusday_start === '' &&
      this.stepThreeForm.value.friday_start === '' &&
      this.stepThreeForm.value.saturday_start === '' &&
      this.stepThreeForm.value.sunday_start === '') &&
      (this.stepThreeForm.value.monday_end === '' &&
        this.stepThreeForm.value.tuesday_end === '' &&
        this.stepThreeForm.value.wednesday_end === '' &&
        this.stepThreeForm.value.thusday_end === '' &&
        this.stepThreeForm.value.friday_end === '' &&
        this.stepThreeForm.value.saturday_end === '' &&
        this.stepThreeForm.value.sunday_end === '')
    ) {
      this.toastr.error("Time Slot is required", '', { timeOut: 2000 });
    }
  }



  back_verify() {
    this.step1 = false;
    this.step2 = true;
    this.step3 = false;
    this.step4 = false;

    document.getElementById('step1ID').classList.add('displayNone')
    document.getElementById('step2ID').classList.remove('displayNone')
    document.getElementById('step3ID').classList.add('displayNone')
    document.getElementById('step4ID').classList.add('displayNone')
    this.func.setBack();
  }

  back_available() {
    this.step1 = false;
    this.step2 = false;
    this.step3 = true;
    this.step4 = false;

    document.getElementById('step1ID').classList.add('displayNone')
    document.getElementById('step2ID').classList.add('displayNone')
    document.getElementById('step3ID').classList.remove('displayNone')
    document.getElementById('step4ID').classList.add('displayNone')
    this.func.setBack();
  }
  /*==========Back Function End Here========*/

  /*==========Password Show/Hide Function Start Here========*/
  showHidePassword() {
    this.showHideBtn = this.showHideBtn === false;
  }
  /*==========Password Show/Hide Function End Here========*/
  newTabImage(index) {
    const win = window.open("", "_blank");
    console.log(this.previewImg[index]);
    let html = '';

    html += '<html>';
    html += '<body style="margin:0!important">';
    html += '<embed width="100%" height="100%" src="' + this.previewImg[index] + '" type="application/pdf" />';
    html += '</body>';
    html += '</html>';

    setTimeout(() => {
      win.document.write(html);
    }, 0);

    // // this.imgPdf = index;
    // var image = new Image();
    // image.src = this.imgPdf[index];
    // console.log("iiiiiiiiiiiiiiiii",image.src );
    //   this.img
    // var w = window.open(this.imgPdf[index]);
    // // w.document.write(image.outerHTML); 
    // // window.location.href = this.imgPdf[index]; 
    // w.document.close(); 
  }
}
