import { ProductCard } from './index.js';
import { Button } from '../../../../shared/ui/Button';
import { Tag } from '../../../../shared/ui/Tag';
import './style.css';

export default {
  title: 'Entities/ProductCard',
  component: ProductCard,
  argTypes: {
    stake: {
      control: 'text',
      description: 'Процентная ставка',
      defaultValue: '17,22',
      table: {
        type: { summary: 'string' },
      },
    },
    beforeAmount: {
      control: 'text',
      description: 'Текст перед суммой',
      defaultValue: 'до',
      table: {
        type: { summary: 'string' },
      },
    },
    amount: {
      control: 'text',
      description: 'Сумма кредита',
      defaultValue: '10 000',
      table: {
        type: { summary: 'string' },
      },
    },
    term: {
      control: 'text',
      description: 'Срок кредита',
      defaultValue: 'до 60 мес',
      table: {
        type: { summary: 'string' },
      },
    },
  },
};

const TagNew = Tag({ text: 'Параметр', classStyle: ['tag', 'normal', 'roboto-regular'] });

const buttons = [
  Button({ text: 'Консультация', classStyle: ['button', 'default', 'roboto-regular'], disabled: false }),
  Button({ text: 'Подать заявку', classStyle: ['button', 'normal', 'roboto-medium'], disabled: false }),
];

export const MobileCard = (args) => ProductCard({ tag: TagNew, buttons: buttons, ...args });

MobileCard.args = {
  stake: "17,22",
  beforeAmount: "до",
  amount: "10 000",
  term: "до 60 мес",
};