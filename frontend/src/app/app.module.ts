// Import Main Packages
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
// Import and Declare Routing
import { routes } from './app-routing.module';
import { RouterModule } from '@angular/router';
// Declare Components
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { MainNavComponent } from './main-nav/main-nav.component';
import  { MainSidebarComponent } from './main-sidebar/main-sidebar.component';

import { FunctionsComponent } from './functions/functions.component';

import { EventsComponent } from './events/events.component';
import { EventComponent } from './events/event.component'
import { EventDetailsComponent } from './events/event-details/event-details.component';
import { CreateEventComponent } from './events/create-event.component';

import { ItemsComponent } from './items/items.component';
import { ItemComponent } from './items/item.component';
import { ItemDetailsComponent } from './items/item-details/item-details.component';
import { CreateItemComponent } from './items/create-item/create-item.component';

import { SessionsComponent } from './events/event-details/sessions.component';
import { CreateSessionComponent } from './events/event-details/create-session.component';

import { SimpleModalComponent } from './common/simple-modal.component';

// Provide Services
import { EventsService } from './services/events.service';
import { AuthService } from './services/auth.service';
import { JQ_TOKEN } from './common/jQuery.service';
let jQuery = window['$'];
import { EventsResolver } from './events/events-resolver.service'
import { EventResolver } from './events/event-resolver.service'

// Import Pipes
import { DropdownFilterPipe } from './common/dropdown-filter.pipe';
import { ModalTriggerDirective } from './common/modal-trigger.directive';
import { KeywordFilterPipe } from './common/keyword-filter.pipe';


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
    // Other Components
    SimpleModalComponent,
    // Pipes
    DropdownFilterPipe,
    // Directives
    ModalTriggerDirective,
    MainNavComponent,
    // Items
    ItemsComponent,
    ItemComponent,
    ItemDetailsComponent,
    CreateItemComponent,
    KeywordFilterPipe,
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
    EventsResolver,
    EventResolver,
    { provide: JQ_TOKEN, useValue: jQuery },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
