import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor(public service: HttpService,
  ) { }
  contactUsData = []
  ngOnInit(): void {
    this.service.get('/user/getCmsData/1/'+localStorage.getItem("language"))
      .subscribe(res => {
        this.contactUsData = res['data'][0].innerHtml
      })

  }

}
