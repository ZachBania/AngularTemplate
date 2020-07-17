// Import Main Packages
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// Import Routing
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { RouterModule } from '@angular/router';
// Import Components
import { AppComponent } from './app.component';
import { MainSidebarComponent } from './main-sidebar/main-sidebar.component';
import { FormComponent } from './form/form.component';
import { TableFilterPipe } from './functions/table-filter.pipe';
import { EventsComponent } from './events/events.component';
import { EventComponent } from './events/event.component';
// import Services
import { EventsService } from './events/shared/events.service';

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    MainSidebarComponent,
    FormComponent,
    TableFilterPipe,
    EventsComponent,
    EventComponent,
  ],
  imports: [
    BrowserModule, 
    AppRoutingModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [EventsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
