import { Component, OnInit } from '@angular/core';
import { toBase64String } from '@angular/compiler/src/output/source_map';

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
];

}
