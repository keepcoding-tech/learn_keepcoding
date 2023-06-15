import prisma from '../prisma';

// Verify whether a module with the provided ID is already in use.
export async function validateModuleExistence(id: string): Promise<boolean> {
  return (await prisma.module.findFirst({ where: { id: id } })) !== null;
}
