import { NextPage } from 'next';
import { useSession } from 'next-auth/react';
import React, { useState } from 'react';
import PageLayout from '../../../components/layouts/page/PageLayout';
import PagePermissionProvider from '../../../components/permission-provider/page/PagePermissionProvider';
import CreateModuleTemplate, {
  ICreateModuleTemplate,
} from '../../../components/templates/create-module/CreateModuleTemplate';

const CreateModule: NextPage<ICreateModuleTemplate> = () => {
  const { data: session } = useSession();
  const [alert, setAlert] = useState<string | null>(null);
  const [id, setId] = useState<string>('');
  const [title, setTitle] = useState<string>('');
  const [chapters, setChapters] = useState<{ id: string }[]>([]);

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
      <PagePermissionProvider session={session}>
        <PageLayout>
          <CreateModuleTemplate
            id={id}
            setId={setId}
            title={title}
            setTitle={setTitle}
            chapters={chapters}
            setChapters={setChapters}
            alert={alert}
            submitData={submitData}
            submitButton='create'
          />
        </PageLayout>
      </PagePermissionProvider>
    </>
  );
};

export default CreateModule;
