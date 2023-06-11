import { ComponentMeta, ComponentStory } from '@storybook/react';
import PreviewMarkdown, {
  IPreviewMarkdown,
} from '../../../components/markdown/preview/PreviewMarkdown';
import { mocksPreviewMarkdownProps } from './PreviewMarkdown.mocks';

export default {
  title: 'markdown/preview',
  component: PreviewMarkdown,
  argTypes: {},
} as ComponentMeta<typeof PreviewMarkdown>;

const Template: ComponentStory<typeof PreviewMarkdown> = (args) => (
  <PreviewMarkdown {...args} />
);

export const SBDefaultPreviewMarkdown = Template.bind({});

SBDefaultPreviewMarkdown.args = {
  ...mocksPreviewMarkdownProps.defaultPreviewMarkdown,
} as IPreviewMarkdown;
