import { Injectable } from '@angular/core'
import { Resolve } from '@angular/router'
import { EventsService } from '../services/events.service'
import { map } from 'rxjs/operators'

@Injectable()
export class EventsResolver implements Resolve<any> {
  constructor(private eventsService: EventsService) {

  }

  resolve() {
    return this.eventsService.getEvents()
  }
}