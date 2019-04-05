import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { PaypalComponent } from './paypalSection/paypal.component';
import { ArticlesComponent } from './articlesSection/articles.component';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UiSwitchModule } from 'ngx-ui-switch';
import { DatosPersonalesComponent } from './datospersonales/datos.component';

@NgModule({
  declarations: [
    AppComponent,
    PaypalComponent,
    ArticlesComponent,
    DatosPersonalesComponent
  ],
  imports: [
    BrowserModule,
    ModalModule.forRoot(),
    LeafletModule.forRoot(),
    HttpClientModule,
    FormsModule,
    UiSwitchModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
