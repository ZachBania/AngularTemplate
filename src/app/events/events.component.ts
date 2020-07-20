import { Component, OnInit } from '@angular/core';
import { IEvent, EventsService } from './shared/index';


@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit {




  detailClick(data) {
    console.log(data);
  }

 
  events: IEvent[];
  constructor(private eventsService: EventsService) { 
  
  }
  
  ngOnInit(): void {
    this.eventsService.getEvents().subscribe(res => {
      this.events = res;
    });
  }

}
