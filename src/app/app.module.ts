import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule} from '@angular/material/button';
import { MatDividerModule} from '@angular/material/divider';
import { MatIconModule} from '@angular/material/icon'
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule} from '@angular/forms' 
import { MatListModule} from '@angular/material/list'
import {MatTableModule} from '@angular/material/table'

import {config} from './config'
import { FirebaseAppModule, initializeApp, provideFirebaseApp } from '@angular/fire/app';
import {FirestoreModule} from '@angular/fire/firestore'

import { DbCmpComponent } from './db-cmp/db-cmp.component';

@NgModule({
  declarations: [
    AppComponent,
    DbCmpComponent
  ],
  imports: [
    provideFirebaseApp(()=>initializeApp(config.firebase)),
    FirebaseAppModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatDividerModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    FirestoreModule,
    MatListModule,
    MatTableModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
