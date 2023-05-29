import type { NextApiRequest, NextApiResponse } from 'next';
import prisma from '../../../../lib/prisma';

async function handle(req: NextApiRequest, res: NextApiResponse) {
  const { id, title } = req.body.doc;
  let chapters: { id: string }[] = [];

  // go through the chapters and create the objects
  req.body.subdocs.forEach((chapter: string) => {
    if (chapter != '') {
      chapters.push({ id: chapter });
    }
  });

  const result = await prisma.module.create({
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
