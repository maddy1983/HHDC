import {Routes} from '@angular/router';
import {DoorsComponent} from './doors/doors.component';

export const appRoutes: Routes = [
  {path: 'doors', component: DoorsComponent},
  {path: '', redirectTo: '/doors', pathMatch: 'full'}
];
