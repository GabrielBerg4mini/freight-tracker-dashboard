import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { RouterLink, RouterLinkActive } from "@angular/router";

@Component({
  selector: 'app-link-component',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './link-component.html',
  styleUrl: './link-component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LinkComponent {
  @Input() classCustom: string = '';
  @Input() href: string = '';
  @Input() linkActive: string = '';
  @Output() isActiveChange = new EventEmitter<boolean>();
}
