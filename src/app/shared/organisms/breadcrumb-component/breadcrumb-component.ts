import { Component, Input } from '@angular/core';
import { LinkComponent } from '../../atoms/link-component/link-component';

@Component({
  selector: 'app-breadcrumb-component',
  imports: [LinkComponent],
  templateUrl: './breadcrumb-component.html',
  styleUrl: './breadcrumb-component.scss',
})
export class BreadcrumbComponent {
  @Input() breadcrumbItems: { href: string; active: boolean; textBreadcrumb: string }[] = [];
}
