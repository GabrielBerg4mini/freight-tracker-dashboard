import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-link-component',
  imports: [RouterLink],
  templateUrl: './link-component.html',
  styleUrl: './link-component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LinkComponent {
  @Input() classCustom: string = '';
  @Input() href: string = '';
}
