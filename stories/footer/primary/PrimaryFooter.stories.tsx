import { ComponentMeta, ComponentStory } from '@storybook/react';
import PrimaryFooter, {
  IPrimaryFooter,
} from '../../../components/footers/primary/PrimaryFooter';
import { mocksPrimaryFooterProps } from './PrimaryFooter.mocks';

export default {
  title: 'footers/primary',
  component: PrimaryFooter,
  argTypes: {},
} as ComponentMeta<typeof PrimaryFooter>;

const Template: ComponentStory<typeof PrimaryFooter> = (args) => (
  <PrimaryFooter {...args} />
);

export const SBDefaultPrimaryFooter = Template.bind({});

SBDefaultPrimaryFooter.args = {
  ...mocksPrimaryFooterProps.defaultPrimaryFooter,
} as IPrimaryFooter;
