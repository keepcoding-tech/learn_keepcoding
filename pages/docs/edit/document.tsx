import { GetServerSideProps, NextPage } from 'next';
import { useSession } from 'next-auth/react';
import React, { useState } from 'react';
import PageLayout from '../../../components/layouts/page/PageLayout';
import PagePermissionProvider from '../../../components/permission-provider/page/PagePermissionProvider';
import CreateDocumentTemplate, {
  ICreateDocumentTemplate,
} from '../../../components/templates/create-document/CreateDocumentTemplate';
import prisma from '../../../lib/prisma';

export const getServerSideProps: GetServerSideProps = async (req) => {
  const documentResult = await prisma.document.findUnique({
    where: {
      id: String(req.query.id),
    },
    include: {
      author: {
        select: {
          name: true,
          email: true,
        },
      },
    },
  });

  const result = JSON.parse(JSON.stringify(documentResult));

  return { props: result };
};

const EditDocument: NextPage<ICreateDocumentTemplate> = (props) => {
  const { data: session } = useSession();
  const [alert, setAlert] = useState<string | null>(null);
  const [content, setContent] = useState<string>(props.content);
  const [id, setId] = useState<string>(props.id);
  const [title, setTitle] = useState<string>(props.title);

  async function submitData(e: React.SyntheticEvent) {
    e.preventDefault();

    // store the new document into the database
    fetch('/api/docs/edit/document', {
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
      <PagePermissionProvider session={session}>
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
              submitButton="update"
              author={{
                name: session?.user?.name || '',
                email: session?.user?.email || '',
              }}
            />
          }
        ></PageLayout>
      </PagePermissionProvider>
    </>
  );
};

export default EditDocument;
