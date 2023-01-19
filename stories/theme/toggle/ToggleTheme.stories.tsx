import { ComponentMeta, ComponentStory } from '@storybook/react';

import ToggleTheme, {
  IToggleTheme,
} from '../../../components/theme/toggle/ToggleTheme';

import { mocksToggleTheme } from '../../../components/theme/toggle/ToggleTheme.mocks';

export default {
  title: 'theme/ToggleTheme',
  component: ToggleTheme,
  argTypes: {},
} as ComponentMeta<typeof ToggleTheme>;

const Template: ComponentStory<typeof ToggleTheme> = (args) => (
  <ToggleTheme {...args} />
);

export const ToggleDarkTheme = Template.bind({});

ToggleDarkTheme.args = {
  ...mocksToggleTheme.toggleDark,
} as IToggleTheme;
