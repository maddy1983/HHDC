import {Routes} from '@angular/router';
import {BannerComponent} from "./banner/banner.component";
import {ZipResultsComponent} from "./zip-results/zip-results.component";

export const appRoutes: Routes = [
  {path: 'banner', component: BannerComponent},
  {path: 'zipResults', component: ZipResultsComponent},
  {path: '', redirectTo: '/banner', pathMatch: 'full'}
];
