import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { VariableService } from "./../../services/variable.service";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpService } from 'src/app/services/http.service';
import { ToastrService } from 'ngx-toastr';
import * as moment from 'moment';
import {FunctionService} from "src/app/services/function.service";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
   registerForm: FormGroup;
    submitted = false;
  public UserId;
  
  constructor(    private toastr: ToastrService,
                  public func:FunctionService,
                  private router: Router,
                  private formBuilder: FormBuilder,
                  public service:HttpService,  
                  public variable: VariableService) { 
      this.UserId = JSON.parse(localStorage.getItem('userId'));
      console.log("user Id", this.UserId);
  }

  ngOnInit(){
    this.variable.login = false;
    this.variable.logout = true;

     this.registerForm = this.formBuilder.group({
            name: [''],
            // lastName: ['', Validators.required],
            email: [''],
            mobile: [''],
            birthday: [''],
            membership: [''],
            });
      this.service.get('/api/getLoginDetailsBYId/'+localStorage.getItem('userId'))
      .subscribe(res => {
        this.func.setBack();
        this.registerForm.patchValue({
          name:res['data'][0].name,
          mobile:res['data'][0].mobile,
          email:res['data'][0].email,
          birthday:res['data'][0].birthday,
          membership:res['data'][0].membership == 'true' ? true : false,
        })
      })
  }
get f() { return this.registerForm.controls; }

    onSubmit() {
        this.submitted = true;

        // if (this.registerForm.invalid) {
        //     return;
        // }

     
        // this.registerForm.value.birthday=moment(this.registerForm.value.birthday).format("MM-DD-YYYY");
       this.service.post('/api/updateMembershipUser/'+localStorage.getItem('userId'),this.registerForm.value)
      .subscribe(res => {
          if(res['status'] == true){
            this.toastr.success(res['msg'])
            this.router.navigateByUrl('/login', { skipLocationChange: true }).then(() => {
    this.router.navigate(['dashboard']);
});
          }else{
            this.toastr.warning(res['msg'])

          }
      })
    }
}
