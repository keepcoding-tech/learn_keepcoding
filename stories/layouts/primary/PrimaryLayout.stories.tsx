import { ComponentMeta, ComponentStory } from '@storybook/react';

import PrimaryLayout, {
  IPrimaryLayout,
} from '../../../components/layouts/primary/PrimaryLayout';

import { mocksPrimaryLayout } from '../../../components/layouts/primary/PrimaryLayout.mocks';

export default {
  title: 'layouts/PrimaryLayout',
  component: PrimaryLayout,
  argTypes: {},
} as ComponentMeta<typeof PrimaryLayout>;

const Template: ComponentStory<typeof PrimaryLayout> = (args) => (
  <PrimaryLayout {...args} />
);

export const Primary = Template.bind({});

Primary.args = {
  ...mocksPrimaryLayout.primary,
} as IPrimaryLayout;
