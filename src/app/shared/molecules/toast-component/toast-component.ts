import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ToastService } from '../../../core/services/toast/toast';

@Component({
  selector: 'app-toast-component',
  imports: [],
  templateUrl: './toast-component.html',
  styleUrl: './toast-component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ToastComponent {
  protected readonly toastService = inject(ToastService);
}
