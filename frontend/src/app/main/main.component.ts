import { Component, OnInit, Inject } from '@angular/core';
import { JQ_TOKEN } from "./../common/jQuery.service";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {
  
  constructor(@Inject(JQ_TOKEN) private $: any) {}

  pageTitle: string = "Angular Prototype";
  angularVersion: string = document.querySelector('[ng-version]').getAttribute('ng-version');
  bootstrapVersion: string = this.$.fn.tooltip.Constructor.VERSION;
  
  
//AngularJS is capabile of providing a Single Page Application Framework that allows for data binding, testable code metrics, dependency injection, API and HTTP Services, and much more.
//Software Developers can achieve more functionality and effeciency with the AngularJS framework, providing confidence that the code meterics of the web application are reliable.
  
  
  

}
