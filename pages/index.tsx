import type { NextPage } from 'next';
import ToggleTheme from '../components/theme/toggle/ToggleTheme';

const Home: NextPage = () => {
  return (
    <>
      <ToggleTheme />
    </>
  );
};

export default Home;
