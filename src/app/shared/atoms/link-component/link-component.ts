import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-link-component',
  imports: [],
  templateUrl: './link-component.html',
  styleUrl: './link-component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LinkComponent {}
