import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';
import { ActivatedRoute, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.css']
})
export class BlogsComponent implements OnInit {


  constructor(public service: HttpService,
    public translate: TranslateService,
    private router: Router) { 
      translate.setDefaultLang('en');
    }
  BlogData = []
  PopularBlogData = []

  useLanguage(language: string) {
    localStorage.setItem('language', language);
    this.translate.use(language);
  }
  ngOnInit(): void {
  	this.service.get('/user/getBlogWhereStatusOne/'+localStorage.getItem("language"))
                .subscribe(res => {
                  this.BlogData=res['data']
                })	

                this.service.get('/user/getLastFourBlogs/'+localStorage.getItem("language"))
                .subscribe(res => {
                  this.PopularBlogData=res['data']
                })

  }
search(v,et){
	if(v.length > 0){

	this.service.post('/user/filterBlogs',{key:v})
                .subscribe(res => {
                  this.BlogData=res['data']
                })	
	}else{
		this.ngOnInit()
	}
}

  blogDetails(id) {
    this.router.navigate(['blog-details', id]);
  }

}
