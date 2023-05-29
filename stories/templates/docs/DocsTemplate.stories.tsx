import { ComponentMeta, ComponentStory } from '@storybook/react';
import DocTemplate, {
  IDocTemplate,
} from '../../../components/templates/doc/DocTemplate';
import { mocksDocTemplateProps } from './DocsTemplate.mocks';

export default {
  title: 'templates/docs',
  component: DocTemplate,
  argTypes: {},
} as ComponentMeta<typeof DocTemplate>;

const Template: ComponentStory<typeof DocTemplate> = (args) => (
  <DocTemplate {...args} />
);

export const SBDefaultDocTemplate = Template.bind({});

SBDefaultDocTemplate.args = {
  ...mocksDocTemplateProps.defaultDocTemplate,
} as IDocTemplate;

export const SBEmptyDocTemplate = Template.bind({});

SBEmptyDocTemplate.args = {
  ...mocksDocTemplateProps.emptyDocTemplate,
} as IDocTemplate;
