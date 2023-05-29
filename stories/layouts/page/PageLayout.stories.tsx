import { ComponentMeta, ComponentStory } from '@storybook/react';
import PageLayout, {
  IPageLayout,
} from '../../../components/layouts/page/PageLayout';
import { mocksPageLayoutProps } from './PageLayout.mocks';

export default {
  title: 'layouts/page',
  component: PageLayout,
  argTypes: {},
} as ComponentMeta<typeof PageLayout>;

const Template: ComponentStory<typeof PageLayout> = (args) => (
  <PageLayout {...args} />
);

export const SBDefaultPageLayout = Template.bind({});

SBDefaultPageLayout.args = {
  ...mocksPageLayoutProps.defaultPageLayout,
} as IPageLayout;
