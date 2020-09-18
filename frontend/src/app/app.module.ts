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
import { HeaderComponent } from './main-nav/header/header.component';
import { FooterComponent } from './main-nav/footer/footer.component';
import { MainComponent } from './main/main.component';
import  { MainSidebarComponent } from './main-sidebar/main-sidebar.component';

import { FunctionsComponent } from './functions/functions.component';

import { ItemsComponent } from './items/items.component';
import { ItemComponent } from './items/item.component';
import { ItemDetailsComponent } from './items/item-details/item-details.component';
import { CreateItemComponent } from './items/create-item/create-item.component';
import { UpdateItemComponent } from './items/update-item/update-item.component';

import { SimpleModalComponent } from './common/simple-modal.component';

// Provide Services
import { AuthService } from './services/auth.service';
import { JQ_TOKEN } from './common/jQuery.service';
import { ModalTriggerDirective } from './common/modal-trigger.directive';
let jQuery = window['$'];

// Import Pipes
import { DropdownFilterPipe } from './common/dropdown-filter.pipe';
import { KeywordFilterPipe } from './common/keyword-filter.pipe';
import { NotFoundComponent } from './common/errors/not-found.component';
import { ItemCartComponent } from './item-cart/item-cart.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainComponent,
    MainSidebarComponent,
    //Function Components
    FunctionsComponent,

    // Other Components
    SimpleModalComponent,
    // Pipes
    DropdownFilterPipe,
    KeywordFilterPipe,
    // Directives
    ModalTriggerDirective,
    // Items
    ItemsComponent,
    ItemComponent,
    ItemDetailsComponent,
    CreateItemComponent,
    // Other
    NotFoundComponent,
    UpdateItemComponent,
    ItemCartComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
    HttpClientModule
  ],
  providers: [
    AuthService,
    { provide: JQ_TOKEN, useValue: jQuery },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
