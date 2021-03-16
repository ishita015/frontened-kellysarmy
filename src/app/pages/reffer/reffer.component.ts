import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';
import { Router,Route,ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-reffer',
  templateUrl: './reffer.component.html',
  styleUrls: ['./reffer.component.css']
})
export class refferComponent implements OnInit {

  constructor(    public service:HttpService,
    public route:ActivatedRoute,
    public router:Router,
) { }
  ngOnInit(): void {
  	 this.route.queryParams.subscribe((params) => {
        if(params.type == 1){
          this.router.navigate(['signup/'+params.reffer_code])
        }else{
          this.router.navigate(['member/step1/'+params.reffer_code])

        }
      });

}
}
