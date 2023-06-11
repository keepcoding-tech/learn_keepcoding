import { ComponentMeta, ComponentStory } from '@storybook/react';
import DocsTemplate, {
  IDocsTemplate,
} from '../../../components/templates/docs/DocsTemplate';
import { mocksDocsTemplateProps } from './DocsTemplate.mocks';

export default {
  title: 'templates/docs',
  component: DocsTemplate,
  argTypes: {},
} as ComponentMeta<typeof DocsTemplate>;

const Template: ComponentStory<typeof DocsTemplate> = (args) => (
  <DocsTemplate {...args} />
);

export const SBDefaultDocsTemplate = Template.bind({});

SBDefaultDocsTemplate.args = {
  ...mocksDocsTemplateProps.defaultDocsTemplate,
} as IDocsTemplate;

export const SBEmptyDocsTemplate = Template.bind({});

SBEmptyDocsTemplate.args = {
  ...mocksDocsTemplateProps.emptyDocsTemplate,
} as IDocsTemplate;
