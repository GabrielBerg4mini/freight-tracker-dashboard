import { Component, inject } from '@angular/core';
import { SidebarComponent } from '../../../../shared/organisms/sidebar-component/sidebar-component';
import { HeaderComponent } from '../../../../shared/organisms/header-component/header-component';
import { TableComponent } from '../../../../shared/organisms/table-component/table-component';
import { BreadcrumbComponent } from '../../../../shared/organisms/breadcrumb-component/breadcrumb-component';
import { AddButtonComponent } from '../../../../shared/organisms/add-button-component/add-button-component';
import { FreightsService } from '../../services/freights/freights';
import { LoadingService } from '../../../../core/services/loading/loading';
import { ToastService } from '../../../../core/services/toast/toast';
import { AsyncPipe } from '@angular/common';
import { TableColumn } from '../../../../shared/organisms/table-component/table-component';
import { Freight } from '../../models/freight';

@Component({
  selector: 'app-freights',
  imports: [SidebarComponent, HeaderComponent, BreadcrumbComponent, AddButtonComponent, TableComponent, AsyncPipe],
  templateUrl: './freights.html',
  styleUrl: './freights.scss',
})
export class Freights {

  private freightsService = inject(FreightsService);
  private loadingService = inject(LoadingService);
  private toastService = inject(ToastService);

  freights$ = this.freightsService.freghts$;

  loadFreightsTable(): void {
    this.loadingService.show();

    this.freightsService.loadFreights().subscribe({
      next: () => {
        this.loadingService.hide();
      },
      error: (error) => {
        this.loadingService.hide();
        this.toastService.show(error?.error?.message ?? 'Erro ao carregar fretes', 'error');
      },
    });
  }

  ngOnInit(): void {
    this.loadFreightsTable();
  }

  onAddFreight() {

  }

  columns: TableColumn<Freight>[] = [
    { name: 'Imagem', field: 'productImage', type: 'image' },
    { name: 'ID', field: 'id' },
    { name: 'Cliente', field: 'buyerName' },
    { name: 'Produto', field: 'productName' },
    { name: 'Data de Criação', field: 'createdAt', type: 'date' },
    { name: 'Endereço', field: 'completAddress' },
  ];

  breadcrumbItems = [
    { href: '/dashboard/freights', active: false, textBreadcrumb: 'Dashboard' },
    { href: '/dashboard/freights', active: true, textBreadcrumb: 'Fretes' },
  ];

}
