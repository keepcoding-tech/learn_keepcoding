import prisma from '../prisma';

// Verify whether a document with the provided ID is already in use.
export async function validateDocumentExistence(id: string): Promise<boolean> {
  return (await prisma.document.findFirst({ where: { id: id } })) !== null;
}

// Will update chapter ID if assigned to one.
export async function updateChapterIdForDocument(
  chapterId: string,
  documentId: string,
): Promise<boolean> {
  return (
    await prisma.document.update({
      where: { id: String(documentId) },
      data: {
        chapterId: String(chapterId)
      }
    })
  ) !== null;
}
