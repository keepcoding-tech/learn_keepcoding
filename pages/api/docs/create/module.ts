import type { NextApiRequest, NextApiResponse } from 'next';
import prisma from '../../../../lib/prisma';
import { updateModuleIdForChapter, validateChapterExistence } from '../../../../lib/utils/chapters';
import { validateModuleExistence } from '../../../../lib/utils/modules';
import { isAdmin } from '../../../../lib/utils/users';

const create = async (req: NextApiRequest, res: NextApiResponse) => {
  // if the user is not admin, don't make the action
  if (!(await isAdmin(req, res))) {
    return res.status(403).json({ error: 'Access Forbiden' });
  }

  // get the module's ID and trim any new line characters and spaces
  const moduleId = req.body.module.id.trim().replace(' ', '');

  // if the chapter already exists, return an error
  if (await validateModuleExistence(moduleId)) {
    return await res
      .status(400)
      .send({ error: 'The module ID is already in use!' });
  }

  // go through the chapters and create the objects
  let chapters: { id: string }[] = [];
  req.body.chapters.forEach(async (chapter: { id: string }) => {
    if (!(await validateChapterExistence(chapter.id))) {
      return await res
        .status(400)
        .send({ error: `Chapter with ID ${chapter.id} does not exist!` });
    }

    // add the new chapter to the list
    chapters.push({ id: chapter.id });

    // update the module id for each chapter
    updateModuleIdForChapter(moduleId, chapter.id);
  });

  // insert the new document into the database
  await prisma.module.create({
    data: {
      id: moduleId,
      title: req.body.module.title,
      chapters: {
        connect: chapters,
      },
    },
  });

  // return a success status
  return res.status(201).json({ success: true });
};

export default create;
