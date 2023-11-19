import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';




import { InicioComponent } from './home/pages/inicio/inicio.component';
import { PrivacyComponent } from './home/pages/privacy/privacy.component';

import { HeaderComponent } from './home/header/header.component';
import { FooterComponent } from './home/footer/footer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthModule } from './auth/auth.module';
import { HttpClientModule } from '@angular/common/http';
import { GestorModule } from './gestor/gestor.module';
import { ServiceWorkerModule } from '@angular/service-worker';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PrmanualComponent } from './home/pages/prmanual/prmanual.component';

@NgModule({
  declarations: [
    AppComponent,
   
    HeaderComponent,
    FooterComponent,
    InicioComponent,
    PrivacyComponent,
    PrmanualComponent,
  
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule,
    
    
    HttpClientModule,
    BrowserAnimationsModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: !isDevMode(),
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    }),

    
  ],
  exports:[
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
