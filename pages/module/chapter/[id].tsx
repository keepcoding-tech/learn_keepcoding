import { GetServerSideProps, NextPage } from 'next';
import DocTemplate from '../../../components/templates/docs/DocTemplate';
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
  return (
    <>
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
    </>
  );
};

export default Page;
