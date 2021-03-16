import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';
import { environment } from 'src/environments/environment';
import { TranslateService } from '@ngx-translate/core';
@Component({
  selector: 'app-still-question',
  templateUrl: './still-question.component.html',
  styleUrls: ['./still-question.component.css']
})
export class StillQuestionComponent implements OnInit {
  Category = [];
  language;
  userId = localStorage.getItem('userId')
  constructor(public service: HttpService, public translate: TranslateService
  ) {
    translate.setDefaultLang('en');
  }

  useLanguage(language: string) {
    localStorage.setItem("language", language);
    this.translate.use(language);
  }

  ngOnInit(): void {
    this.getCatehory()
    var siderbar = document.getElementsByClassName('sidebar-wrapper')
    console.log(siderbar)
    if (this.userId == null) {
      siderbar[0].setAttribute('style', 'display:none;')
    } else {
      siderbar[0].removeAttribute('style')
    }
  }
  getCatehory() {
  this.language = localStorage.getItem("language");
    this.service.get('/user/getAllFaqCategory/'+this.language)
      .subscribe(res => {
        this.Category = res['data']
      })
  }

}
