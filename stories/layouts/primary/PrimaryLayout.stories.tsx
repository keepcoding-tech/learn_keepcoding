import { ComponentMeta, ComponentStory } from '@storybook/react';
import PrimaryLayout, {
  IPrimaryLayout,
} from '../../../components/layouts/primary/PrimaryLayout';
import { mocksPrimaryLayoutProps } from '../../../components/layouts/primary/PrimaryLayout.mocks';

export default {
  title: 'layouts/primary/PrimaryLayout',
  component: PrimaryLayout,
  argTypes: {},
} as ComponentMeta<typeof PrimaryLayout>;

const Template: ComponentStory<typeof PrimaryLayout> = (args) => (
  <PrimaryLayout {...args} />
);

export const SBPrimaryLayout = Template.bind({});

SBPrimaryLayout.args = {
  ...mocksPrimaryLayoutProps.primary,
} as IPrimaryLayout;
