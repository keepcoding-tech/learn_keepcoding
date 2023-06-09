import { ComponentMeta, ComponentStory } from '@storybook/react';
import CreateDocumentTemplate, { ICreateDocumentTemplate } from '../../../components/templates/create-document/CreateDocumentTemplate';
import { mocksCreateDocumentTemplateProps } from './CreateDocumentTemplate.mocks';

export default {
  title: 'templates/create-document',
  component: CreateDocumentTemplate,
  argTypes: {},
} as ComponentMeta<typeof CreateDocumentTemplate>;

const Template: ComponentStory<typeof CreateDocumentTemplate> = (args) => (
  <CreateDocumentTemplate {...args} />
);

export const SBDefaultCreateDocumentTemplate = Template.bind({});

SBDefaultCreateDocumentTemplate.args = {
  ...mocksCreateDocumentTemplateProps.defaultCreateDocument,
} as ICreateDocumentTemplate;

export const SBEditCreateDocumentTemplate = Template.bind({});

SBEditCreateDocumentTemplate.args = {
  ...mocksCreateDocumentTemplateProps.editCreateDocument,
} as ICreateDocumentTemplate;
