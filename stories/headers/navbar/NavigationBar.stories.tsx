import { ComponentMeta, ComponentStory } from '@storybook/react';
import NavigationHeader, {
  INavigationHeader,
} from '../../../components/headers/navigation/NavigationHeader';
import { mocksNavigationHeaderProps } from './NavigationBar.mocks';

export default {
  title: 'headers/navigation-header',
  component: NavigationHeader,
  argTypes: {},
} as ComponentMeta<typeof NavigationHeader>;

const Template: ComponentStory<typeof NavigationHeader> = (args) => (
  <NavigationHeader {...args} />
);

export const SBDefaultNavigationHeader = Template.bind({});

SBDefaultNavigationHeader.args = {
  ...mocksNavigationHeaderProps.defaultNavigationHeader,
} as INavigationHeader;
