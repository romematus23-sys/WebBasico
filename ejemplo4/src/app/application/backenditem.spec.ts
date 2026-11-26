import { TestBed } from '@angular/core/testing';
import { Backenditem } from './backenditem';

describe('Backenditem', () => {
  let service: Backenditem;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Backenditem);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
