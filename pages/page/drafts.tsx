import { GetServerSideProps, NextPage } from 'next';
import { getSession, useSession } from 'next-auth/react';
import PermissionProvider from '../../components/permission-provider/PermissionProvider';
import PageTemplate, {
  IPageTemplate,
} from '../../components/templates/page/PageTemplate';
import prisma from '../../lib/prisma';

export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
  const session = await getSession({ req });

  if (!session) {
    res.statusCode = 403;
    return { props: { drafts: [] } };
  }

  const drafts = await prisma.page.findMany({
    where: {
      author: { email: session?.user?.email },
      published: false,
    },
    include: {
      author: {
        select: { name: true, email: true },
      },
    },
  });

  return {
    props: { drafts },
  };
};

type Props = {
  drafts: IPageTemplate[];
};

const Drafts: NextPage<Props> = (props) => {
  const { data: session } = useSession();

  return (
    <>
      <PermissionProvider session={session}>
        <h1>My Drafts</h1>
        <main>
          {props.drafts.map((page) => (
            <div key={page.id}>
              <PageTemplate
                id={page.id}
                title={page.title}
                author={page.author}
                content={page.content}
                published={false}
              />
            </div>
          ))}
        </main>
      </PermissionProvider>
    </>
  );
};

export default Drafts;
