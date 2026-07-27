import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  Input,
  ViewChild,
  forwardRef,
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { InputComponent } from '../../atoms/input-component/input-component';
import { ButtonComponent } from '../../atoms/button-component/button-component';

@Component({
  selector: 'app-password-toggle-component',
  imports: [InputComponent, ButtonComponent],
  templateUrl: './password-toggle-component.html',
  styleUrl: './password-toggle-component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => PasswordToggleComponent),
      multi: true,
    },
  ],
})
export class PasswordToggleComponent implements ControlValueAccessor, AfterViewInit {
  @Input() classCustom: string = '';
  @Input() idCustom: string = '';
  @Input() placeholder: string = '';

  @ViewChild(InputComponent) private inputComponent!: InputComponent;

  visible = false;

  private viewReady = false;
  private pendingValue: string | null = null;
  private pendingOnChange: ((value: string) => void) | null = null;
  private pendingOnTouched: (() => void) | null = null;
  private pendingDisabled: boolean | null = null;

  toggleVisibility = (): void => {
    this.visible = !this.visible;
  };

  ngAfterViewInit(): void {
    this.viewReady = true;

    if (this.pendingValue !== null) {
      this.inputComponent.writeValue(this.pendingValue);
    }
    if (this.pendingOnChange) {
      this.inputComponent.registerOnChange(this.pendingOnChange);
    }
    if (this.pendingOnTouched) {
      this.inputComponent.registerOnTouched(this.pendingOnTouched);
    }
    if (this.pendingDisabled !== null) {
      this.inputComponent.setDisabledState(this.pendingDisabled);
    }
  }

  writeValue(value: string): void {
    if (this.viewReady) {
      this.inputComponent.writeValue(value);
    } else {
      this.pendingValue = value;
    }
  }

  registerOnChange(fn: (value: string) => void): void {
    if (this.viewReady) {
      this.inputComponent.registerOnChange(fn);
    } else {
      this.pendingOnChange = fn;
    }
  }

  registerOnTouched(fn: () => void): void {
    if (this.viewReady) {
      this.inputComponent.registerOnTouched(fn);
    } else {
      this.pendingOnTouched = fn;
    }
  }

  setDisabledState(isDisabled: boolean): void {
    if (this.viewReady) {
      this.inputComponent.setDisabledState(isDisabled);
    } else {
      this.pendingDisabled = isDisabled;
    }
  }
}
