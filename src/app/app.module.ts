import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TableModule } from 'primeng/table';
import { UsuarioComponent } from './components/usuario/usuario.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { PanelModule } from 'primeng/panel';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
    UsuarioComponent
  ],
  imports: [
    BrowserModule,
    TableModule,
    RouterModule,
    HttpClientModule,
    PanelModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
