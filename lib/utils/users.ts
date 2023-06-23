import { User } from '@prisma/client';
import { NextApiRequest, NextApiResponse } from 'next';
import { getServerSession } from 'next-auth';
import { options } from '../../pages/api/auth/[...nextauth]';
import prisma from '../prisma';

export const validateUserExistence = {
  // Verify whether a user with the provided email is already in use.
  byEmail: async function email(email: string): Promise<User | null> {
    const user = await prisma.user.findFirst({ where: { email: email } });
    console.log({user});
    return user;
  },
};

// Will return "true" if the user has administrator privileges.
export async function isAdmin(
  req: NextApiRequest,
  res: NextApiResponse
): Promise<Boolean> {
  const session = await getServerSession(req, res, options);
  const user: any = session?.user;
  return user && user.role === 'ADMIN';
}
