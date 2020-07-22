import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { EventsService } from './shared/events.service';

@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.scss']
})
export class CreateEventComponent {
  newEvent
  isDirty:boolean = true
  constructor(private router: Router, private eventService:EventsService) {

  }

  saveEvent(formValues) {
    this.eventService.saveEvent(formValues)
    this.isDirty = false
    this.router.navigate(['/events'])
  }

  cancel() {
    this.router.navigate(['/events'])
  }
}