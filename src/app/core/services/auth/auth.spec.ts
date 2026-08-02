import { TestBed } from '@angular/core/testing';

import { AuthService } from './auth';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { environment } from '../../../../environments/environment';
import { provideHttpClient } from '@angular/common/http';

describe('AuthService', () => {
  let service: AuthService;
  let httpTestingController: HttpTestingController;

  const urlRelative = 'auth/sign-in';
  const url = `${environment.apiUrl}/${urlRelative}`;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        provideHttpClient(),
        provideHttpClientTesting()
      ],
    });
    service = TestBed.inject(AuthService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('Login realizado com sucesso - METHOD POST', () => {
    vi.spyOn(Storage.prototype, 'setItem').mockImplementation(() => {});

    service.login('contato@exemplo.com.br', 'senhaSegura123').subscribe((resp) => {
      expect(resp).toBeTruthy();
    });

    const req = httpTestingController.expectOne(url);
    expect(req.request.method).toEqual('POST');
    req.flush({ data: { token: 'fake-token' } });
    expect(Storage.prototype.setItem).toHaveBeenCalledWith('authToken', '"fake-token"');
    expect(service.isLoggedIn()).toBe(true);
  });
});
