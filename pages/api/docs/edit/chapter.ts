import type { NextApiRequest, NextApiResponse } from 'next';
import prisma from '../../../../lib/prisma';
import { updateChapterIdForDocument, validateDocumentExistence } from '../../../../lib/utils/documents';
import { isAdmin } from '../../../../lib/utils/users';

const update = async (req: NextApiRequest, res: NextApiResponse) => {
  // if the user is not admin, don't make the action
  if (!(await isAdmin(req, res))) {
    return res.status(403).json({ error: 'Access Forbiden' });
  }

  // get the chapter's ID
  const chapterId = req.body.chapter.id;

  // go through the documents and create the objects
  let documents: { id: string }[] = [];
  req.body.documents.forEach(async (doc: { id: string }) => {
    // check if the document exists
    if (!(await validateDocumentExistence(doc.id))) {
      return await res
        .status(400)
        .send({ error: `Document with ID ${doc.id} does not exist!` });
    }

    // add the new document to the list
    documents.push({ id: doc.id });

    // update the chapter id for each document
    updateChapterIdForDocument(chapterId, doc.id);
  });

  // insert the new document into the database
  await prisma.chapter.update({
    where: {
      id: chapterId,
    },
    data: {
      title: req.body.chapter.title,
      documents: {
        connect: documents,
      },
    },
  });

  // return a success status
  return res.status(201).json({ success: true });
};

export default update;
