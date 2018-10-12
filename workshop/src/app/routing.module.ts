import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes} from '@angular/router';
export { RouterModule };

import { FirstComponent } from './modules/first/first.component';
import { FirebaseComponent } from './modules/firebase/firebase.component';

// Defines URL paths for browser
const routes: Routes = [
  { path: 'firebase', component: FirebaseComponent},
  { path: 'first', component: FirstComponent },
  { path: '', redirectTo: 'first', pathMatch: 'full' }
]

@NgModule({
  imports: [
    CommonModule,
    // Sets routes at root level for entire application
    RouterModule.forRoot(routes)
  ],
  declarations: [],
  exports: [ RouterModule ]
})
export class RoutingModule { }
