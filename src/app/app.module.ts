import 'flatpickr/dist/flatpickr.css';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { RegistrationComponent } from './user/registration/registration.component';
import { UserService } from './shared/user.service';
import { LoginComponent } from './user/login/login.component';

import { AuthInterceptor } from './auth/auth.interceptor';


import { FlatpickrModule } from 'angularx-flatpickr';

import { CommonModule } from '@angular/common';
import { ConfirmDialogModule } from './confirm-dialog/confirm-dialog.module';
import { UtilsUI } from './utils/utils-ui';
import { ConfirmDialogComponent } from './confirm-dialog/components/confirm-dialog.component';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule, MatInputModule, MatPaginatorModule, MatProgressSpinnerModule, MatSortModule, MatIconModule, MatDialogModule, MatSelectModule, MatFormFieldModule } from '@angular/material';
import { CursaComponent } from './cursa/cursa.component';

import { PruebaComponent } from './modules/prueba/pages/prueba.component';

import { HomeComponent } from './modules/home/pages/home/home.component';
import { AgendaModule } from './modules/agenda/agenda.module';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    RegistrationComponent,
    LoginComponent,
    HomeComponent,
    PruebaComponent,
    CursaComponent,
    
  ],
  imports: [
    AgendaModule,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    CommonModule,
    FormsModule,
    MatButtonModule,
    MatTableModule,
    MatInputModule,
    MatPaginatorModule,
    MatProgressSpinnerModule,
    MatSortModule,
    MatIconModule,
    MatDialogModule,
    MatSelectModule,
    MatFormFieldModule,
    
    FlatpickrModule.forRoot(),
    ConfirmDialogModule,
    ToastrModule.forRoot({
      progressBar: true
    }),
    FormsModule,
    
  ],
  entryComponents:[
    ConfirmDialogComponent
  ],
  providers: [UtilsUI, UserService, {
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
