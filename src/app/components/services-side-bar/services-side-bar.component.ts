import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { VariableService } from '../../services/variable.service';
import { HttpService } from 'src/app/services/http.service';
import Swal from 'sweetalert2';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-services-side-bar',
  templateUrl: './services-side-bar.component.html',
  styleUrls: ['./services-side-bar.component.css']
})
export class ServicesSideBarComponent implements OnInit {
  public userId
  public profileSideBarData;
  public profileData;
  public serProfileData;
 
  constructor(private router: Router,private toastr: ToastrService, 
    public translate: TranslateService,
    public variable: VariableService,public service:HttpService) { 
      translate.setDefaultLang('en');
    }
  img=''
    happy_point=0
  ngOnInit(){

    this.userId = JSON.parse(localStorage.getItem('userId'));
    // this.serProfileData = JSON.parse(localStorage.getItem('BasicInfo'));
    if(this.serProfileData != undefined){
      // if(this.serProfileData.data != undefined){
      // this.img=this.serProfileData.image;
      // this.img=this.serProfileData.data[0].image;
      
    }else{
      // this.img=this.serProfileData.image;
    }
    this.service.get('/api/getLoginDetailsBYId/'+localStorage.getItem('userId'))
      .subscribe(res => {
        if(res['data'].length > 0){
          if(res['data'][0].user_status == 1){
             this.serProfileData=res['data'][0]
            this.happy_point=res['data'][0].happy_points;
            this.img=this.serProfileData.image;
          }else{
          this.Logout1();
          }
        }else{
          this.Logout1();
        }
        
      })

      if(localStorage.getItem('language') != null){
      this.translate.use(localStorage.getItem('language'));
    }
  }

  useLanguage(language: string) {
    localStorage.setItem('language', language);
    this.translate.use(language);
  }
  Logout1(){
      this.variable.login = true;
    this.variable.logout = false;
        this.variable.user_type = null;

      this.toastr.success('Logout successfully.')
   localStorage.clear();  
      this.router.navigateByUrl('/dashboard', {skipLocationChange: true }).then(() => this.router.navigate(["login"]));
    this.router.navigate(['/login']);
  }

    Logout(){
      var languageLogout = localStorage.getItem("language")
      var title;
      var btn_yes;
      var btn_cancel;
      if (languageLogout == "en") {
        title = 'Are you sure want to logout?'
        btn_yes = 'Yes'
        btn_cancel = 'Cancel'
      } else {
        title = 'Tem certeza de que deseja sair?'
        btn_yes = 'Sim'
        btn_cancel = 'Cancelar'
      }
    Swal.fire({
  title: title,
  icon: 'warning',
  showCancelButton: btn_cancel,
  confirmButtonColor: '#3085d6',
  cancelButtonColor: '#d33',
  confirmButtonText: 'Yes'
}).then((result) => {
  if (result.isConfirmed) {
 this.toastr.success('Logout successfully.')
     this.variable.login = true;
    this.variable.logout = false;
        this.variable.user_type = null;

   localStorage.clear();  
   this.router.navigateByUrl('/dashboard', {skipLocationChange: true }).then(() => this.router.navigate(["login"]));
  }
})
  }
}
