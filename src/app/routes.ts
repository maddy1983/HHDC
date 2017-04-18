import {Routes} from '@angular/router';
import {BannerComponent} from "./banner/banner.component";
import {ZipResultsComponent} from "./zip-results/zip-results.component";
import {CategoryComponent} from "./category/category.component";

export const appRoutes: Routes = [
  {path: 'banner', component: BannerComponent},
  {path: 'zipResults', component: ZipResultsComponent},
  {path: 'category', component: CategoryComponent},
  {path: '', redirectTo: '/banner', pathMatch: 'full'}
];
