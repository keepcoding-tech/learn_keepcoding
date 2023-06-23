import prisma from '../prisma';

// Verify whether a chapter with the provided ID is already in use.
export async function validateChapterExistence(id: string): Promise<boolean> {
  return (await prisma.chapter.findFirst({ where: { id: id } })) !== null;
}

// Will update module ID if assigned to one.
export async function updateModuleIdForChapter(
  moduleId: string,
  chapterId: string,
): Promise<boolean> {
  return (
    await prisma.chapter.update({
      where: { id: String(chapterId) },
      data: {
        moduleId: String(moduleId)
      }
    })
  ) !== null;
}
