import { AlertColor } from '@mui/material/Alert';
import { NextPage } from 'next';
import { useSession } from 'next-auth/react';
import Router from 'next/router';
import React, { useState } from 'react';
import CustomError from '../../../components/errors/custom/CustomError';
import PageLayout from '../../../components/layouts/page/PageLayout';
import CreateDocumentTemplate, {
  ICreateDocumentTemplate,
} from '../../../components/templates/create-document/CreateDocumentTemplate';

const CreateDocument: NextPage<ICreateDocumentTemplate> = () => {
  const { data: session } = useSession();
  const [alert, setAlert] = useState<{
    status: AlertColor | undefined;
    message: string;
  }>({ status: undefined, message: '' });
  const [content, setContent] = useState<string>('');
  const [id, setId] = useState<string>('');
  const [title, setTitle] = useState<string>('');

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
    fetch('/api/docs/create/document', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        document: { id, title },
        content: content,
        author: user.email,
      }),
    })
      .then((response) => response.json())
      .then(async (response) => {
        if (response.error) {
          setAlert({ status: 'error', message: response.error });
        } else {
          setAlert({
            status: 'success',
            message: 'Chapter created succesfully!!',
          });
          Router.push(`/about/${id}`);
        }
      });
  }

  return (
    <>
      <PageLayout
        title="Create Document"
        updatedAt=""
        childrens={
          <CreateDocumentTemplate
            id={id}
            setId={setId}
            title={title}
            setTitle={setTitle}
            content={content}
            setContent={setContent}
            alert={alert}
            submitData={submitData}
            submitButton="create"
            author={{
              name: session?.user?.name || '',
              email: session?.user?.email || '',
            }}
          />
        }
      ></PageLayout>
    </>
  );
};

export default CreateDocument;
