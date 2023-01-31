import Typography from '@mui/material/Typography';
import { Session } from 'next-auth';
import React from 'react';

export interface IPermissionProviderPage {
  children: any;
  session: Session | null;
}

const PermissionProviderPage: React.FC<IPermissionProviderPage> = (props) => {
  const user: any = props.session?.user;

  // render content if the user has admin role
  if (props.session && user.role === 'ADMIN') {
    return <>{props.children}</>;
  }

  return (
    <>
      <Typography variant="h6">
        403 | You do not have enough permissions.
      </Typography>
    </>
  );
};

export default PermissionProviderPage;
