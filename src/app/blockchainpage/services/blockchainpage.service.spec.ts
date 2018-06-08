import { TestBed, inject } from '@angular/core/testing';

import { BlockchainpageService } from './blockchainpage.service';

describe('BlockchainpageService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BlockchainpageService]
    });
  });

  it('should be created', inject([BlockchainpageService], (service: BlockchainpageService) => {
    expect(service).toBeTruthy();
  }));
});
