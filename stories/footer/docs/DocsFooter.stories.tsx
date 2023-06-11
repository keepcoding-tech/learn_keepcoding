import { ComponentMeta, ComponentStory } from '@storybook/react';
import DocsFooter, {
  IDocsFooter,
} from '../../../components/footers/docs/DocsFooter';
import { mocksPrimaryFooterProps } from './DocsFooter.mocks';

export default {
  title: 'footers/docs',
  component: DocsFooter,
  argTypes: {},
} as ComponentMeta<typeof DocsFooter>;

const Template: ComponentStory<typeof DocsFooter> = (args) => (
  <DocsFooter {...args} />
);

export const SBDefaultDocsFooter = Template.bind({});

SBDefaultDocsFooter.args = {
  ...mocksPrimaryFooterProps.defaultDocsFooter,
} as IDocsFooter;
