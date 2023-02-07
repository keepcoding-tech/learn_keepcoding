import { GetServerSideProps, NextPage } from 'next';
import { useSession } from 'next-auth/react';
import DocsLayout from '../../../components/layouts/docs/DocsLayout';
import DocTemplate from '../../../components/templates/doc/DocTemplate';
import prisma from '../../../lib/prisma';

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const result = await prisma.document.findUnique({
    where: {
      id: String(params?.id),
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

  const document = JSON.parse(JSON.stringify(result));

  return { props: { doc: document } };
};

type Props = { doc: any };

const Page: NextPage<Props> = (props) => {
  const { status } = useSession();
  const authStatus: string = status === 'unauthenticated' ? 'Login' : 'Logout';

  return (
    <>
      <DocsLayout
        status={authStatus}
        sidebar={{
          module: 'Fundamentals',
          chapters: [
            'Get started with KCDP',
            'Manage your KCDP projects',
            'Platforms and frameworks',
            'Prototype and test with Emulator Suite',
          ],
          docsIds: [
            ['test-0', 'test-1', 'test-2', 'test-3', 'test-4', 'test-5'],
            ['test-0', 'test-1', 'test-2', 'test-3', 'test-4', 'test-5'],
            ['test-0', 'test-1', 'test-2', 'test-3', 'test-4', 'test-5'],
            ['test-0', 'test-1', 'test-2', 'test-3', 'test-4', 'test-5'],
          ],
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
