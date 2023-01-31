import { ComponentMeta, ComponentStory } from '@storybook/react';
import PermissionProviderPage, {
  IPermissionProviderPage,
} from '../../../components/permission-provider/page-provider/PermissionProviderPage';
import { mocksPermissionProviderPageProps } from '../../../components/permission-provider/page-provider/PermissionProviderPage.mocks';

export default {
  title: 'permission-provider/page-provider/PermissionProviderPage',
  component: PermissionProviderPage,
  argTypes: {},
} as ComponentMeta<typeof PermissionProviderPage>;

const Template: ComponentStory<typeof PermissionProviderPage> = (args) => (
  <PermissionProviderPage {...args} />
);

export const SBPermissionProviderPage = Template.bind({});

SBPermissionProviderPage.args = {
  ...mocksPermissionProviderPageProps.pageProvider,
} as IPermissionProviderPage;
