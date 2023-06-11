import { ComponentMeta, ComponentStory } from '@storybook/react';
import EditorMarkdown, {
  IEditorMarkdown,
} from '../../../components/markdown/editor/EditorMarkdown';
import { mocksEditorMarkdownProps } from './EditorMarkdown.mocks';

export default {
  title: 'markdown/editor',
  component: EditorMarkdown,
  argTypes: {},
} as ComponentMeta<typeof EditorMarkdown>;

const Template: ComponentStory<typeof EditorMarkdown> = (args) => (
  <EditorMarkdown {...args} />
);

export const SBDefaultEditorMarkdown = Template.bind({});

SBDefaultEditorMarkdown.args = {
  ...mocksEditorMarkdownProps.defaultEditorMarkdown,
} as IEditorMarkdown;
