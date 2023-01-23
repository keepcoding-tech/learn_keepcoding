import type { NextPage } from 'next';
import PermissionProvider from '../components/permission-provider/PermissionProvider';

const Home: NextPage = () => {
  return (
    <>
      <PermissionProvider>
        <div>Docs KeepCoding</div>
      </PermissionProvider>
    </>
  );
};

export default Home;
