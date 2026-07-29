import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { of, throwError } from 'rxjs';

import { Clients } from './clients';
import { ClientsService } from '../../services/clients/clients';
import { LoadingService } from '../../../../core/services/loading/loading';
import { ToastService } from '../../../../core/services/toast/toast';

describe('Clients', () => {
  let component: Clients;
  let fixture: ComponentFixture<Clients>;

  let clientsServiceMock: { clients$: any; loadClients: ReturnType<typeof vi.fn> };
  let loadingServiceMock: { show: ReturnType<typeof vi.fn>; hide: ReturnType<typeof vi.fn> };
  let toastServiceMock: { show: ReturnType<typeof vi.fn> };

  beforeEach(async () => {
    clientsServiceMock = { clients$: of([]), loadClients: vi.fn() };
    loadingServiceMock = { show: vi.fn(), hide: vi.fn() };
    toastServiceMock = { show: vi.fn() };

    await TestBed.configureTestingModule({
      imports: [Clients],
      providers: [
        provideRouter([]),
        { provide: ClientsService, useValue: clientsServiceMock },
        { provide: LoadingService, useValue: loadingServiceMock },
        { provide: ToastService, useValue: toastServiceMock },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(Clients);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    clientsServiceMock.loadClients.mockReturnValue(of([]));
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  it('deve chamar loadingService.show/hide ao carregar os clientes com sucesso', () => {
    clientsServiceMock.loadClients.mockReturnValue(of([]));

    fixture.detectChanges(); // dispara ngOnInit -> loadClientsTable()

    expect(loadingServiceMock.show).toHaveBeenCalled();
    expect(clientsServiceMock.loadClients).toHaveBeenCalled();
    expect(loadingServiceMock.hide).toHaveBeenCalled();
  });

  it('deve exibir um toast de erro quando loadClients falhar', () => {
    clientsServiceMock.loadClients.mockReturnValue(
      throwError(() => ({ error: { message: 'Falha ao buscar clientes' } }))
    );

    fixture.detectChanges();

    expect(loadingServiceMock.hide).toHaveBeenCalled();
    expect(toastServiceMock.show).toHaveBeenCalledWith('Falha ao buscar clientes', 'error');
  });

});
