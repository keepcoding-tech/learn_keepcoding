import Typography from '@mui/material/Typography';
import { useSession } from 'next-auth/react';
import React from 'react';

export interface IPermissionProvider {
  children: any;
}

const PermissionProvider: React.FC<IPermissionProvider> = ({ children }) => {
  const { data: session } = useSession();
  const user: any = session?.user;

  // render content if the user has admin role
  if (session && user.role === 'ADMIN') {
    return <>{children}</>;
  }

  return (
    <>
      <Typography variant="h6">
        403 | You do not have enough permissions.
      </Typography>
    </>
  );
};

export default PermissionProvider;
