import { ComponentMeta, ComponentStory } from '@storybook/react';
import PagePermissionProvider, {
  IPagePermissionProvider,
} from '../../../components/permission-provider/page/PagePermissionProvider';
import { mocksPagePermissionProviderProps } from '../../../components/permission-provider/page/PagePermissionProvider.mocks';

export default {
  title: 'permission-provider/page-provider/PermissionProviderPage',
  component: PagePermissionProvider,
  argTypes: {},
} as ComponentMeta<typeof PagePermissionProvider>;

const Template: ComponentStory<typeof PagePermissionProvider> = (args) => (
  <PagePermissionProvider {...args} />
);

export const SBPagePermissionProvider = Template.bind({});

SBPagePermissionProvider.args = {
  ...mocksPagePermissionProviderProps.pageProvider,
} as IPagePermissionProvider;
