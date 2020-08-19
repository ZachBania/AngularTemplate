// Import Modules
import { Routes } from '@angular/router';

// Import Components
import { MainComponent } from './main/main.component';

import { FunctionsComponent } from './functions/functions.component';

import { ItemsComponent } from './items/items.component';
import { ItemDetailsComponent } from './items/item-details/item-details.component';
import { CreateItemComponent } from './items/create-item/create-item.component'

import { EventsComponent } from './events/events.component';
import { EventDetailsComponent } from './events/event-details/event-details.component';
import { CreateEventComponent } from './events/create-event.component';

// Import Services
import { EventsResolver } from './events/events-resolver.service'
import { EventResolver } from './events/event-resolver.service'


export const routes: Routes = [ // Routing order matters
  { path: 'main', component: MainComponent },
  { path: 'functions', component: FunctionsComponent },
  { path: 'items', component: ItemsComponent },
  { path: 'items/:id', component: ItemDetailsComponent },
  { path: 'items/create-item', component: CreateItemComponent },

  
  { path: 'events/create-event', component: CreateEventComponent }, 
  { path: 'events/:id', component: EventDetailsComponent, resolve: [EventResolver] },
  { path: 'events', component: EventsComponent, resolve: {EventsResolver} },

  { path: 'user', loadChildren: () => import('src/app/user/user.module').then(m => m.UserModule) },
 
  // Default routes
  { path: '', redirectTo: '/main', pathMatch: 'full' }, 
  { path: '**', redirectTo: '/main', pathMatch: 'full' },
]; 




