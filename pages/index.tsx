import Typography from '@mui/material/Typography';
import type { NextPage } from 'next';
import { useSession } from 'next-auth/react';
import Link from 'next/link';
import NavigationHeader from '../components/headers/navigation/NavigationHeader';

const Home: NextPage = () => {
  const { status } = useSession();
  const authStatus: string = status === 'unauthenticated' ? 'Login' : 'Logout';

  return (
    <>
      <NavigationHeader sessionStatus={authStatus} />
      <center>
        <div
          style={{
            backgroundImage: 'var(--layered-waves)',
            position: 'absolute',
            top: '0',
            left: '0',
            height: '100%',
            width: '100%',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            paddingTop: '15%',
          }}
        >
          <Typography variant="h3">C programming can be fun again!</Typography>
          <h1>Learn the fundamentals</h1>
          <div>
            To establish a solid groundwork, it is important to emphasize the
            mastery of fundamental concepts.
          </div>
          <br />
          <br />
          <Link
            href="/docs/fundamentals/get-started/why-keepcoding"
            style={{
              backgroundColor: 'var(--primary-button-color)',
              textDecoration: 'none',
              color: 'white',
              padding: '12px',
              fontSize: '24px',
              borderRadius: '24px',
            }}
          >
            GET STARTED NOW
          </Link>
        </div>
      </center>
    </>
  );
};

export default Home;
