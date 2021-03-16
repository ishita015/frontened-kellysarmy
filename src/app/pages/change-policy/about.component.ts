import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-change-policy',
  templateUrl: './change-policy.component.html',
  styleUrls: ['./change-policy.component.css']
})
export class changePolicyComponent implements OnInit {

  constructor(    public service:HttpService,
) { }
contactUsData=[]
  ngOnInit(): void {
  	this.service.get('/admin/getCmsData/6')
                .subscribe(res => {
                  this.contactUsData=res['data'][0].innerHtml
                })

  }

}
