import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IEvent } from './shared/index';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.scss']
})
export class EventComponent implements OnInit {

  @Input() event: IEvent;
  @Output() eventDetailClick = new EventEmitter();

  detailClick(): void {
    this.eventDetailClick.emit(this.event.name);
  }

  constructor() { 
  
  }
  
  ngOnInit(): void {
  }

}
