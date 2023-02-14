import { ComponentMeta, ComponentStory } from '@storybook/react';
import PrimaryFooter, {
  IPrimaryFooter,
} from '../../../components/footers/primary/PrimaryFooter';
import { mocksPrimaryFooterProps } from './PrimaryFooter.mocks';

export default {
  title: 'footers/primary/PrimaryFooter',
  component: PrimaryFooter,
  argTypes: {},
} as ComponentMeta<typeof PrimaryFooter>;

const Template: ComponentStory<typeof PrimaryFooter> = (args) => (
  <PrimaryFooter {...args} />
);

export const SBPrimaryFooter = Template.bind({});

SBPrimaryFooter.args = {
  ...mocksPrimaryFooterProps.primaryFooter,
} as IPrimaryFooter;
