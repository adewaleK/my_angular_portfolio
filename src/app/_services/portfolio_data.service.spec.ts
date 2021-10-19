/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { Portfolio_dataService } from './portfolio_data.service';

describe('Service: Portfolio_data', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Portfolio_dataService]
    });
  });

  it('should ...', inject([Portfolio_dataService], (service: Portfolio_dataService) => {
    expect(service).toBeTruthy();
  }));
});
