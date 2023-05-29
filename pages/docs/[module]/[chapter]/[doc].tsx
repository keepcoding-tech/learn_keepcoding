import { GetServerSideProps, NextPage } from 'next';
import { useSession } from 'next-auth/react';
import DocsLayout from '../../../../components/layouts/docs/DocsLayout';
import DocTemplate from '../../../../components/templates/doc/DocTemplate';
import prisma from '../../../../lib/prisma';

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const moduleId = params?.module;
  const chapterId = params?.chapter;
  const docId = params?.doc;

  const moduleResult = await prisma.module.findUnique({
    select: { id: true, title: true },
    where: { id: String(moduleId) },
  });

  const chaptersResult = await prisma.chapter.findMany({
    where: {
      moduleId: String(moduleId),
    },
    include: {
      documents: {
        select: {
          id: true,
          title: true,
        },
      },
    },
  });

  const documentResult = await prisma.document.findUnique({
    where: {
      id: String(docId),
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

  const mod = JSON.parse(JSON.stringify(moduleResult));
  const chapters = JSON.parse(JSON.stringify(chaptersResult));
  const document = JSON.parse(JSON.stringify(documentResult));

  return {
    props: {
      module: mod,
      chapters: chapters,
      currentChapter: chapterId,
      doc: document,
    },
  };
};

type Props = {
  module: any;
  chapters: any;
  currentChapter: any;
  doc: any;
};

const Page: NextPage<Props> = (props) => {
  const { status } = useSession();
  const authStatus: string = status === 'unauthenticated' ? 'Login' : 'Logout';

  return (
    <>
      <DocsLayout
        status={authStatus}
        sidebar={{
          module: props.module,
          chapters: props.chapters,
          currentChapter: props.currentChapter,
        }}
      >
        <DocTemplate
          id={props.doc.id}
          title={props.doc.title}
          content={props.doc.content}
          category={props.doc.category}
          createdAt={props.doc.createdAt}
          updatedAt={props.doc.updatedAt}
          published={props.doc.published}
          authorId={props.doc.authorId}
          author={props.doc.author}
        />
      </DocsLayout>
    </>
  );
};

export default Page;
