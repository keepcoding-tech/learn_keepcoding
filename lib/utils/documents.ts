import prisma from '../prisma';

// Verify whether a document with the provided ID is already in use.
export async function validateDocumentExistence(id: string): Promise<boolean> {
  return (await prisma.document.findFirst({ where: { id: id } })) !== null;
}
