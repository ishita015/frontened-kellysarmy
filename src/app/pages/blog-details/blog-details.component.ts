import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpService } from 'src/app/services/http.service';
import { TranslateService } from '@ngx-translate/core';
@Component({
  selector: 'app-blog-details',
  templateUrl: './blog-details.component.html',
  styleUrls: ['./blog-details.component.css']
})
export class BlogDetailsComponent implements OnInit {
public id;
public blog_details;
  constructor(
    public service:HttpService,
    public translate: TranslateService,
  	private route : ActivatedRoute) { 
      this.id = route.snapshot.params['id']
      translate.setDefaultLang('en');
    }
    useLanguage(language: string) {
      localStorage.setItem('language', language);
      this.translate.use(language);
    }

  ngOnInit(): void {
  	this.getBlogDetails();
  }

  getBlogDetails(){
    this.service.get('/user/getBlogDetails/'+this.id+'/'+localStorage.getItem("language")).subscribe(res => {
	   this.blog_details=res['data'][0];
     console.log("this.blog_details", this.blog_details);
  })
  }
}	
