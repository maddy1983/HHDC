import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {RouterModule} from '@angular/router';
import {PopupModule} from 'ng2-opd-popup';

import {AppComponent} from './app.component';
import {appRoutes} from './routes';
import {NavComponent} from './nav/nav.component';
import {HeaderComponent} from './header/header.component';
import {BannerComponent} from './banner/banner.component';
import {TrendingNowComponent} from './trending-now/trending-now.component';
import {ApiStoreService} from "./shared/api-store.service";
import { ZipResultsComponent } from './zip-results/zip-results.component';
import { CategoryComponent } from './category/category.component';
import { ServiceRepairComponent } from './modals/service-repair/service-repair.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HeaderComponent,
    BannerComponent,
    TrendingNowComponent,
    ZipResultsComponent,
    CategoryComponent,
    ServiceRepairComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    PopupModule.forRoot(),
    RouterModule.forRoot(appRoutes)
  ],
  providers: [ApiStoreService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
