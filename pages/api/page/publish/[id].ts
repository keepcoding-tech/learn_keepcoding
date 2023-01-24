import type { NextApiRequest, NextApiResponse } from 'next';
import prisma from '../../../../lib/prisma';

// PUT /api/page/publish/:id
export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const pageId = req.query.id;
  const page = await prisma.page.update({
    where: { id: String(pageId) },
    data: { published: true },
  });

  res.json(page);
}
