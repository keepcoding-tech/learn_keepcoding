import Typography from '@mui/material/Typography';
import type { NextPage } from 'next';
import { useSession } from 'next-auth/react';
import Link from 'next/link';
import NavigationBar from '../components/headers/navbar/NavigationBar';

const Home: NextPage = () => {
  const { status } = useSession();
  const authStatus: string = status === 'unauthenticated' ? 'Login' : 'Logout';

  return (
    <>
      <NavigationBar sessionStatus={authStatus} />
      <center>
        <Typography
          variant="h3"
          sx={{
            backgroundColor: 'var(--secondary-background-color)',
            paddingTop: '90px',
            paddingBottom: '20px',
          }}
        >
          C programming can be fun again
        </Typography>
        <div
          style={{
            backgroundImage: 'var(--home-image)',
            paddingTop: '8%',
            paddingBottom: '7.8%',
          }}
        >
          <h1>Learn the fundamentals</h1>
          <div>
            To establish a solid groundwork, it is important to emphasize the
            mastery of fundamental concepts.
          </div>
          <br />
          <Link
            href="/docs/fundamentals/get-started/why-keepcoding"
            style={{
              backgroundColor: 'var(--primary-button-color)',
              textDecoration: 'none',
              color: 'white',
              padding: '12px',
              fontSize: '18px',
            }}
          >
            Get Started
          </Link>
        </div>
      </center>
      <div
        style={{
          backgroundColor: 'var(--secondary-background-color)',
          padding: '5% 0% 10% 15%',
        }}
      >
        <h2>Getting Started</h2>
        <div>
          Whether you prefer learning through reading or hands-on experience,
          KeepCoding provides a wealth of resources to help you become
          proficient with our products.
        </div>
        <br />
        <div>1. Clone the library from the GitHub repository.</div>
        <div>2. Incorporate the required header files into your C program.</div>
        <div>3. Compile and link your program with the library.</div>
        <div>
          4. Consult the documentation and examples to learn the usage of each
          data structure.
        </div>
      </div>
    </>
  );
};

export default Home;
