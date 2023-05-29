import { ComponentMeta, ComponentStory } from '@storybook/react';
import NavigationBar, {
  INavigationBar,
} from '../../../components/headers/navbar/NavigationBar';
import { mocksNavigationBarProps } from './NavigationBar.mocks';

export default {
  title: 'headers/navbar',
  component: NavigationBar,
  argTypes: {},
} as ComponentMeta<typeof NavigationBar>;

const Template: ComponentStory<typeof NavigationBar> = (args) => (
  <NavigationBar {...args} />
);

export const SBDefaultNavigationBar = Template.bind({});

SBDefaultNavigationBar.args = {
  ...mocksNavigationBarProps.defaultNavigationBar,
} as INavigationBar;
