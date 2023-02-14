import { ComponentMeta, ComponentStory } from '@storybook/react';
import Sidebar, { ISidebar } from '../../components/sidebar/Sidebar';
import { mocksSidebarProps } from './Sidebar.mocks';

export default {
  title: 'sidebar/Sidebar',
  component: Sidebar,
  argTypes: {},
} as ComponentMeta<typeof Sidebar>;

const Template: ComponentStory<typeof Sidebar> = (args) => (
  <Sidebar {...args} />
);

export const SBSidebar = Template.bind({});

SBSidebar.args = {
  ...mocksSidebarProps.sidebar,
} as ISidebar;
