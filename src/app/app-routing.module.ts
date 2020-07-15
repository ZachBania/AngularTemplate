import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// Import Components
import { FunctionsComponent } from './functions/functions.component';
import { MainComponent } from './main/main.component';
import { FormComponent } from './form/form.component';


const routes: Routes = [
  { path: 'main', component: MainComponent },
  { path: 'functions', component: FunctionsComponent },
  { path: 'form', component: FormComponent },
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

