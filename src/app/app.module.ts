import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { PaypalComponent } from './paypalSection/paypal.component';
import { ArticlesComponent } from './articlesSection/articles.component';

@NgModule({
  declarations: [
    AppComponent,
    PaypalComponent,
    ArticlesComponent
  ],
  imports: [
    BrowserModule,
    ModalModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
