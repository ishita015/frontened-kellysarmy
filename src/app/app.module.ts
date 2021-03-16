import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { PagesModule } from './pages/pages.module';
import { HttpClientModule,HttpClient  } from '@angular/common/http';
import { UsersModule } from './users/users.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';
import { NgxAutocomPlaceModule } from 'ngx-autocom-place';
import { NgxStripeModule } from 'ngx-stripe';
import { environment } from 'src/environments/environment';
import { NgxSpinnerModule } from "ngx-spinner";
import { ApiService, Maps } from 'src/app/services/api.service';
// import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { ExportAsModule } from 'ngx-export-as';
// import { CommonModule } from "@angular/common";


import { TranslateModule, TranslateLoader, TranslateService } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
// loader module
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}
import {Observable} from "rxjs/Observable";
@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,NgxSpinnerModule,
    PagesModule,
    UsersModule,
    HttpClientModule,ExportAsModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }) ,
    //  TranslateModule.forRoot({
    //         defaultLanguage: 'en'
    //     }),
    // CommonModule,
     // NgxDatatableModule,
    BrowserAnimationsModule, OwlDateTimeModule, 
         OwlNativeDateTimeModule,NgxAutocomPlaceModule,    NgxStripeModule.forRoot(environment.stripe_publishable_key),

  ],
  exports: [TranslateModule],
  providers: [ApiService,TranslateService],
  bootstrap: [AppComponent]
})
export class AppModule { }
