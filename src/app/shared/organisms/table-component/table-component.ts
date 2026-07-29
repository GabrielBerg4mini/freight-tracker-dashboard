import { Component, Input } from '@angular/core';
import { CurrencyPipe } from '@angular/common';

export interface TableColumn<T> {
  name: string;
  field: keyof T;
  type?: 'text' | 'image' | 'number' | 'date' | 'currency';
}

@Component({
  selector: 'app-table-component',
  imports: [CurrencyPipe],
  templateUrl: './table-component.html',
  styleUrl: './table-component.scss',
})
export class TableComponent<T> {
  @Input() columns: TableColumn<T>[] = [];
  @Input() items: T[] = [];
}
