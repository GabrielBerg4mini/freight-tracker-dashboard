import type { Meta, StoryObj } from '@storybook/angular-vite';

import { ButtonComponent } from './button-component';

const meta: Meta<ButtonComponent> = {
  title: 'Atoms/ButtonComponent',
  component: ButtonComponent,
};

export default meta;

export const Primary: StoryObj<ButtonComponent> = {
  args: { classCustom: 'btn btn-primary', disabled: false },
  render: (args) => ({
    props: args,
    template: `<app-button-component [classCustom]="classCustom" [disabled]="disabled">Primary Button</app-button-component>`,
  })
};
