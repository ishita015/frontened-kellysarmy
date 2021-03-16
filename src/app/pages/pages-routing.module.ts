import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
// import { serviceDetailComponent } from './service-detail/service-detail.component';
import { refferComponent } from './reffer/reffer.component';
import { changePolicyComponent } from './change-policy/change-policy.component';
import { cancellationPolicyComponent } from './cancellation_policy/cancellation_policy.component';
import { how_do_we_cleanComponent } from './how_do_we_clean/how_do_we_clean.component';
import { userAgreementComponent } from './user-agreement/user-agreement.component';
import { gdprComponent } from './gdpr/gdpr.component';
import { HomeComponent } from './home/home.component';
import { paymentComponent } from './payment/payment.component';
import { BlogsComponent } from './blogs/blogs.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { DeepCleaningComponent } from './deep-cleaning/deep-cleaning.component';
import { DomesticCleaningComponentComponent } from './domestic-cleaning/domestic-cleaning.component';
import { LoginComponent } from './login/login.component';
import { ServicesComponent } from './services/services.component';
import { SignupComponent } from './signup/signup.component';
import { verifyComponent } from './verify/verify.component';
import { Step1Component } from './become-member/step1/step1.component';
import { BlogDetailsComponent } from './blog-details/blog-details.component';
import { SendMailResetPasswordComponent } from './send-mail-reset-password/send-mail-reset-password.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';

const routes: Routes = [
  { path: 'home/:id', component: HomeComponent },
  { path: '', component: HomeComponent },
  { path: 'reffer', component: refferComponent },
  { path: 'verify/:id', component: verifyComponent },
  { path: 'about-us', component: AboutComponent },
  // { path: 'service-detail/:id',component: serviceDetailComponent },
  { path: 'change-policy', component: changePolicyComponent },
  { path: 'cancellation-policy', component: cancellationPolicyComponent },
  { path: 'how-do-we-clean', component: how_do_we_cleanComponent },
  { path: 'user-agreement', component: userAgreementComponent },
  { path: 'gdpr', component: gdprComponent },
  { path: 'blogs', component: BlogsComponent },
  { path: 'blog-details/:id', component: BlogDetailsComponent },
  { path: 'contact-us', component: ContactUsComponent },
  { path: 'deep-cleaning/:id/:id1/:id2', component: DeepCleaningComponent },
  { path: 'domestic-cleaning/:id/:id1/:id2', component: DomesticCleaningComponentComponent },
  { path: 'deep-cleaning/:id/:id1', component: DeepCleaningComponent },
  { path: 'domestic-cleaning/:id/:id1', component: DomesticCleaningComponentComponent },
  { path: 'login', component: LoginComponent },
  { path: 'service', component: ServicesComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'signup/:id', component: SignupComponent },
  { path: 'payment', component: paymentComponent },
  {
    path: 'member', children: [
      { path: 'step1', component: Step1Component },
      { path: 'step1/:id', component: Step1Component },
    ]
  },
  { path: 'forgot-password', component: SendMailResetPasswordComponent },
  { path: 'reset-password/:key', component: ResetPasswordComponent },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],

})
export class PagesRoutingModule { }
