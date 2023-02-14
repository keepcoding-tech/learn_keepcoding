import { ComponentMeta, ComponentStory } from '@storybook/react';
import NavigationBar, {
  INavigationBar,
} from '../../../components/headers/navbar/NavigationBar';
import { mocksNavigationBarProps } from './NavigationBar.mocks';

export default {
  title: 'headers/navbar/NavigationBar',
  component: NavigationBar,
  argTypes: {},
} as ComponentMeta<typeof NavigationBar>;

const Template: ComponentStory<typeof NavigationBar> = (args) => (
  <NavigationBar {...args} />
);

export const SBNavigationBar = Template.bind({});

SBNavigationBar.args = {
  ...mocksNavigationBarProps.navbar,
} as INavigationBar;
