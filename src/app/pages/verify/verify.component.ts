import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';
import { ToastrService } from 'ngx-toastr';
import { VariableService } from '../../services/variable.service';

@Component({
  selector: 'app-verify',
  templateUrl: './verify.component.html',
  styleUrls: ['./verify.component.css']
})
export class verifyComponent implements OnInit {
param=''
ishow=1;
  constructor(   public variable: VariableService,private toastr: ToastrService, public service:HttpService,
) { }
contactUsData=[]
  ngOnInit(): void {
     this.variable.login = true;
    this.variable.logout = false;
   localStorage.clear();  
    this.param=window.location.href.split('verify/')[1];
  	this.service.post('/api/verifyAccount',{key:this.param})
                .subscribe(res => {
                 if(res['status'] == false){
                   this.ishow=3;
                   this.toastr.warning(res['msg'])
                 }else{
                   this.ishow=2;
                   this.toastr.success(res['msg'])
                  }
                })

  }

}
