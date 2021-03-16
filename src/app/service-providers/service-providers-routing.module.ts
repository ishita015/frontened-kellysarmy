import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ServiceCompleteCancelledComponent } from './service-complete-cancelled/service-complete-cancelled.component';
import { ServiceProfileComponent } from './service-profile/service-profile.component';
import { ServiceInprogressComponent } from './service-inprogress/service-inprogress.component';
import { ServiceReportComponent } from './service-report/service-report.component';
import { ServiceRequestComponent } from './service-request/service-request.component';
import { ServiceSettingComponent } from './service-setting/service-setting.component';
import { ServiceSubscriptionComponent } from './service-subscription/service-subscription.component';
import { AuthGuardService as AuthGuard } from './../auth/auth-guard.service';
import {BonusCleaningPackageComponent} from './bonus-cleaning-package/bonus-cleaning-package.component';
import { InviteFriendComponent } from './invite-friend/invite-friend.component';
import {ServiceDetailsProviderComponent} from './service-details-provider/service-details-provider.component';
import {StillQuestionComponent} from './still-question/still-question.component';
import {FAQComponent} from './faq/faq.component';

const routes: Routes = [
 { path: 'service-complete-cancel',component: ServiceCompleteCancelledComponent, canActivate: [AuthGuard] },
 { path: 'service-profile',component: ServiceProfileComponent, canActivate: [AuthGuard] },
 { path: 'service-inprogress',component: ServiceInprogressComponent , canActivate: [AuthGuard]},
 { path: 'service-report',component: ServiceReportComponent, canActivate: [AuthGuard] },
 { path: 'service-request',component: ServiceRequestComponent, canActivate: [AuthGuard] },
 { path: 'service-setting',component: ServiceSettingComponent, canActivate: [AuthGuard] },
 { path: 'service-subscription',component: ServiceSubscriptionComponent, canActivate: [AuthGuard] },
 { path: 'bonus-cleaning',component: BonusCleaningPackageComponent, canActivate: [AuthGuard] },
 { path: 'invite-friend',component: InviteFriendComponent , canActivate: [AuthGuard]},
 { path: 'service-details-provider/:data', component: ServiceDetailsProviderComponent, canActivate: [AuthGuard]}
 ,{ path: 'still-question',component: StillQuestionComponent},
  { path: 'faq/:id',component: FAQComponent },


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServiceProvidersRoutingModule { }
