import { Component, Input } from '@angular/core';

export interface TableColumn<T> {
  name: string;
  field: keyof T;
  type?: 'text' | 'image';
}

@Component({
  selector: 'app-table-component',
  imports: [],
  templateUrl: './table-component.html',
  styleUrl: './table-component.scss',
})
export class TableComponent<T> {
  @Input() columns: TableColumn<T>[] = [];
  @Input() items: T[] = [];
}
