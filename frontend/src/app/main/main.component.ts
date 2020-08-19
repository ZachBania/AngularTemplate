import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {

  pageTitle: string = "Zach Bania's Angular Template";
  pageDescriptions: string[] = ["AngularJS is a TypeScript-based open-source web application framework.", "Operating Version: " + document.querySelector('[ng-version]').getAttribute('ng-version')];

  bodyContent: string [] = 
  ["AngularJS is capabile of providing a Single Page Application Framework that allows for data binding, testable code metrics, dependency injection, API and HTTP Services, and much more.",
  "Software Developers can achieve more functionality and effeciency with the AngularJS framework, providing confidence that the code meterics of the web application are reliable."];
  
  
  

}
