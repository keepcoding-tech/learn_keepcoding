import { IPagePermissionProvider } from '../../../components/permission-provider/page/PagePermissionProvider';

const pageProvider: IPagePermissionProvider = {
  children: 'This is some content',
  session: null,
};

export const mocksPagePermissionProviderProps = { pageProvider };
