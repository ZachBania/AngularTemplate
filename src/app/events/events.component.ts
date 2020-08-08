import { Component, OnInit } from '@angular/core';
import { IEvent, EventsService, ISession } from './shared/index';
import { ActivatedRoute } from '@angular/router'


@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit {

  searchTerm: string = "";
  foundSessions: ISession[]

  events: IEvent[];
  constructor(private eventsService: EventsService, private route:ActivatedRoute) {
    
  }
  
  ngOnInit(): void {
    this.eventsService.getEvents().subscribe(res => {
      this.events = res;
    });
  }
}
