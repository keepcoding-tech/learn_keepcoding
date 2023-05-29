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

export const SBDefaultSidebar = Template.bind({});

SBDefaultSidebar.args = {
  ...mocksSidebarProps.defaultSidebar,
} as ISidebar;
