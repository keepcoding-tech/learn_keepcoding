import { GetServerSideProps, NextPage } from 'next';
import { useSession } from 'next-auth/react';
import React, { useState } from 'react';
import PageLayout from '../../../components/layouts/page/PageLayout';
import PagePermissionProvider from '../../../components/permission-provider/page/PagePermissionProvider';
import CreateModuleTemplate, {
  ICreateModuleTemplate,
} from '../../../components/templates/create-module/CreateModuleTemplate';
import prisma from '../../../lib/prisma';

export const getServerSideProps: GetServerSideProps = async (req) => {
  const moduleResult = await prisma.module.findUnique({
    where: {
      id: String(req.query.id),
    },
    include: {
      chapters: {
        select: {
          id: true,
        },
      },
    },
  });

  const result = JSON.parse(JSON.stringify(moduleResult));

  return { props: result };
};

const EditModule: NextPage<ICreateModuleTemplate> = (props) => {
  const { data: session } = useSession();
  const [alert, setAlert] = useState<string | null>(null);
  const [id, setId] = useState<string>(props.id);
  const [title, setTitle] = useState<string>(props.title);
  const [chapters, setChapters] = useState<{ id: string }[]>(props.chapters);

  async function submitData(e: React.SyntheticEvent) {
    e.preventDefault();

    // store the new document into the database
    fetch('/api/docs/edit/module', {
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
              submitButton="update"
            />
          }
        />
      </PagePermissionProvider>
    </>
  );
};

export default EditModule;
