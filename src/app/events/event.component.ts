import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.scss']
})
export class EventComponent implements OnInit {

  @Input() event: any;
  @Output() eventDetailClick = new EventEmitter();

  detailClick(): void {
    this.eventDetailClick.emit(this.event.title);
  }

  constructor() { 
  
  }
  
  ngOnInit(): void {
  }

}
