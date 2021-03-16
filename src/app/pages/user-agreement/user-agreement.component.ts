import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-user-agreement',
  templateUrl: './user-agreement.component.html',
  styleUrls: ['./user-agreement.component.css']
})
export class userAgreementComponent implements OnInit {

  constructor(    public service:HttpService,
) { }
contactUsData=[];
languageType=localStorage.getItem('language');
  ngOnInit(): void {
if(this.languageType == null){
  this.languageType = 'en'
}
  	this.service.get('/admin/getCmsData/4')
                .subscribe(res => {
                  if(this.languageType == 'en'){
                    this.contactUsData=res['data'][0].innerHtml
                  }else{
                    this.contactUsData=res['data'][0].innerHtml_portugal
                  }
                })

  }

}
