import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';
import { ToastrService } from 'ngx-toastr';
import { environment } from 'src/environments/environment';
import { FunctionService } from "src/app/services/function.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-invite-friend',
  templateUrl: './invite-friend.component.html',
  styleUrls: ['./invite-friend.component.css']
})
export class InviteFriendComponent implements OnInit {
  textMessage: any;
  msgHideAndShow: boolean = false;
  constructor(private service: HttpService, private router: Router, private toastr: ToastrService, public func: FunctionService,) { }
  reffer_code = '';

  ngOnInit(): void {
    this.getReffer()
    this.getLoginData()
    this.func.setBack();
  }
  refferUrl = '';
  getLoginData() {
    this.service.get('/api/getLoginDetailsBYId/' + localStorage.getItem('userId'))
      .subscribe(res => {
        this.reffer_code = res['data'][0].reffer_code;
        this.refferUrl = environment.signupUrl + '/' + res['data'][0].reffer_code;

      })
  }
  getRefferData = []
  getReffer() {
    this.service.get('/user/getRefferData/' + localStorage.getItem('userId'))
      .subscribe(res => {
        this.getRefferData = res['data']
      })
  }

  share() {
    var user_type = 1;
    var email = document.getElementById('email')['value'];
    user_type = document.getElementById('user_type')['value'];
    if (email == '') {
      this.toastr.warning('Enter email');
    } else {
      var link = environment.refferUrl
      this.service.post('/api/reffer-friend', { user_type, link, reffer_code: this.reffer_code, email: email, user_id: localStorage.getItem('userId') }).subscribe(res => {
        if (res['status'] == true) {
          this.toastr.success(res['msg'])
          this.router.navigateByUrl('/login', { skipLocationChange: true }).then(() => {
            this.router.navigate(['invite-friend']);
          });
        } else {
          this.toastr.warning(res['msg'])
        }

      })
    }
  }

  // textMessageFunc(msgText) {
  //   this.textMessage = msgText + " Copied to Clipboard";
  //   this.msgHideAndShow = true;
  //   setTimeout(() => {
  //     this.textMessage = "";
  //     this.msgHideAndShow = false;
  //   });
  // }

  // codeCopy() {
  //   var copyText = document.getElementById("copyData");
  //   copyText.select();
  //   document.execCommand('copy');
  //   copyText.setSelectionRange(0, 0);
  //   // this.textMessageFunc('Text');
  // }
}
