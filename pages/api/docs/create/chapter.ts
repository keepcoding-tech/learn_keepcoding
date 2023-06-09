import type { NextApiRequest, NextApiResponse } from 'next';
import prisma from '../../../../lib/prisma';

async function handle(req: NextApiRequest, res: NextApiResponse) {
  const { id, title } = req.body.doc;
  let documents: { id: string }[] = [];

  // go through the documents and create the objects
  req.body.documents.forEach((doc: { id: string }) => {
    if (doc.id != '') {
      documents.push({ id: doc.id });
    }
  });

  const result = await prisma.chapter.create({
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