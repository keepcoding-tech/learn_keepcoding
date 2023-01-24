import { IPageTemplate } from './PageTemplate';

const storybookPage: IPageTemplate = {
  id: 'storybook-page',
  title: 'Storybook Page',
  author: {
    name: 'keepcoding',
    email: 'keepcoding@gmail.com',
  },
  content: 'You can use markdown language here!',
  published: true,
};

export const mocksPageTemplateProps = { storybookPage };
