import { GetServerSideProps, NextPage } from 'next';
import PageLayout from '../../components/layouts/page/PageLayout';
import PreviewMarkdown from '../../components/markdown/preview/PreviewMarkdown';
import prisma from '../../lib/prisma';

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const id = params?.id;

  const documentResult = await prisma.document.findUnique({
    where: { id: String(id) },
  });

  // check if the document exists
  if (documentResult === null) {
    return {
      notFound: true,
    };
  }

  const document = JSON.parse(JSON.stringify(documentResult));

  return {
    props: {
      title: document.title,
      updatedAt: document.updatedAt,
      content: document.content,
    },
  };
};

type Props = {
  title: string;
  content: string;
  updatedAt: string;
};

const About: NextPage<Props> = (props) => {
  return (
    <>
      <PageLayout
        title={props.title}
        updatedAt={props.updatedAt}
        childrens={<PreviewMarkdown>{props.content}</PreviewMarkdown>}
      ></PageLayout>
    </>
  );
};

export default About;
