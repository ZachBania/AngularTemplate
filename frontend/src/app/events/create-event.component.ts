import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl } from '@angular/forms';
import { EventsService } from '../services/events.service';

@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.scss']
})
export class CreateEventComponent {
  newEvent
  isDirty:boolean = true
  constructor(private router: Router, private eventsService:EventsService) {

  }

  saveEvent(formValues) {
    this.eventsService.saveEvent(formValues).subscribe(() => {
      this.isDirty = false
      this.router.navigate(['/events'])
    });
  }

  cancel() {
    this.router.navigate(['/events'])
  }
}