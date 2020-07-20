// Import Modules
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
// Custom Modules

// Import Components
import { FunctionsComponent } from './functions/functions.component';
import { MainComponent } from './main/main.component';
import { EventsComponent } from './events/events.component';
import { EventDetailsComponent } from './events/event-details/event-details.component';


const routes: Routes = [
  { path: 'main', component: MainComponent },
  { path: 'functions', component: FunctionsComponent },
  { path: 'events', component: EventsComponent },
  { path: 'events/:id', component: EventDetailsComponent },
  { path: '', redirectTo: '/main', pathMatch: 'full' }, // Default route
  { path: '**', redirectTo: '/main', pathMatch: 'full' } // Wildcard route (404)
]; 

@NgModule({
  imports: [RouterModule.forRoot(routes)], 
  exports: [RouterModule]
})

export class AppRoutingModule { 

  
}

export const routingComponents = [MainComponent, FunctionsComponent];

