import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';
import { environment } from 'src/environments/environment';
import { TranslateService } from '@ngx-translate/core';
@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css']
})
export class FAQComponent implements OnInit {

  FAQData=[];
  language;
  userId=localStorage.getItem('userId')
  Category_id=window.location.href.split('faq/')[1]
  constructor(    public service:HttpService,
    public translate: TranslateService,
) { 
  translate.setDefaultLang('en');
}
useLanguage(language: string) {
  localStorage.setItem('language', language);
  this.translate.use(language);
}

  ngOnInit(): void {
    this.getCatehory()
    var siderbar = document.getElementsByClassName('sidebar-wrapper')
    if (this.userId == null) {
      siderbar[0].setAttribute('style', 'display:none;')
    } else {
      siderbar[0].removeAttribute('style')
    }
  }
  getCatehory() {
    this.language = localStorage.getItem("language");
    this.service.get('/user/getFaqList/' + this.Category_id + '/' + this.language)
      .subscribe(res => {
        this.FAQData = res['data']
      })
  }
  open(i, id) {
    var devDemo = document.getElementsByClassName('devNone');
    var devDisShow = document.getElementsByClassName('devDisShow');
    for (var ikk = 0; ikk < devDemo.length; ++ikk) {
      devDemo[ikk].classList.remove('show')
      devDisShow[ikk].classList.add('collapsed')
    }

    var classs = document.getElementById(id).getAttribute('class')
    console.log('ccc', classs)
    if (classs == 'collapse devNone') {
      document.getElementById(id).classList.add('show')
      document.getElementById('devId' + i).classList.remove('collapsed')
    } else {
      alert('d')
      document.getElementById(id).classList.remove('show')
      document.getElementById('devId' + i).classList.add('collapsed')
    }
  }
}
