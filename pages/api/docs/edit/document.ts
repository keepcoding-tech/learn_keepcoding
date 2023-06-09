import type { NextApiRequest, NextApiResponse } from 'next';
import { getSession } from 'next-auth/react';
import prisma from '../../../../lib/prisma';

async function handle(req: NextApiRequest, res: NextApiResponse) {
  const { id, title } = req.body.doc;
  const content = req.body.content;
  const session = await getSession({ req });

  const result = await prisma.document.update({
    where: {
      id: id
    },
    data: {
      title: title,
      content: content,
      author: {
        connect: {
          email: String(session?.user?.email),
        },
      },
    },
  });

  res.json(result);
}

export default handle;
