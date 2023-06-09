import type { NextApiRequest, NextApiResponse } from 'next';
import prisma from '../../../../lib/prisma';

async function handle(req: NextApiRequest, res: NextApiResponse) {
  const { id, title } = req.body.doc;
  const documents = req.body.documents;

  const result = await prisma.chapter.update({
    where: {
      id: id
    },
    data: {
      id: id,
      title: title,
      documents: {
        connect: documents,
      },
    },
  });

  res.json(result);
}

export default handle;
