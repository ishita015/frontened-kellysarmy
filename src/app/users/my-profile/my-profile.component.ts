import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpService } from 'src/app/services/http.service';
import { ValidationsService } from 'src/app/services/validations.service';
import { ToastrService } from 'ngx-toastr';
import { VariableService } from 'src/app/services/variable.service';
import {FunctionService} from "src/app/services/function.service";
import { TranslateService } from '@ngx-translate/core';
@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.css']
})
export class MyProfileComponent implements OnInit {
  public getprofileData;
  public profile_Msg
  public userId;
  profileForm: FormGroup;
  imageSrc: string;
  submitted: boolean;
  imageSelect = true;
  public profileData;
  public profileUpdateData;
  public getprofileId;
  tomorrow = new Date(); 

  constructor( 
    public func:FunctionService,
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private router: Router,
    public service:HttpService,
    public validation: ValidationsService,
    private toastr: ToastrService,
    public translate: TranslateService,
    public variable: VariableService) { 
      this.tomorrow.setDate(this.tomorrow.getDate());
      translate.setDefaultLang('en');

  }

  useLanguage(language: string) {
    console.log("user language======", language)
    this.translate.use(language);
  }

  ngOnInit() {
    this.createForm();
    this.EditProfile();
    this.getprofileData = JSON.parse(localStorage.getItem('profileData'));
    this.getprofileId = JSON.parse(localStorage.getItem('userId'));
    this.variable.login = false;
    this.variable.logout = true;
  }
   /*========== Form Value Start Here========*/
  createForm() {
    this.profileForm = this.fb.group({
      email: ['', this.validation.onlyRequired_validator],
      name: ['', this.validation.name_validation],
      mobile: ['', this.validation.mobile_validator],
      image: [''],
      birthday: [''],
      last_profile_image:[''],
    });
  }
  /*========== Form Value End Here========*/

  /*========== Edit Input Value Start Here========*/
  patchValue(){
    this.func.setBack();
      this.profileForm.get('email').patchValue(this.profileData.email);
      this.profileForm.get('name').patchValue(this.profileData.name);
      this.profileForm.get('mobile').patchValue(this.profileData.mobile);
      this.profileForm.get('birthday').patchValue(this.profileData.birthday);
      // this.profileForm.get('image').patchValue(this.profileData.image);
      // this.profileForm.get('last_profile_image').patchValue(this.profileData.image);
  }
  /*==========Edit Input Value End Here========*/

  /*==========Upload File Start Here========*/
  onFileChange(event) {
    this.imageSelect = false;
    const reader = new FileReader();
    if(event.target.files && event.target.files.length) {
      const [file] = event.target.files;
      reader.readAsDataURL(file);
      reader.onload = () => {
        this.imageSrc = reader.result as string;
        this.profileForm.patchValue({
          image: reader.result
        });
      };
    }
  }
  /*==========Upload File End Here========*/

   /*==========Profile Edit Api Start Here========*/
   EditProfile(){
    this.userId = JSON.parse(localStorage.getItem('userId'));
    this.service.getEditMyProfile(this.userId).subscribe(res => {
    this.profileData = res['data']['0'];
    this.patchValue();
    localStorage.setItem('userData', JSON.stringify(this.profileData));
    });
  }
  /*==========Profile Edit Api End Here========*/

  /*==========Profile Update Api Start Here========*/
  onSubmit(){
    console.log("form value",this.profileForm.value);
    const form_data = this.profileForm.value;
    form_data.image = this.imageSrc;
    this.imageSelect = false;
    this.submitted = true;
    if (this.profileForm.invalid) {
      return;
    }
    this.submitted = false;
    this.service.getUpdateProfile(this.profileForm.value,this.getprofileId)
    .subscribe(res => {
        console.log("update profile api responsee",res);
        this.profileUpdateData = res.data;
        this.profile_Msg = res;
        this.imageSelect = false;
        console.log("profileUpdateData", this.profileUpdateData);
        localStorage.setItem('userData', JSON.stringify(this.profileUpdateData));
        this.toastr.success(this.profile_Msg.msg,'', { timeOut: 2000 });
        this.router.navigateByUrl('/login', { skipLocationChange: true }).then(() => {
    // this.router.navigate(['Your actualComponent']);
        this.router.navigate(['/myprofile'])
}); 
        // window.location.reload();
    });
  }
   /*==========Profile Update Api End Here========*/
  
}
