import { Injectable, signal } from '@angular/core';

export type ToastType = 'success' | 'error';

export interface ToastMessage {
  text: string;
  type: ToastType;
}

@Injectable({
  providedIn: 'root',
})
export class ToastService {
  private readonly toastSignal = signal<ToastMessage | null>(null);
  readonly toast = this.toastSignal.asReadonly();

  show(text: string, type: ToastType = 'success'): void {
    this.toastSignal.set({ text, type });
    setTimeout(() => this.toastSignal.set(null), 4000);
  }
}
