import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxUsefulSwiperModule } from 'ngx-useful-swiper';
import { ServiceSettingComponent } from './service-setting/service-setting.component';

import { UsersRoutingModule } from './users-routing.module';
import { MyServiceComponent } from './my-service/my-service.component';
import { MyTeamComponent } from './my-team/my-team.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthService } from '../auth/auth.service';
import { AuthGuardService } from '../auth/auth-guard.service';
import { SidebarComponent } from '../components/sidebar/sidebar.component';
import { MyProfileComponent } from './my-profile/my-profile.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MyAddressesComponent } from './my-addresses/my-addresses.component';
import { PaymentOptionsComponent } from './payment-options/payment-options.component';
import { InviteFriendComponent } from './invite-friend/invite-friend.component';
import { FAQComponent } from './faq/faq.component';
import { StillQuestionComponent } from './still-question/still-question.component';
import { BonusCleaningPackageComponent } from './bonus-cleaning-package/bonus-cleaning-package.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { DeleteMyAccountComponent } from './delete-my-account/delete-my-account.component';
import {MyServicessComponent} from './myservicess/myservicess.component';
import { MaterialModule } from '../material.module';
import { AddressesComponent } from './addresses/my-addresses.component';
import { ShareButtonsModule } from 'ngx-sharebuttons/buttons';
import { ShareIconsModule } from 'ngx-sharebuttons/icons';
import { ServiceDetailsCustomerComponent } from './service-details-customer/service-details-customer.component';


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
    MyServiceComponent, AddressesComponent,ServiceSettingComponent,
    MyTeamComponent, 
    DashboardComponent,FAQComponent,
    SidebarComponent,
    MyProfileComponent,
    MyAddressesComponent,
    PaymentOptionsComponent,
    InviteFriendComponent,
    StillQuestionComponent,
    BonusCleaningPackageComponent,
    ChangePasswordComponent,
    MyServicessComponent,
    ServiceDetailsCustomerComponent,
    DeleteMyAccountComponent],
  imports: [
    CommonModule,
    UsersRoutingModule,
    FormsModule,
    ReactiveFormsModule,MaterialModule,NgxUsefulSwiperModule, ShareButtonsModule.withConfig({
      debug: true
    }),
    ShareIconsModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }) ,
  ],
  providers: [AuthService,AuthGuardService,TranslateService],
  exports: [TranslateModule],

})
export class UsersModule { }
