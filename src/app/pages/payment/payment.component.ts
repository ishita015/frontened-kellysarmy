import { Component, OnInit, ViewChild,Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Router } from '@angular/router';
 
import { StripeService, Elements, Element as StripeElement, ElementsOptions } from "ngx-stripe";
 import { HttpService } from 'src/app/services/http.service';
import { ToastrService } from 'ngx-toastr';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NgxSpinnerService } from 'ngx-spinner';
import { environment } from 'src/environments/environment';
import { DomSanitizer } from "@angular/platform-browser";

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class paymentComponent implements OnInit {

  elements: Elements;
  card: StripeElement;
 
  // optional parameters
  elementsOptions: ElementsOptions = {
    locale: 'en'
  };
 
  stripeTest: FormGroup;
 
  constructor(
    public sanitizer: DomSanitizer,
    private fb: FormBuilder, private router: Router,
    private stripeService: StripeService,
    public service:HttpService,
    private spinner: NgxSpinnerService,
    private toastr: ToastrService,
    public dialogRef: MatDialogRef<paymentComponent>,
    @Inject(MAT_DIALOG_DATA) public Paydata

    ) {}
 PaymentType 
 PaypalUrlNew
 PaypalUrl=environment.PaypalUrl
  ngOnInit() {
    this.Paydata.tracking_url=environment.myServicesUrl;
    this.stripeTest = this.fb.group({
      name: ['', [Validators.required]]
    });
    window.scrollTo(0,0);

     
this.PaymentType=this.Paydata.PaymentType;
delete this.Paydata.PaymentType;


// if(this.PaymentType == 'Paypal'){
//    document.getElementById('paypalID').classList.remove('displayNone')
//   document.getElementById('StripeID').classList.add('displayNone')

// var str = "";
//     var obj=this.Paydata;
//         for (var key in obj) {
//             if (str != "") {
//                 str += "&";
//             }
//             str += key + "=" + encodeURIComponent(obj[key]);
//         }
// this.PaypalUrl+=str
// this.PaypalUrl+='&pay_Device="web"'

      
// }else{

    
    this.stripeService.elements(this.elementsOptions)
      .subscribe(elements => {
        this.elements = elements;
        console.log('elements',elements)
        // Only mount the element the first time
        if (!this.card) {
          this.card = this.elements.create('card', {
            style: {
              base: {
                iconColor: '#666EE8',
                color: '#31325F',
                lineHeight: '40px',
                fontWeight: 300,
                fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
                fontSize: '18px',
                '::placeholder': {
                  color: '#CFD7E0'
                }
              }
            }
          });
          this.card.mount('#card-element');
        }
      });
  document.getElementById('paypalID').classList.add('displayNone')
  document.getElementById('StripeID').classList.remove('displayNone')
}




  // }
 
  buy() {
  	console.log('ddddddddddd',this.card)
    this.spinner.show();
    const name = JSON.parse(localStorage.getItem('userData')).name
    console.log('ddddddddddddddd',JSON.parse(localStorage.getItem('userData')).name)
    this.stripeService
      .createToken(this.card, { name })
      .subscribe(result => {
        if (result.token) {
          // Use the token to create a charge or a customer
          // https://stripe.com/docs/charges
          console.log(result.token);

      //      this.service.post('/api/payment',{amount:10,cardToken:result.token})
      // .subscribe(res => {
      
      // })
      this.Paydata.cardToken=result.token;
       this.service.post('/api/book-service',this.Paydata).subscribe(res=>{
                this.spinner.hide();
                this.toastr.success(res['message']);
              if(res['status'] == true){
                window.scrollTo(0,0); 

                 this.router.navigate(['/my-service']);  
                this.dialogRef.close();
              }
        })
        } else if (result.error) {
          // Error creating the token
          this.toastr.warning(result.error.message)
           this.spinner.hide();
          console.log(result.error.message);
        }
      });
  }
}
