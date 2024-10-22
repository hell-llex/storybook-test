import { Tag } from './index.js';

export default {
  title: 'shared/ui/Tag',
  component: Tag,
  argTypes: {
    text: { control: 'text' },
    classStyle: { control: 'array' },
  },
};

export const Normal = (args) => Tag(args);
Normal.args = { text: 'Параметр', classStyle: ['tag', 'normal', 'roboto-regular'] };
