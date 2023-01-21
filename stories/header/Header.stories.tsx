import { ComponentMeta, ComponentStory } from '@storybook/react';
import Header, { IHeader } from '../../components/header/Header';
import { mocksHeaderProps } from '../../components/header/Header.mocks';

export default {
  title: 'header/Header',
  component: Header,
  argTypes: {},
} as ComponentMeta<typeof Header>;

const Template: ComponentStory<typeof Header> = (args) => <Header {...args} />;

export const BaseHeader = Template.bind({});

BaseHeader.args = {
  ...mocksHeaderProps.header,
} as IHeader;
