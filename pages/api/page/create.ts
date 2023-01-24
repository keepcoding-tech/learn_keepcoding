import type { NextApiRequest, NextApiResponse } from 'next';
import { getSession } from 'next-auth/react';
import prisma from '../../../lib/prisma';

// POST /api/page/create
// Required fields in body: pageId, title
// Optional fields in body: content
async function handle(req: NextApiRequest, res: NextApiResponse) {
  const { pageId, title, content } = req.body;

  const session = await getSession({ req });
  const result = await prisma.page.create({
    data: {
      id: pageId,
      title: title,
      content: content,
      author: { connect: { email: String(session?.user?.email) } },
    },
  });
  res.json(result);
}

export default handle;
