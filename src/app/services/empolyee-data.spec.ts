import { TestBed } from '@angular/core/testing';

import { EmpolyeeData } from './empolyee-data';

describe('EmpolyeeData', () => {
  let service: EmpolyeeData;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmpolyeeData);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
