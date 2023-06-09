import { ComponentMeta, ComponentStory } from '@storybook/react';
import CreateModuleTemplate, { ICreateModuleTemplate } from '../../../components/templates/create-module/CreateModuleTemplate';
import { mocksCreateModuleTemplateProps } from './CreateModuleTemplate.mocks';

export default {
  title: 'templates/create-module',
  component: CreateModuleTemplate,
  argTypes: {},
} as ComponentMeta<typeof CreateModuleTemplate>;

const Template: ComponentStory<typeof CreateModuleTemplate> = (args) => (
  <CreateModuleTemplate {...args} />
);

export const SBDefaultCreateModuleTemplate = Template.bind({});

SBDefaultCreateModuleTemplate.args = {
  ...mocksCreateModuleTemplateProps.defaultCreateModule,
} as ICreateModuleTemplate;

export const SBEditCreateModuleTemplate = Template.bind({});

SBEditCreateModuleTemplate.args = {
  ...mocksCreateModuleTemplateProps.editCreateModule,
} as ICreateModuleTemplate;
