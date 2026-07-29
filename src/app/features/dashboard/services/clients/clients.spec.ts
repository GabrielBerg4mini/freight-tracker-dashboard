import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';

import { ClientsService } from './clients';
import { ApiService } from '../../../../core/services/api/api';
import { ClientDto } from './client.dto';

describe('ClientsService', () => {
  let service: ClientsService;
  let apiServiceMock: { get: ReturnType<typeof vi.fn>};

  const mockDtos: ClientDto[] = [
    {
      id: '1',
      full_name: 'John Doe',
      email: 'john.doe@example.com',
      phone: '1234567890',
      cpf_cnpj: '12345678901',
    }
  ]

  beforeEach(() => {

    apiServiceMock = { get: vi.fn() };

    TestBed.configureTestingModule({
      providers: [{ provide: ApiService, useValue: apiServiceMock }],
    });

    service = TestBed.inject(ClientsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('Deve iniciar com clients$ vazio', () => {
    service.clients$.subscribe((clients) => {
      expect(clients).toEqual([]);
    });
  });

  it('Deve buscar em /clients e mapear o DTO para Client', () => {
    apiServiceMock.get.mockReturnValue(of({ data: mockDtos }));

    service.loadClients().subscribe((clients) => {
      expect(clients).toEqual([
        {
          id: '1',
          fullName: 'John Doe',
          email: 'john.doe@example.com',
          phone: '1234567890',
          cpfCnpj: '12345678901',
        }
      ])
    })

    expect(apiServiceMock.get).toHaveBeenCalledWith('/clients');
  });

  it('Deve atualizar clients$ após o loadClients ser concluído', () => {
    apiServiceMock.get.mockReturnValue(of({ data: mockDtos }));

    service.loadClients().subscribe((clients) => {
      expect(clients.length).toBe(1);
      expect(clients[0].fullName).toBe('John Doe');
    })
  })

});
