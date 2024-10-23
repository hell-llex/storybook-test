import { Button } from './index.js';

export default {
  title: 'shared/ui/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    text: { control: 'text' },
    classStyle: { control: 'array' },
    disabled: { control: 'boolean' },
  },
};

export const Normal = (args) => Button(args);
Normal.args = { text: 'Подать заявку', classStyle: ['button', 'normal', 'roboto-medium'], disabled: false };

export const Default = (args) => Button(args);
Default.args = { text: 'Консультация', classStyle: ['button', 'default', 'roboto-regular'], disabled: false };