import { AlertColor } from '@mui/material/Alert';
import { GetServerSideProps, NextPage } from 'next';
import { useSession } from 'next-auth/react';
import React, { useState } from 'react';
import CustomError from '../../../components/errors/custom/CustomError';
import PageLayout from '../../../components/layouts/page/PageLayout';
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

  // check if the chapter exists
  if (chapterResult === null) {
    return {
      notFound: true,
    };
  }

  const result = JSON.parse(JSON.stringify(chapterResult));

  return { props: result };
};

const EditChapter: NextPage<ICreateChapterTemplate> = (props) => {
  const { data: session } = useSession();
  const [alert, setAlert] = useState<{
    status: AlertColor | undefined;
    message: string;
  }>({ status: undefined, message: '' });
  const [id, setId] = useState<string>(props.id);
  const [title, setTitle] = useState<string>(props.title);
  const [documents, setDocuments] = useState<{ id: string }[]>(props.documents);

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
    fetch('/api/docs/edit/chapter', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        chapter: { id, title },
        documents: documents,
      }),
    })
      .then((response) => response.json())
      .then(async (response) => {
        if (response.error) {
          setAlert({ status: 'error', message: response.error });
        } else {
          setAlert({
            status: 'success',
            message: 'Chapter updated succesfully!!',
          });
        }
      });
  }

  return (
    <>
      <PageLayout
        title="Edit Chapter"
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

export default EditChapter;
