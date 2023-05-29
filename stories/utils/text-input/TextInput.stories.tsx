import { ComponentMeta, ComponentStory } from '@storybook/react';
import TextInput, {
  ITextInput,
} from '../../../components/utils/text-input/TextInput';
import { mocksTextInputProps } from './TextInput.mocks';

export default {
  title: 'utils/text-input',
  component: TextInput,
  argTypes: {},
} as ComponentMeta<typeof TextInput>;

const Template: ComponentStory<typeof TextInput> = (args) => (
  <TextInput {...args} />
);

export const SBDefaultTextInput = Template.bind({});

SBDefaultTextInput.args = {
  ...mocksTextInputProps.defaultTextInput,
} as ITextInput;

export const SBEmptyTextInput = Template.bind({});

SBEmptyTextInput.args = {
  ...mocksTextInputProps.emptyTextInput,
} as ITextInput;

export const SBAreaTextInput = Template.bind({});

SBAreaTextInput.args = {
  ...mocksTextInputProps.areaTextInput,
} as ITextInput;
