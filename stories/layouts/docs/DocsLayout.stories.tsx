import { ComponentMeta, ComponentStory } from '@storybook/react';
import DocsLayout, {
  IDocsLayout,
} from '../../../components/layouts/docs/DocsLayout';
import { mocksDocsLayoutProps } from './DocsLayout.mocks';

export default {
  title: 'layouts/docs',
  component: DocsLayout,
  argTypes: {},
} as ComponentMeta<typeof DocsLayout>;

const Template: ComponentStory<typeof DocsLayout> = (args) => (
  <DocsLayout {...args} />
);

export const SBDefaultDocsLayout = Template.bind({});

SBDefaultDocsLayout.args = {
  ...mocksDocsLayoutProps.defaultDocLayout,
} as IDocsLayout;
