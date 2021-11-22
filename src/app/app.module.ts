import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { MioInterceptorInterceptor } from './mio-interceptor.interceptor';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HomeCrmComponent } from './home-crm/home-crm.component';
import { VisualizzaClientiComponent } from './visualizza-clienti/visualizza-clienti.component';
import { DettaglioClientiComponent } from './dettaglio-clienti/dettaglio-clienti.component';
import { InserisciClienteComponent } from './inserisci-cliente/inserisci-cliente.component';
import { VisualizzaFattureComponent } from './visualizza-fatture/visualizza-fatture.component';
import { InserisciFattureComponent } from './inserisci-fatture/inserisci-fatture.component';
import { DettaglioFattureComponent } from './dettaglio-fatture/dettaglio-fatture.component';
import { LoginComponent } from './login/login.component';
import { TestataComponent } from './testata/testata.component';
import { PiepagComponent } from './piepag/piepag.component';
import { Testata2Component } from './testata2/testata2.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home'
  },
  {
    path: 'home/new',
    component: InserisciClienteComponent
  },
  {
    path: 'home/view',
    component: VisualizzaClientiComponent
  },
  {
    path: 'home/:id/dettaglio',
    component: DettaglioClientiComponent
  },
  {
    path: 'home/dettaglio',
    component: DettaglioClientiComponent
  },
  {
    path: 'home/viewF',
    component: VisualizzaFattureComponent
  },
  {
    path: 'home/dettaglioF',
    component: DettaglioFattureComponent
  },
  {
    path: 'home/newF',
    component: InserisciFattureComponent
  },
  {
    path: 'home/:id/dettaglioF',
    component: DettaglioFattureComponent
  },
  {
    path: 'home/crm',
    component: HomeCrmComponent
  },
  {
    path: 'home/log',
    component: LoginComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HomeCrmComponent,
    VisualizzaClientiComponent,
    DettaglioClientiComponent,
    InserisciClienteComponent,
    VisualizzaFattureComponent,
    InserisciFattureComponent,
    DettaglioFattureComponent,
    LoginComponent,
    TestataComponent,
    PiepagComponent,
    Testata2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: MioInterceptorInterceptor,
    multi: true
  }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
