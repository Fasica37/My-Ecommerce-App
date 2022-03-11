import { TestBed } from '@angular/core/testing';

import { AddCustomerServiceService } from './add-customer-service.service';

describe('AddCustomerServiceService', () => {
  let service: AddCustomerServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddCustomerServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
