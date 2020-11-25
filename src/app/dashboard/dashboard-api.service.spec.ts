import { TestBed } from '@angular/core/testing';

import { DashboardAPIService } from './dashboard-api.service';

describe('DashboardAPIService', () => {
  let service: DashboardAPIService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DashboardAPIService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
