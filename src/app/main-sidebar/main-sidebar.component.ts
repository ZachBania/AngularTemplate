import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IEvent, EventsService, ISession } from '../events/shared/index';

@Component({
  selector: 'app-main-sidebar',
  templateUrl: './main-sidebar.component.html',
  styleUrls: ['./main-sidebar.component.scss']
})
export class MainSidebarComponent implements OnInit {
  event: IEvent;
  session: ISession;

  constructor(private eventService: EventsService, private route:ActivatedRoute) { }
  ngOnInit(): void {
    this.route.data.forEach((data) => {
      this.event = data['event'];
    })
  }  

  searchTerm: string = "";
  foundSessions: ISession[]
  searchSessions(searchTerm) {
    this.eventService.searchSessions(searchTerm).subscribe(sessions => {
      this.foundSessions = sessions;
      console.log(this.foundSessions);
    })
  }

}
