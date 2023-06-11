import { ComponentMeta, ComponentStory } from '@storybook/react';
import CustomError, {
  ICustomError,
} from '../../../components/errors/custom/CustomError';
import { mocksCustomErrorProps } from './CodeError.mocks';

export default {
  title: 'permission-provider/page',
  component: CustomError,
  argTypes: {},
} as ComponentMeta<typeof CustomError>;

const Template: ComponentStory<typeof CustomError> = (args) => (
  <CustomError {...args} />
);

export const SBAccessForbidenCustomError = Template.bind({});

SBAccessForbidenCustomError.args = {
  ...mocksCustomErrorProps.accessForbiden,
} as ICustomError;
