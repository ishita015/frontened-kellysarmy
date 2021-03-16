import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-cancellation_policy',
  templateUrl: './cancellation_policy.component.html',
  styleUrls: ['./cancellation_policy.component.css']
})
export class cancellationPolicyComponent implements OnInit {

  constructor(    public service:HttpService,
) { }
// contactUsData=[]
//   ngOnInit(): void {
//   	this.service.get('/admin/getCmsData/7')
//                 .subscribe(res => {
//                   this.contactUsData=res['data'][0].innerHtml
//                 })

//   }

contactUsData=[];
languageType=localStorage.getItem('language');
  ngOnInit(): void {
if(this.languageType == null){
  this.languageType = 'en'
}
    this.service.get('/admin/getCmsData/7')
                .subscribe(res => {
                  if(this.languageType == 'en'){
                    this.contactUsData=res['data'][0].innerHtml
                  }else{
                    this.contactUsData=res['data'][0].innerHtml_portugal
                  }
                })

  }
}
