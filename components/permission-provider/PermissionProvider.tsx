import Typography from '@mui/material/Typography';
import { Session } from 'next-auth';
import React from 'react';

export interface IPermissionProvider {
  children: any;
  session: Session | null;
}

const PermissionProvider: React.FC<IPermissionProvider> = (provider) => {
  const user: any = provider.session?.user;

  // render content if the user has admin role
  if (provider.session && user.role === 'ADMIN') {
    return <>{provider.children}</>;
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
