// Import Modules
import { Routes } from '@angular/router';

// Import Components
import { MainComponent } from './main/main.component';

import { FunctionsComponent } from './functions/functions.component';

import { ItemsComponent } from './items/items.component';
import { ItemDetailsComponent } from './items/item-details/item-details.component';
import { CreateItemComponent } from './items/create-item/create-item.component';
import { UpdateItemComponent } from './items/update-item/update-item.component'

import { ItemCartComponent } from './item-cart/item-cart.component';

import { NotFoundComponent } from './common/errors/not-found.component';


export const routes: Routes = [ // Routing order matters
  { path: 'main', component: MainComponent },
  { path: 'functions', component: FunctionsComponent },

  { path: 'items', component: ItemsComponent },
  { path: 'items/create-item', component: CreateItemComponent },
  { path: 'items/update-item/:id', component: UpdateItemComponent },
  { path: 'items/:id', component: ItemDetailsComponent },
  
  { path: 'item-cart', component: ItemCartComponent },

  { path: 'user', loadChildren: () => import('src/app/user/user.module').then(m => m.UserModule) },
 
  // Error routes
  { path: '404', component: NotFoundComponent },
  // Default routes
  // { path: '', redirectTo: '/main', pathMatch: 'full' }, 
  { path: '**', redirectTo: '/main', pathMatch: 'full' },
]; 




