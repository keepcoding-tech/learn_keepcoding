import type { NextApiRequest, NextApiResponse } from 'next';
import prisma from '../../../../lib/prisma';
import { validateChapterExistence } from '../../../../lib/utils/chapters';
import { validateDocumentExistence } from '../../../../lib/utils/documents';
import { isAdmin } from '../../../../lib/utils/users';

const create = async (req: NextApiRequest, res: NextApiResponse) => {
  // if the user is not admin, don't make the action
  if (!(await isAdmin(req, res))) {
    return res.status(403).json({ error: 'Access Forbiden' });
  }

  // get the chapter's ID and trim any new line characters and spaces
  const chapterId = req.body.chapter.id.trim().replace(' ', '');

  // if the chapter already exists, return an error
  if (await validateChapterExistence(chapterId)) {
    return await res
      .status(400)
      .send({ error: 'The chapter ID is already in use!' });
  }

  // go through the documents and create the objects
  let documents: { id: string }[] = [];
  req.body.documents.forEach(async (doc: { id: string }) => {
    // check if the document exists
    if (await validateDocumentExistence(doc.id)) {
      documents.push({ id: doc.id });
    } else {
      return await res
        .status(400)
        .send({ error: `Document with ID ${doc.id} does not exist!` });
    }
  });

  // insert the new document into the database
  await prisma.chapter.create({
    data: {
      id: chapterId,
      title: req.body.chapter.title,
      documents: {
        connect: documents,
      },
    },
  });

  // return a success status
  return res.status(201).json({ success: true });
};

export default create;
