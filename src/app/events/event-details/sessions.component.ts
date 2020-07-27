import { Component, Input } from '@angular/core'
import { ISession } from '../shared/index'
@Component({
  selector: 'app-sessions',
  templateUrl: './sessions.component.html',
  styleUrls: ['./sessions.component.scss']
})
export class SessionsComponent  {

  constructor() { }
  @Input() sessions:ISession[];
  session: ISession;

  reset($event): void {

  }

}
