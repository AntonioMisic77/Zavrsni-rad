import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {  DashboardComponent } from './dashboard/dashboard.component';
import { StatisticScopeComponent } from './dashboard/statisticScope/statisticScope.component';
import { MethodFilterComponent } from './dashboard/methodFilter/methodFilter.component';
import { MetalsComponent } from './dashboard/metals/metals.component';
import { ChainsComponent } from './dashboard/chains/chains.component';
import { LingadsComponent } from './dashboard/lingads/lingads.component';
import { GeometryComponent } from './dashboard/geometry/geometry.component';
import { ReactiveFormsModule } from '@angular/forms';
import { StatisticComponent } from './statistics/statistics.component';
import { AppRoutingModule } from './app.routing.module';
import { HomeComponent } from './statistics/home/home.component';
import { StatisticM2 } from './statistics/statisticM2/statisticM2.component';
import { HttpClientModule } from '@angular/common/http';
import { StatisticM1Component } from './statistics/statisticM1/statisticM1.component';
import { StatisticM5Component } from './statistics/statisticM5/statisticM5.component';
import { StatisticM7Component } from './statistics/statisticM7/statisticM7.component';
import { LoadingSpinner } from './shared/loading-spinner/loading-spinner.component';
import { EmptyStatisticComponent } from './statistics/emptyStatistic/emptyStatistic.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    StatisticScopeComponent,
    MethodFilterComponent,
    MetalsComponent,
    ChainsComponent,
    LingadsComponent,
    GeometryComponent,
    StatisticComponent,
    HomeComponent,
    StatisticM1Component,
    StatisticM2,
    StatisticM5Component,
    StatisticM7Component,
    LoadingSpinner,
    EmptyStatisticComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
