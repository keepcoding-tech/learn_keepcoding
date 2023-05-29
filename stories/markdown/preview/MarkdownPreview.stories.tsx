import { ComponentMeta, ComponentStory } from '@storybook/react';
import MarkdownPreview, {
  IMarkdownPreview,
} from '../../../components/markdown/preview/MarkdownPreview';
import { mocksMarkdownPreviewProps } from './MarkdownPreview.mocks';

export default {
  title: 'markdown/preview',
  component: MarkdownPreview,
  argTypes: {},
} as ComponentMeta<typeof MarkdownPreview>;

const Template: ComponentStory<typeof MarkdownPreview> = (args) => (
  <MarkdownPreview {...args} />
);

export const SBDefaultMarkdownPreview = Template.bind({});

SBDefaultMarkdownPreview.args = {
  ...mocksMarkdownPreviewProps.defaultMarkdownPreview,
} as IMarkdownPreview;
