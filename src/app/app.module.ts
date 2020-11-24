import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DashboardMainComponent } from './dashboard/dashboard-main/dashboard-main.component';
import { DashboardDetailComponent } from './dashboard/dashboard-detail/dashboard-detail.component';
import { LineChartComponent } from './line-chart/line-chart.component';

import{HttpClientModule}from'@angular/common/http';
import { UsuarioComponent } from './usuario/usuario.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    NotFoundComponent,
    LoginComponent,
    DashboardComponent,
    DashboardMainComponent,
    DashboardDetailComponent,
    LineChartComponent,
    UsuarioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
