import type { NextApiRequest, NextApiResponse } from 'next';
import prisma from '../../../../lib/prisma';
import { isAdmin } from '../../../../lib/utils/users';

const update = async (req: NextApiRequest, res: NextApiResponse) => {
  // if the user is not admin, don't make the action
  if (!(await isAdmin(req, res))) {
    return res.status(403).json({ error: 'Access Forbiden' });
  }

  // get the document's ID and trim any new line characters and spaces
  const documentId = req.body.document.id.trim().replace(' ', '');

  // insert the new document into the database
  await prisma.document.update({
    where: {
      id: documentId,
    },
    data: {
      title: req.body.document.title,
      content: req.body.content,
      author: {
        connect: {
          email: String(req.body.author),
        },
      },
    },
  });

  // return a success status
  return res.status(201).json({ success: true });
};

export default update;
