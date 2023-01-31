import { ComponentMeta, ComponentStory } from '@storybook/react';
import Footer, { IFooter } from '../../components/footer/Footer';
import { mocksFooterProps } from '../../components/footer/Footer.mocks';

export default {
  title: 'footer/Footer',
  component: Footer,
  argTypes: {},
} as ComponentMeta<typeof Footer>;

const Template: ComponentStory<typeof Footer> = (args) => <Footer {...args} />;

export const SBFooter = Template.bind({});

SBFooter.args = {
  ...mocksFooterProps.footer,
} as IFooter;
