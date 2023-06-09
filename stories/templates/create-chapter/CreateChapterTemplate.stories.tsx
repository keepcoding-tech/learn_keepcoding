import { ComponentMeta, ComponentStory } from '@storybook/react';
import CreateChapterTemplate, { ICreateChapterTemplate } from '../../../components/templates/create-chapter/CreateChapterTemplate';
import { mocksCreateChapterTemplateProps } from './CreateChapterTemplate.mocks';

export default {
  title: 'templates/create-chapter',
  component: CreateChapterTemplate,
  argTypes: {},
} as ComponentMeta<typeof CreateChapterTemplate>;

const Template: ComponentStory<typeof CreateChapterTemplate> = (args) => (
  <CreateChapterTemplate {...args} />
);

export const SBDefaultCreateChapterTemplate = Template.bind({});

SBDefaultCreateChapterTemplate.args = {
  ...mocksCreateChapterTemplateProps.defaultCreateChapter,
} as ICreateChapterTemplate;

export const SBEditCreateChapterTemplate = Template.bind({});

SBEditCreateChapterTemplate.args = {
  ...mocksCreateChapterTemplateProps.editCreateChapter,
} as ICreateChapterTemplate;

