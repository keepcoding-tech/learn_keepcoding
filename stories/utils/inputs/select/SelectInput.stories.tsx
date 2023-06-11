import { ComponentMeta, ComponentStory } from '@storybook/react';
import SelectInput, {
  ISelectInput,
} from '../../../../components/utils/inputs/select/SelectInput';
import { mocksSelectInputProps } from './SelectInput.mocks';

export default {
  title: 'utils/inputs/select',
  component: SelectInput,
  argTypes: {},
} as ComponentMeta<typeof SelectInput>;

const Template: ComponentStory<typeof SelectInput> = (args) => (
  <SelectInput {...args} />
);

export const SBDefaultSelectInput = Template.bind({});

SBDefaultSelectInput.args = {
  ...mocksSelectInputProps.defaultSelectInput,
} as ISelectInput;

export const SBEmptySelectInput = Template.bind({});

SBEmptySelectInput.args = {
  ...mocksSelectInputProps.emptySelectInput,
} as ISelectInput;

export const SBLargeSelectInput = Template.bind({});

SBLargeSelectInput.args = {
  ...mocksSelectInputProps.largeSelectInput,
} as ISelectInput;
