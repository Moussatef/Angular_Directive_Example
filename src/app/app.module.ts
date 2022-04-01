import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardComponent } from './components/card/card.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SmallCardComponent } from './components/small-card/small-card/small-card.component';
import { HostLestnerComponent } from './components/host-lestner.component';
import { MystyleDirective } from './directives/mystyle.directive';
import { MyIfDirective } from './directives/my-if.directive';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    SmallCardComponent,
    HostLestnerComponent,
    MystyleDirective,
    MyIfDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
