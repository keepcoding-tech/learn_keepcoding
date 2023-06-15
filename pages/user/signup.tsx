import { Alert, AlertColor, Button } from '@mui/material';
import { NextPage } from 'next';
import { useSession } from 'next-auth/react';
import React, { useState } from 'react';
import CustomError from '../../components/errors/custom/CustomError';
import PageLayout from '../../components/layouts/page/PageLayout';
import TextInput from '../../components/utils/inputs/text/TextInput';

const SignUpUser: NextPage = () => {
  const { data: session } = useSession();
  const [alert, setAlert] = useState<{
    status: AlertColor | undefined;
    message: string;
  }>({ status: undefined, message: '' });
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  // if user does not have admin rights, show 403 error
  const user: any = session?.user;
  if (!session || user.role !== 'ADMIN') {
    return (
      <CustomError
        statusCode={'403'}
        title={'access forbiden'}
        description={"(I'm sorry boddy...)"}
      />
    );
  }

  async function submitData(e: React.SyntheticEvent) {
    e.preventDefault();

    // store the new document into the database
    fetch('/api/user/signup', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: name,
        email: email,
        password: password,
      }),
    })
      .then((response) => response.json())
      .then(async (response) => {
        if (response.error) {
          setAlert({ status: 'error', message: response.error });
        } else {
          setAlert({
            status: 'success',
            message: 'User created succesfully!!',
          });
        }
      });
  }

  return (
    <>
      <PageLayout
        title="Create User"
        updatedAt="now"
        childrens={
          <>
            {alert.status ? (
              <Alert severity={alert.status}>{alert.message}</Alert>
            ) : null}
            <TextInput
              id={'name'}
              value={name}
              label={'name'}
              setInput={setName}
              required={false}
              fullWidth={true}
              multiline={false}
              minRow={0}
            />
            <br />
            <br />
            <TextInput
              id={'email'}
              value={email}
              label={'email'}
              setInput={setEmail}
              required={true}
              fullWidth={true}
              multiline={false}
              minRow={0}
            />
            <br />
            <br />
            <TextInput
              id={'password'}
              value={password}
              label={'password'}
              setInput={setPassword}
              required={true}
              fullWidth={true}
              multiline={false}
              minRow={0}
            />
            <br />
            <br />
            <Button
              id={'submit'}
              variant="contained"
              disabled={!email || !password}
              fullWidth
              onClick={submitData}
            >
              CREATE
            </Button>
          </>
        }
      />
    </>
  );
};

export default SignUpUser;
