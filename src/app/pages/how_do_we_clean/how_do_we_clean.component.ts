import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-how_do_we_clean',
  templateUrl: './how_do_we_clean.component.html',
  styleUrls: ['./how_do_we_clean.component.css']
})
export class how_do_we_cleanComponent implements OnInit {

  constructor(    public service:HttpService,
) { }
// contactUsData=[]
//   ngOnInit(): void {
//   	this.service.get('/admin/getCmsData/3')
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
    this.service.get('/admin/getCmsData/3')
                .subscribe(res => {
                  if(this.languageType == 'en'){
                    this.contactUsData=res['data'][0].innerHtml
                  }else{
                    this.contactUsData=res['data'][0].innerHtml_portugal
                  }
                })

  }

}
