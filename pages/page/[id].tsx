import { GetServerSideProps, NextPage } from 'next';
import { useSession } from 'next-auth/react';
import Router from 'next/router';
import PageTemplate, {
  IPageTemplate,
} from '../../components/templates/page/PageTemplate';
import prisma from '../../lib/prisma';

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const page = await prisma.page.findUnique({
    where: {
      id: String(params?.id),
    },
    include: {
      author: {
        select: { name: true, email: true },
      },
    },
  });

  return {
    props: { page },
  };
};

async function publishPage(id: string): Promise<void> {
  await fetch(`/api/page/publish/${id}`, { method: 'PUT' });
  await Router.push('/');
}

type Props = {
  page: IPageTemplate;
};

const Page: NextPage<Props> = (props) => {
  const { data: session } = useSession();

  const userHasValidSession = Boolean(session);
  const pageBelongsToUser = session?.user?.email === props.page.author?.email;
  let title = props.page.title;

  if (!props.page.published) {
    title = `${title} (Draft)`;
  }

  return (
    <>
      <PageTemplate
        id={props.page.id}
        title={title}
        author={props.page.author}
        content={props.page.content}
        published={props.page.published}
      />
      {!props.page.published && userHasValidSession && pageBelongsToUser && (
        <button onClick={() => publishPage(props.page.id)}>Publish</button>
      )}
    </>
  );
};

export default Page;
