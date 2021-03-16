import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';
import { VariableService } from "./../../services/variable.service";
import { TranslateService } from '@ngx-translate/core';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  socialLinks;
  user_type;
  constructor(
    public service: HttpService,
    public variable: VariableService,
    public translate: TranslateService
  ) {
    translate.setDefaultLang('en');
  }

  useLanguage(language: string) {
    this.translate.use(language);
  }

  contactUsMainData: any;
  ngOnInit(): void {
    this.user_type = localStorage.getItem('user_type');
    if (this.variable.user_type == undefined) {
      this.variable.user_type = this.user_type
    }

    if (localStorage.getItem('userId') != null) {
      this.variable.user_type = this.user_type
    }
    this.service.get('/admin/getSocialLinks')
      .subscribe(res => {
        this.socialLinks = res['data'][0]
      })

    this.service.get('/admin/getCmsData/2')
      .subscribe(res => {
        this.contactUsMainData = res['data'][0]
        console.log(this.contactUsMainData)
      })
  }
  open(url) {
    window.open(url)
  }

}
