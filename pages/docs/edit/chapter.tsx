import { GetServerSideProps, NextPage } from 'next';
import { useSession } from 'next-auth/react';
import React, { useState } from 'react';
import PageLayout from '../../../components/layouts/page/PageLayout';
import PagePermissionProvider from '../../../components/permission-provider/page/PagePermissionProvider';
import CreateChapterTemplate, {
  ICreateChapterTemplate,
} from '../../../components/templates/create-chapter/CreateChapterTemplate';
import prisma from '../../../lib/prisma';

export const getServerSideProps: GetServerSideProps = async (req) => {
  const chapterResult = await prisma.chapter.findUnique({
    where: {
      id: String(req.query.id),
    },
    include: {
      documents: {
        select: {
          id: true,
        },
      },
    },
  });

  const result = JSON.parse(JSON.stringify(chapterResult));

  return { props: result };
};

const EditChapter: NextPage<ICreateChapterTemplate> = (props) => {
  const { data: session } = useSession();
  const [alert, setAlert] = useState<string | null>(null);
  const [id, setId] = useState<string>(props.id);
  const [title, setTitle] = useState<string>(props.title);
  const [documents, setDocuments] = useState<{ id: string }[]>(props.documents);

  async function submitData(e: React.SyntheticEvent) {
    e.preventDefault();

    // store the new document into the database
    fetch('/api/docs/edit/chapter', {
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
      <PagePermissionProvider session={session}>
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
      </PagePermissionProvider>
    </>
  );
};

export default EditChapter;
