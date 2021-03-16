import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimePickerModule } from '@syncfusion/ej2-angular-calendars';
import { DateRangePickerModule } from '@syncfusion/ej2-angular-calendars';

import { ServiceProvidersRoutingModule } from './service-providers-routing.module';
import { ServiceProfileComponent } from './service-profile/service-profile.component';
import { ServiceRequestComponent } from './service-request/service-request.component';
import { ServiceInprogressComponent } from './service-inprogress/service-inprogress.component';
import { ServiceCompleteCancelledComponent } from './service-complete-cancelled/service-complete-cancelled.component';
import { ServiceSettingComponent } from './service-setting/service-setting.component';
import { ServiceReportComponent } from './service-report/service-report.component';
import { ServiceSubscriptionComponent } from './service-subscription/service-subscription.component';
import { ServicesSideBarComponent } from '../components/services-side-bar/services-side-bar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BonusCleaningPackageComponent } from './bonus-cleaning-package/bonus-cleaning-package.component';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { InviteFriendComponent } from './invite-friend/invite-friend.component';
import { ShareButtonsModule } from 'ngx-sharebuttons/buttons';
import { ShareIconsModule } from 'ngx-sharebuttons/icons';
import { ServiceDetailsProviderComponent } from './service-details-provider/service-details-provider.component';
import { MaterialModule } from '../material.module';
import {StillQuestionComponent} from './still-question/still-question.component';
import {FAQComponent} from './faq/faq.component';

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
  InviteFriendComponent,
  ServiceProfileComponent,
  BonusCleaningPackageComponent,
  ServicesSideBarComponent,StillQuestionComponent,FAQComponent,
  ServiceRequestComponent,
  ServiceDetailsProviderComponent,
  ServiceInprogressComponent,
  ServiceCompleteCancelledComponent, ServiceSettingComponent, ServiceReportComponent, ServiceSubscriptionComponent],
  imports: [
    CommonModule,DateRangePickerModule,MaterialModule,
    FormsModule,TimePickerModule,
    ReactiveFormsModule,
    ServiceProvidersRoutingModule,
    NgxDatatableModule, 
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),  
     ShareButtonsModule.withConfig({
      debug: true
    }),
    ShareIconsModule
  ],
  providers: [TranslateService],
  exports: [TranslateModule],
})
export class ServiceProvidersModule { }
