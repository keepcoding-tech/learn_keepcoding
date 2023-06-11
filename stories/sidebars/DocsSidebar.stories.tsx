import { ComponentMeta, ComponentStory } from '@storybook/react';
import DocsSidebar, {
  IDocsSidebar,
} from '../../components/sidebars/docs/DocsSidebar';
import { mocksDocsSidebarProps } from './DocsSidebar.mocks';

export default {
  title: 'sidebars/docs',
  component: DocsSidebar,
  argTypes: {},
} as ComponentMeta<typeof DocsSidebar>;

const Template: ComponentStory<typeof DocsSidebar> = (args) => (
  <DocsSidebar {...args} />
);

export const SBDefaultDocsSidebar = Template.bind({});

SBDefaultDocsSidebar.args = {
  ...mocksDocsSidebarProps.defaultDocsSidebar,
} as IDocsSidebar;
