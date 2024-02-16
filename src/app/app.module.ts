import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';



import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getDatabase, provideDatabase } from '@angular/fire/database';
import { getFunctions, provideFunctions } from '@angular/fire/functions';
import { getMessaging, provideMessaging } from '@angular/fire/messaging';
import { getStorage, provideStorage } from '@angular/fire/storage'; 

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, LeafletModule,
    
    provideFirebaseApp(() => initializeApp(
      { 
        "projectId": "trocaderoappbd", 
        "appId": "1:357280189998:web:f62e2578651b3be901d9bf", 
        "storageBucket": "trocaderoappbd.appspot.com", 
        //"locationId": "us-central", 
        "apiKey": "AIzaSyB-ntaLmNioVjUFXN0KgbkSHi7YWKP_QXM", 
        "authDomain": "trocaderoappbd.firebaseapp.com", 
        "messagingSenderId": "357280189998" })), 
        provideAuth(() => getAuth()), 
        provideFirestore(() => getFirestore()), 
        provideDatabase(() => getDatabase()), 
        provideFunctions(() => getFunctions()), 
        provideMessaging(() => getMessaging()),
        provideStorage(() => getStorage())
      ],
        
  providers: [
    
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
    ],
  bootstrap: [AppComponent],
})
export class AppModule { }
