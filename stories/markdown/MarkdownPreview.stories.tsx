import { ComponentMeta, ComponentStory } from '@storybook/react';
import MarkdownPreview, {
  IMarkdownPreview,
} from '../../components/markdown/MarkdownPreview';
import { mocksMarkdownPreviewProps } from '../../components/markdown/MarkdownPreview.mocks';

export default {
  title: 'markdown/MarkdownPreview',
  component: MarkdownPreview,
  argTypes: {},
} as ComponentMeta<typeof MarkdownPreview>;

const Template: ComponentStory<typeof MarkdownPreview> = (args) => (
  <MarkdownPreview {...args} />
);

export const SBMarkdownPreview = Template.bind({});

SBMarkdownPreview.args = {
  ...mocksMarkdownPreviewProps.preview,
} as IMarkdownPreview;
