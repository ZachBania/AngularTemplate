// Import Main Packages
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
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

import { SessionsComponent } from './events/event-details/sessions.component';
import { CreateSessionComponent } from './events/event-details/create-session.component';

import { DashboardComponent } from './dashboard/dashboard.component';

import { SimpleModalComponent } from './common/simple-modal.component';

// Provide Services
import { EventsService } from './events/shared/events.service';
import { AuthService } from './user/auth.service';
import { JQ_TOKEN } from './common/jQuery.service';
let jQuery = window['$'];

// Import Pipes
import { FilterPipe } from './common/filter.pipe';
import { ModalTriggerDirective } from './common/modal-trigger.directive';


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
    SessionsComponent,
    CreateSessionComponent,
    DashboardComponent,
    SimpleModalComponent,
    // Pipes
    FilterPipe,
    // Directives
    ModalTriggerDirective,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
    HttpClientModule
  ],
  providers: [
    EventsService,
    AuthService,
    { provide: JQ_TOKEN, useValue: jQuery },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
