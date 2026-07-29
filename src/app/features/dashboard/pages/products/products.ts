import { Component, inject } from '@angular/core';
import { SidebarComponent } from '../../../../shared/organisms/sidebar-component/sidebar-component';
import { HeaderComponent } from '../../../../shared/organisms/header-component/header-component';
import { TableComponent } from '../../../../shared/organisms/table-component/table-component';
import { BreadcrumbComponent } from '../../../../shared/organisms/breadcrumb-component/breadcrumb-component';
import { AddButtonComponent } from '../../../../shared/organisms/add-button-component/add-button-component';
import { ProductsService } from '../../services/products/products';
import { LoadingService } from '../../../../core/services/loading/loading';
import { ToastService } from '../../../../core/services/toast/toast';
import { AsyncPipe } from '@angular/common';
import { TableColumn } from '../../../../shared/organisms/table-component/table-component';
import { Product } from '../../models/product';


@Component({
  selector: 'app-products',
  imports: [SidebarComponent, HeaderComponent, BreadcrumbComponent, AddButtonComponent, TableComponent, AsyncPipe],
  templateUrl: './products.html',
  styleUrl: './products.scss',
})
export class Products {

  private productsService = inject(ProductsService);
  private loadingService = inject(LoadingService);
  private toastService = inject(ToastService);

  products$ = this.productsService.products$;

  loadProductsTable(): void {
    this.loadingService.show();

    this.productsService.loadProducts().subscribe({
      next: () => {
        this.loadingService.hide();
      },
      error: (error) => {
        this.loadingService.hide();
        this.toastService.show(error?.error?.message ?? 'Erro ao carregar produtos', 'error');
      },
    });
  }

  ngOnInit(): void {
    this.loadProductsTable();
  }

  onAddProduct() {}

  columns: TableColumn<Product>[] = [
    { name: 'Imagem', field: 'productImage', type: 'image' },
    { name: 'ID', field: 'id' },
    { name: 'Nome', field: 'productName' },
    { name: 'Preço', field: 'price', type: 'currency' },
    { name: 'Descrição', field: 'description' },
  ];

  breadcrumbItems = [
    { href: '/dashboard/products', active: false, textBreadcrumb: 'Dashboard' },
    { href: '/dashboard/products', active: true, textBreadcrumb: 'Produtos' },
  ];

}
