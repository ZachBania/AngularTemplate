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


@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    MainSidebarComponent,
    FormComponent,
    TableFilterPipe
  ],
  imports: [
    BrowserModule, 
    AppRoutingModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
