// Import Main Packages
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// Import and Declare Routing
import { routes, routingComponents } from './app-routing.module';
import { RouterModule } from '@angular/router';
// Declare Components
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import  { MainSidebarComponent } from './main-sidebar/main-sidebar.component';

import { FunctionsComponent } from './functions/functions.component';

import { EventsComponent } from './events/events.component';
import { EventComponent } from './events/event.component'
import { EventDetailsComponent } from './events/event-details/event-details.component';
import { CreateEventComponent } from './events/create-event.component';

// Provide Services
import { EventsService } from './events/shared/events.service';
import { AuthService } from './user/auth.service';
// Import Pipes
import { TableFilterPipe } from './functions/table-filter.pipe';
import { SessionsComponent } from './events/event-details/sessions.component';
import { CreateSessionComponent } from './events/event-details/create-session.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    MainSidebarComponent,
    //Function Components
    FunctionsComponent,
    // Events Components
    EventsComponent,
    EventComponent,
    EventDetailsComponent,
    CreateEventComponent,
    // Pipes
    TableFilterPipe,
    SessionsComponent,
    CreateSessionComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
  ],
  providers: [
    EventsService,
    AuthService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
