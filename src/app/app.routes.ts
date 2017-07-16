import { Routes } from '@angular/router';

/// Custom components
import { HomeComponent } from './home/home.component';

/// Routes
export const NavRouterConfig: Routes = [
      { path: '', pathMatch: 'prefix', redirectTo: 'home'},
      { path: "home", component: HomeComponent }
];