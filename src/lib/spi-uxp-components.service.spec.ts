import { TestBed } from '@angular/core/testing';

import { SpiUxpComponentsService } from './spi-uxp-components.service';

describe('SpiUxpComponentsService', () => {
  let service: SpiUxpComponentsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SpiUxpComponentsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
