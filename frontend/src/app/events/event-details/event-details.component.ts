import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { IEvent, EventsService, ISession } from '../shared/index';

@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.scss']
})
export class EventDetailsComponent implements OnInit {

  event: IEvent;
  session: ISession;
  addMode:boolean
  constructor(private eventService: EventsService, private route:ActivatedRoute) { }

  ngOnInit() {
    this.route.params.forEach((params: Params) => {
      this.eventService.getEvent(+params['id']).subscribe((event: IEvent) => {
        this.event = event;
        this.addMode = false;
      })
    })
  }

  addSession() {
    this.addMode = true
  }

  saveNewSession(session:ISession) {
    const nextId = Math.max.apply(null, this.event.sessions.map(s => s.id));
    session.id = nextId + 1
    this.event.sessions.push(session)
    this.eventService.saveEvent(this.event).subscribe();
    this.addMode = false
  }

  cancelAddSession() {
    this.addMode = false
  }


}
