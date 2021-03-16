import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MyServiceComponent } from './my-service/my-service.component';
import { MyTeamComponent } from './my-team/my-team.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthGuardService as AuthGuard } from './../auth/auth-guard.service';
import { MyProfileComponent } from './my-profile/my-profile.component';
import { MyAddressesComponent } from './my-addresses/my-addresses.component';
import { AddressesComponent } from './addresses/my-addresses.component';
import {PaymentOptionsComponent} from './payment-options/payment-options.component';
import {InviteFriendComponent} from './invite-friend/invite-friend.component';
import {BonusCleaningPackageComponent} from './bonus-cleaning-package/bonus-cleaning-package.component';
import {ChangePasswordComponent} from './change-password/change-password.component';
import {DeleteMyAccountComponent} from './delete-my-account/delete-my-account.component';
import {StillQuestionComponent} from './still-question/still-question.component';
import {MyServicessComponent} from './myservicess/myservicess.component';
import {FAQComponent} from './faq/faq.component';
import { ServiceSettingComponent } from './service-setting/service-setting.component';

import {ServiceDetailsCustomerComponent} from './service-details-customer/service-details-customer.component'
const routes: Routes = [
 // { path: 'dashboard',component: DashboardComponent, canActivate: [AuthGuard] },
 { path: 'dashboard',component: MyProfileComponent , canActivate: [AuthGuard]},
 { path: 'myservice',component: MyServiceComponent , canActivate: [AuthGuard]},
 { path: 'myteam',component: MyTeamComponent , canActivate: [AuthGuard]},
 { path: 'myaddress',component: MyAddressesComponent, canActivate: [AuthGuard] },
 { path: 'address/:id',component: AddressesComponent, canActivate: [AuthGuard] },
 { path: 'payment-option',component: PaymentOptionsComponent, canActivate: [AuthGuard] },
 { path: 'invite-friend',component: InviteFriendComponent , canActivate: [AuthGuard]},
 { path: 'bonus-cleaning',component: BonusCleaningPackageComponent, canActivate: [AuthGuard] },
 { path: 'change-password',component: ChangePasswordComponent, canActivate: [AuthGuard] },
 { path: 'delete-account',component: DeleteMyAccountComponent , canActivate: [AuthGuard]},
 { path: 'still-question',component: StillQuestionComponent},
 { path: 'my-service',component: MyServicessComponent, canActivate: [AuthGuard] },
 { path: 'faq/:id',component: FAQComponent },
  { path: 'service-setting',component: ServiceSettingComponent, canActivate: [AuthGuard] },

 { path: 'service-details-customer/:data', component: ServiceDetailsCustomerComponent, canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
