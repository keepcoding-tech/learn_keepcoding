import prisma from '../prisma';

// Verify whether a chapter with the provided ID is already in use.
export async function validateChapterExistence(id: string): Promise<boolean> {
  return (await prisma.chapter.findFirst({ where: { id: id } })) !== null;
}
