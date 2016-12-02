import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { AngularFireModule, AuthProviders, AuthMethods } from 'angularfire2';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

export const firebaseConfig = {
  apiKey: "AIzaSyDElp_wKrZBWgh-rhsfRlsyHKm-101Lqr0",
  authDomain: "pichat-381aa.firebaseapp.com",
  databaseURL: "https://pichat-381aa.firebaseio.com",
  storageBucket: "pichat-381aa.appspot.com",
  messagingSenderId: "689229560693"
};

const firebaseAuthConfig = {
  provider: AuthProviders.Google,
  method: AuthMethods.Redirect
};

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule.forRoot(),
    AngularFireModule.initializeApp(firebaseConfig, firebaseAuthConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
