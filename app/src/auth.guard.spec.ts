import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { AuthGuard } from './auth.guard';


beforeEach(() => {
  TestBed.configureTestingModule({});
});

const gaurd = TestBed.inject(AuthGuard);
describe('authGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => gaurd.canActivate(...guardParameters));



  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
