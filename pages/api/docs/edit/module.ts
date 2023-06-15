import type { NextApiRequest, NextApiResponse } from 'next';
import prisma from '../../../../lib/prisma';
import { validateChapterExistence } from '../../../../lib/utils/chapters';
import { isAdmin } from '../../../../lib/utils/users';

const update = async (req: NextApiRequest, res: NextApiResponse) => {
  // if the user is not admin, don't make the action
  if (!(await isAdmin(req, res))) {
    return res.status(403).json({ error: 'Access Forbiden' });
  }

  // get the module's ID and trim any new line characters and spaces
  const moduleId = req.body.module.id.trim().replace(' ', '');

  // go through the chapters and create the objects
  let chapters: { id: string }[] = [];
  req.body.chapters.forEach(async (chapter: { id: string }) => {
    if (await validateChapterExistence(chapter.id)) {
      chapters.push({ id: chapter.id });
    } else {
      return await res
        .status(400)
        .send({ error: `Chapter with ID ${chapter.id} does not exist!` });
    }
  });

  // insert the new document into the database
  await prisma.module.update({
    where: {
      id: moduleId,
    },
    data: {
      title: req.body.module.title,
      chapters: {
        connect: chapters,
      },
    },
  });

  // return a success status
  return res.status(201).json({ success: true });
};

export default update;
