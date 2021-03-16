import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
 
  constructor(private router: Router) { }
  img=''
  ngOnInit(){
    this.userId = JSON.parse(localStorage.getItem('userId'));
    this.serProfileData = JSON.parse(localStorage.getItem('BasicInfo'));
    if(this.serProfileData.data != undefined){
      this.img=this.serProfileData.data[0].image;
    }else{
      this.img=this.serProfileData.image;
    }
  }
}
