import { Component, inject } from '@angular/core';
import { SidebarComponent } from '../../../../shared/organisms/sidebar-component/sidebar-component';
import { HeaderComponent } from '../../../../shared/organisms/header-component/header-component';
import { TableComponent } from '../../../../shared/organisms/table-component/table-component';
import { ClientsService } from '../../services/clients/clients';
import { LoadingService } from '../../../../core/services/loading/loading';
import { ToastService } from '../../../../core/services/toast/toast';
import { AsyncPipe } from '@angular/common';
import { TableColumn } from '../../../../shared/organisms/table-component/table-component';
import { Client } from '../../models/client';

@Component({
  selector: 'app-clients',
  imports: [SidebarComponent, HeaderComponent, TableComponent, AsyncPipe],
  templateUrl: './clients.html',
  styleUrl: './clients.scss'
})
export class Clients {

  private clientsService = inject(ClientsService);
  private loadingService = inject(LoadingService);
  private toastService = inject(ToastService);


  clients$ = this.clientsService.clients$;

  loadClientsTable(): void {
    this.loadingService.show();

    this.clientsService.loadClients().subscribe({
      next: () => {
        this.loadingService.hide();
      },
      error: (error) => {
        this.loadingService.hide();
        this.toastService.show(error?.error?.message ?? 'Erro ao carregar clientes', 'error');
      },
    });
  }

  ngOnInit(): void {
    this.loadClientsTable();
  }

  columns: TableColumn<Client>[] = [
    { name: 'ID', field: 'id' },
    { name: 'Nome', field: 'fullName' },
    { name: 'Email', field: 'email' },
    { name: 'Telefone', field: 'phone' },
    { name: 'CPF/CNPJ', field: 'cpfCnpj' },
  ];

}
