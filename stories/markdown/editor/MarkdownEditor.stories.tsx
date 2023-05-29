import { ComponentMeta, ComponentStory } from '@storybook/react';
import MarkdownEditor, {
  IMarkdownEditor,
} from '../../../components/markdown/editor/MarkdownEditor';
import { mocksMarkdownEditorProps } from './MarkdownEditor.mocks';

export default {
  title: 'markdown/editor',
  component: MarkdownEditor,
  argTypes: {},
} as ComponentMeta<typeof MarkdownEditor>;

const Template: ComponentStory<typeof MarkdownEditor> = (args) => (
  <MarkdownEditor {...args} />
);

export const SBDefaultMarkdownEditor = Template.bind({});

SBDefaultMarkdownEditor.args = {
  ...mocksMarkdownEditorProps.defaultMarkdownEditor,
} as IMarkdownEditor;
