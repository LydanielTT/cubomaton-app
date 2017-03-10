/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { PythonService } from './python.service';

describe('PythonService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PythonService]
    });
  });

  it('should ...', inject([PythonService], (service: PythonService) => {
    expect(service).toBeTruthy();
  }));
});
