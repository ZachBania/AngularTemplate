import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-functions',
  templateUrl: './functions.component.html',
  styleUrls: ['./functions.component.scss']
})

export class FunctionsComponent  {
  pageTitle: string = "Framework Functions"; 

  tabs: { tabId: number, tabTitle: string, tabDescription: string, tabMeta?: string }[] = [
    { tabId: 1, tabTitle: "Tab One", tabDescription: "Tab One Description", tabMeta: "Tab One Meta" },
    { tabId: 2, tabTitle: "Tab Two", tabDescription: "Tab Two Description", tabMeta: "Tab Two Meta" },
    { tabId: 3, tabTitle: "Tab Three", tabDescription: "Tab Three Description", tabMeta: "Tab Three Meta" },
    { tabId: 4, tabTitle: "Tab Four", tabDescription: "Tab Four Description", tabMeta: "Tab Four Meta" }, 
  ];






}
