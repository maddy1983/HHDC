/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ApiStoreService } from './api-store.service';

describe('ApiStoreService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ApiStoreService]
    });
  });

  it('should ...', inject([ApiStoreService], (service: ApiStoreService) => {
    expect(service).toBeTruthy();
  }));
});
