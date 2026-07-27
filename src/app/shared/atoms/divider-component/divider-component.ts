import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-divider-component',
  imports: [],
  templateUrl: './divider-component.html',
  styleUrl: './divider-component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DividerComponent {
  @Input() visible: boolean = true;
}
