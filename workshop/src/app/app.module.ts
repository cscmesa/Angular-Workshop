// ROOT ANGULAR MODULE RESPONSIBLE FOR DISTRIBUTING COMPONENTS,
// SERVICES, ETC. TO REST OF APPLICATION

/* Import Statements */

// Core imports
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// User-created modules
import { RoutingModule } from './routing.module';
import { SharedModule } from './shared.module';

import { FirstModule } from './modules/first/first.module';
import { FirebaseModule } from './modules/firebase/firebase.module';

// Root components
import { AppComponent } from './app.component';
import { LoneComponent } from './lone/lone.component';

import { FirestoreService } from './services/firestore.service';

@NgModule({
  // Declarations are the components, directives, & pipes that belong to this module
  declarations: [
    AppComponent,
    LoneComponent
  ],
  // Imports are other modules whose exported classes are needed by component templates declared in this module
  imports: [
    BrowserModule,
    RoutingModule,
    SharedModule,
    FirstModule,
    FirebaseModule
  ],
  // Creates services that are distributed to rest of app
  providers: [FirestoreService],
  // Hosts all other app views - SHOULD ONLY BE IN ROOT NGMODULE
  bootstrap: [AppComponent]
})
export class AppModule { }
