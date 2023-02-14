import { ComponentMeta, ComponentStory } from '@storybook/react';
import ToggleTheme, {
  IToggleTheme,
} from '../../../components/theme/toggle/ToggleTheme';
import { mocksToggleThemeProps } from './ToggleTheme.mocks';

export default {
  title: 'theme/toggle/ToggleTheme',
  component: ToggleTheme,
  argTypes: {},
} as ComponentMeta<typeof ToggleTheme>;

const Template: ComponentStory<typeof ToggleTheme> = (args) => (
  <ToggleTheme {...args} />
);

export const SBToggleTheme = Template.bind({});

SBToggleTheme.args = {
  ...mocksToggleThemeProps.toggleDark,
} as IToggleTheme;
