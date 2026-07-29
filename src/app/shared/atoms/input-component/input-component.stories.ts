import { Meta, StoryObj } from '@storybook/angular-vite';
import { InputComponent } from './input-component';

const meta: Meta<InputComponent> = {
  title: 'Atoms/InputComponent',
  component: InputComponent,
};

export default meta;

export const Primary: StoryObj<InputComponent> = {
  args: { placeholder: 'Enter text', type: 'text', disabled: false },
  render: (args) => ({
    props: args,
    template: `<app-input-component [placeholder]="placeholder" [type]="type" [disabled]="disabled"></app-input-component>`,
  })
};
