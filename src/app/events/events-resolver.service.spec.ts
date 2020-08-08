import { TestBed } from '@angular/core/testing';

import { EventListResolver } from './events-resolver.service';

describe('EventsListResolverService', () => {
  let service: EventListResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EventListResolver);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
