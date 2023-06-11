import { NextPage } from 'next';
import { useSession } from 'next-auth/react';
import React, { useState } from 'react';
import CustomError from '../../../components/errors/custom/CustomError';
import PageLayout from '../../../components/layouts/page/PageLayout';
import CreateChapterTemplate, {
  ICreateChapterTemplate,
} from '../../../components/templates/create-chapter/CreateChapterTemplate';

const CreateChapter: NextPage<ICreateChapterTemplate> = () => {
  const { data: session } = useSession();
  const [alert, setAlert] = useState<string | null>(null);
  const [id, setId] = useState<string>('');
  const [title, setTitle] = useState<string>('');
  const [documents, setDocuments] = useState<{ id: string }[]>([]);

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
    fetch('/api/docs/create/chapter', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        doc: { id, title },
        documents: documents,
      }),
    })
      .then((response) => response.json())
      .then(async (response) => {
        if (response.error) {
          setAlert(response.error);
        } else {
          setAlert('Chapter created succesfully!!');
        }
      });
  }

  return (
    <>
      <PageLayout
        title="Create Chapter"
        updatedAt=""
        childrens={
          <CreateChapterTemplate
            id={id}
            setId={setId}
            title={title}
            setTitle={setTitle}
            documents={documents}
            setDocuments={setDocuments}
            alert={alert}
            submitData={submitData}
            submitButton="create"
          />
        }
      />
    </>
  );
};

export default CreateChapter;
