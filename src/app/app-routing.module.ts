// Import Modules
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Import Components
import { MainComponent } from './main/main.component';
import  { MainSidebarComponent } from './main-sidebar/main-sidebar.component';

import { FunctionsComponent } from './functions/functions.component';

import { EventsComponent } from './events/events.component';
import { EventDetailsComponent } from './events/event-details/event-details.component';
import { CreateEventComponent } from './events/create-event.component';

import { ProfileComponent } from './user/profile.component';
import { LoginComponent } from './user/login.component';

import { DashboardComponent } from './dashboard/dashboard.component';

export const routes: Routes = [ // Routing order matters
  { path: 'main', component: MainComponent },
  { path: 'functions', component: FunctionsComponent },
  { path: 'dashboard', component: DashboardComponent },
  
  { path: 'events/create-event', component: CreateEventComponent }, 
  { path: 'events/:id', component: EventDetailsComponent },
  { path: 'events', component: EventsComponent },
  //() => import('src/app/auth/auth.module').then(m => m.AuthModule)
  //'/src/app/user/user.module#UserModule'
  { path: 'user', loadChildren: () => import('src/app/user/user.module').then(m => m.UserModule) },
  // Default routes
  { path: '', redirectTo: '/main', pathMatch: 'full' }, 
  { path: '**', redirectTo: '/main', pathMatch: 'full' },
]; 



export const routingComponents = [
  MainComponent,
  MainSidebarComponent,
  //Function Components
  FunctionsComponent,
  // Events Components
  EventsComponent,
  EventDetailsComponent,
  CreateEventComponent,
  // User Components
  ProfileComponent,
  LoginComponent,
];

