import { TestBed } from '@angular/core/testing';

import { CfgService } from './cfg.service';

describe('CfgService', () => {
  let service: CfgService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CfgService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
