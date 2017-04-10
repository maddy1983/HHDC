import {Routes} from '@angular/router';
import {DoorsComponent} from './doors/doors.component';
import {ColorComponent} from "./color/color.component";
import {WriterComponent} from "./writer/writer.component";

export const appRoutes: Routes = [
  {path: 'doors', component: DoorsComponent},
  {path: 'color', component: ColorComponent},
  {path: 'writer/:id', component: WriterComponent},
  {path: '', redirectTo: '/doors', pathMatch: 'full'}
];
