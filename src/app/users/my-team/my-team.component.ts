import { Component, OnInit } from '@angular/core';
import { SwiperOptions } from 'swiper';
import { HttpService } from 'src/app/services/http.service';
import { TranslateService } from '@ngx-translate/core';
@Component({
  selector: 'app-my-team',
  templateUrl: './my-team.component.html',
  styleUrls: ['./my-team.component.css']
})


export class MyTeamComponent implements OnInit {
  config: SwiperOptions = {
    slidesPerView: 4,
    pagination: { el: '.swiper-pagination', clickable: true },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
    spaceBetween: 70
  };

  stars: number[] = [1, 2, 3, 4, 5];
  selectedValue: number = 1;
  constructor(public service: HttpService, public translate: TranslateService,) {
    translate.setDefaultLang('en');
  }

  useLanguage(language: string) {
    this.translate.use(language);
  }


  ngOnInit(): void {
    this.getMyTeam()
  }
  getMyTeamData = [];
  getMyTeam() {
    this.service.get('/api/getMyTeam?user_id=' + localStorage.getItem('userId').toString()).subscribe(res => {
      this.getMyTeamData = res['data']
      console.log("getMyTeamData", this.getMyTeamData);
    })
  }
  countStar(star) {
    this.selectedValue = star;
    console.log('Value of star', star);
  }
}
