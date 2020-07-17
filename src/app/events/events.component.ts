import { Component, OnInit } from '@angular/core';
import { EventsService } from './shared/events.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit {




  detailClick(data) {
    console.log(data);
  }


  events: any[];
  constructor(private eventsService: EventsService) { 
  
  }
  
  ngOnInit(): void {
    this.events = this.eventsService.getEvents();
  }

}
