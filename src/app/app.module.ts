import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {RouterModule} from '@angular/router';

import {AppComponent} from './app.component';
import {appRoutes} from './routes';
import {NavComponent} from './nav/nav.component';
import {DoorsComponent} from './doors/doors.component';
import {ColorComponent} from './color/color.component';
import {DataService} from "./shared/data-service";

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    DoorsComponent,
    ColorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
