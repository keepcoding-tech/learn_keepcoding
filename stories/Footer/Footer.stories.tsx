import { ComponentMeta, ComponentStory } from '@storybook/react';

import Footer, { IFooter } from '../../components/footer/Footer';
import { mocksFooter } from '../../components/footer/Footer.mocks';

export default {
  title: 'footer/Footer',
  component: Footer,
  argTypes: {},
} as ComponentMeta<typeof Footer>;

const Template: ComponentStory<typeof Footer> = (args) => <Footer {...args} />;

export const FooterEx = Template.bind({});

FooterEx.args = {
  ...mocksFooter.footer,
} as IFooter;
