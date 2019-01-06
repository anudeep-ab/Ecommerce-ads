
import { AdService } from './ad.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdDirective } from './ad.directive';
import { AdbannerComponent } from './adbanner/adbanner.component';
import { AdComponent } from './ad/ad.component';
import { HomeComponent } from './home/home.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './header/header.component';


@NgModule({
  declarations: [
    AppComponent,
    AdbannerComponent,
    AdComponent,
    AdDirective,
    HomeComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [AdService],
  entryComponents: [ AdComponent ],
  bootstrap: [AppComponent]
})
export class AppModule { }
