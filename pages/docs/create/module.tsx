import { NextPage } from 'next';
import { useSession } from 'next-auth/react';
import React, { useState } from 'react';
import CustomError from '../../../components/errors/custom/CustomError';
import PageLayout from '../../../components/layouts/page/PageLayout';
import CreateModuleTemplate, {
  ICreateModuleTemplate,
} from '../../../components/templates/create-module/CreateModuleTemplate';

const CreateModule: NextPage<ICreateModuleTemplate> = () => {
  const { data: session } = useSession();
  const [alert, setAlert] = useState<string | null>(null);
  const [id, setId] = useState<string>('');
  const [title, setTitle] = useState<string>('');
  const [chapters, setChapters] = useState<{ id: string }[]>([]);

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
    fetch('/api/docs/create/module', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        doc: { id, title },
        chapters: chapters,
      }),
    })
      .then((response) => response.json())
      .then(async (response) => {
        if (response.error) {
          setAlert(response.error);
        } else {
          setAlert('Module created succesfully!!');
        }
      });
  }

  return (
    <>
      <PageLayout
        title="Create Module"
        updatedAt=""
        childrens={
          <CreateModuleTemplate
            id={id}
            setId={setId}
            title={title}
            setTitle={setTitle}
            chapters={chapters}
            setChapters={setChapters}
            alert={alert}
            submitData={submitData}
            submitButton="create"
          />
        }
      />
    </>
  );
};

export default CreateModule;
