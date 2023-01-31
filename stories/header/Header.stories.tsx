import { ComponentMeta, ComponentStory } from '@storybook/react';
import NavigationBar, {
  INavigationBar,
} from '../../components/headers/navbar/NavigationBar';
import { mocksHeaderProps } from '../../components/headers/navbar/NavigationBar.mocks';

export default {
  title: 'header/Header',
  component: NavigationBar,
  argTypes: {},
} as ComponentMeta<typeof NavigationBar>;

const Template: ComponentStory<typeof NavigationBar> = (args) => (
  <NavigationBar {...args} />
);

export const SBHeader = Template.bind({});

SBHeader.args = {
  ...mocksHeaderProps.navbar,
} as INavigationBar;
