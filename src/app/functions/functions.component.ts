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
    { tabId: 4, tabTitle: "Tab Four", tabDescription: "Tab Four Description", tabMeta: "Tab Four Meta" }, 
  ];

  taskStatus: string;
  taskType: string;

  tasks: { taskId: number, taskTitle: string, taskDescription: string, taskStatus: string, taskType: string, taskContributors: string[] }[] = [
    { taskId: 1, taskTitle: 'Project One', taskDescription: 'Upgrade your website', taskStatus: 'complete', taskType: 'development', taskContributors: ['you']},
    { taskId: 2, taskTitle: 'Project Two', taskDescription: 'Upgrade your marketing', taskStatus: 'in-progress', taskType: 'marketing', taskContributors: ['you']},
    { taskId: 3, taskTitle: 'Project Three', taskDescription: 'Upgrade your business', taskStatus: 'incomplete', taskType: 'global', taskContributors: ['you']},
  ];

  reset($event): void {
    this.taskStatus = '';
    this.taskType = '';
  }

}
