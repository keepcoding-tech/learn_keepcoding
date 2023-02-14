import { ComponentMeta, ComponentStory } from '@storybook/react';
import MarkdownEditor, {
  IMarkdownEditor,
} from '../../components/markdown/MarkdownEditor';
import { mocksMarkdownEditorProps } from './MarkdownEditor.mocks';

export default {
  title: 'markdown/MarkdownEditor',
  component: MarkdownEditor,
  argTypes: {},
} as ComponentMeta<typeof MarkdownEditor>;

const Template: ComponentStory<typeof MarkdownEditor> = (args) => (
  <MarkdownEditor {...args} />
);

export const SBMarkdownEditor = Template.bind({});

SBMarkdownEditor.args = {
  ...mocksMarkdownEditorProps.editor,
} as IMarkdownEditor;
