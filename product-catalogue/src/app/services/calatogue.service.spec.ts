import { TestBed } from '@angular/core/testing';

import { CalatogueService } from './calatogue.service';

describe('CalatogueService', () => {
  let service: CalatogueService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CalatogueService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
