import type { NextApiRequest, NextApiResponse } from 'next';
import prisma from '../../../../lib/prisma';
import { validateDocumentExistence } from '../../../../lib/utils/documents';
import { isAdmin } from '../../../../lib/utils/users';

const create = async (req: NextApiRequest, res: NextApiResponse) => {
  // if the user is not admin, don't make the action
  if (!(await isAdmin(req, res))) {
    return res.status(403).json({ error: 'Access Forbiden' });
  }

  // get the document's ID and trim any new line characters and spaces
  const documentId = req.body.document.id.trim().replace(' ', '');

  // if the document already exists, return an error
  if (await validateDocumentExistence(documentId)) {
    return await res
      .status(400)
      .send({ error: 'The document ID is already in use!' });
  }

  // insert the new document into the database
  await prisma.document.create({
    data: {
      id: documentId,
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

export default create;
