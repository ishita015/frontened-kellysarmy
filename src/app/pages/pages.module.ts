  import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesRoutingModule } from './pages-routing.module';
import { HomeComponent } from './home/home.component';
import { paymentComponent } from './payment/payment.component';
import { AboutComponent } from './about/about.component';
import { ServicesComponent } from './services/services.component';
import { BlogsComponent } from './blogs/blogs.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { DeepCleaningComponent } from './deep-cleaning/deep-cleaning.component';
import { DomesticCleaningComponentComponent } from './domestic-cleaning/domestic-cleaning.component';
import { how_do_we_cleanComponent } from './how_do_we_clean/how_do_we_clean.component';
import { refferComponent } from './reffer/reffer.component';
import { verifyComponent } from './verify/verify.component';

// import { serviceDetailComponent } from './service-detail/service-detail.component';

import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { Step1Component } from './become-member/step1/step1.component';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { TimePickerModule } from '@syncfusion/ej2-angular-calendars';
import { MaterialModule } from './material.module';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';
import { NgxAutocomPlaceModule } from 'ngx-autocom-place';
import { BlogDetailsComponent } from './blog-details/blog-details.component';
import { SendMailResetPasswordComponent } from './send-mail-reset-password/send-mail-reset-password.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
// import { BrowserModule } from '@angular/platform-browser'

import { TranslateModule, TranslateLoader, TranslateService } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
// loader module
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}
import {Observable} from "rxjs/Observable";
import { HttpClient } from '@angular/common/http';
@NgModule({
  declarations: [
    HomeComponent,refferComponent,
    paymentComponent,
    AboutComponent,
    ServicesComponent,
    BlogsComponent,
    ContactUsComponent,
    LoginComponent,
    // serviceDetailComponent,
    BlogDetailsComponent,
    SignupComponent,DomesticCleaningComponentComponent,
    Step1Component,DeepCleaningComponent,how_do_we_cleanComponent,verifyComponent, SendMailResetPasswordComponent, ResetPasswordComponent],
  imports: [
    CommonModule,
    TimePickerModule,
    FormsModule,
    ReactiveFormsModule,
    PagesRoutingModule,
    CarouselModule,
    // BrowserModule,
    BrowserAnimationsModule,
    PdfViewerModule,
    ToastrModule.forRoot(),MaterialModule, OwlDateTimeModule, 
    OwlNativeDateTimeModule,NgxAutocomPlaceModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }) ,
      
  ],
  entryComponents:[paymentComponent],
  exports: [TranslateModule],
  providers: [TranslateService],
 
  
})
export class PagesModule { }
