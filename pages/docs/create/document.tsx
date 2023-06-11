import { NextPage } from 'next';
import { useSession } from 'next-auth/react';
import React, { useState } from 'react';
import CustomError from '../../../components/errors/custom/CustomError';
import PageLayout from '../../../components/layouts/page/PageLayout';
import CreateDocumentTemplate, {
  ICreateDocumentTemplate,
} from '../../../components/templates/create-document/CreateDocumentTemplate';

const CreateDocument: NextPage<ICreateDocumentTemplate> = () => {
  const { data: session } = useSession();
  const [alert, setAlert] = useState<string | null>(null);
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
        doc: { id, title },
        content: content,
      }),
    })
      .then((response) => response.json())
      .then(async (response) => {
        if (response.error) {
          setAlert(response.error);
        } else {
          setAlert('Document created succesfully!!');
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
