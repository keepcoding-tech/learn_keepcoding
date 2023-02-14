import { ComponentMeta, ComponentStory } from '@storybook/react';
import DocTemplate, {
  IDocTemplate,
} from '../../../components/templates/doc/DocTemplate';
import { mocksDocTemplateProps } from './DocTemplate.mocks';

export default {
  title: 'templates/docs/DocTemplate',
  component: DocTemplate,
  argTypes: {},
} as ComponentMeta<typeof DocTemplate>;

const Template: ComponentStory<typeof DocTemplate> = (args) => (
  <DocTemplate {...args} />
);

export const SBDocTemplate = Template.bind({});

SBDocTemplate.args = {
  ...mocksDocTemplateProps.storybookDoc,
} as IDocTemplate;
