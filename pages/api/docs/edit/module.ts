import type { NextApiRequest, NextApiResponse } from 'next';
import prisma from '../../../../lib/prisma';

async function handle(req: NextApiRequest, res: NextApiResponse) {
  const { id, title } = req.body.doc;
  const chapters = req.body.chapters;

  const result = await prisma.module.update({
    where: {
      id: id
    },
    data: {
      id: id,
      title: title,
      chapters: {
        connect: chapters,
      },
    },
  });

  res.json(result);
}

export default handle;
