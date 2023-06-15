import type { NextApiRequest, NextApiResponse } from 'next';
import prisma from '../../../lib/prisma';
import { isAdmin, validateUserExistence } from '../../../lib/utils/users';

const bcrypt = require('bcrypt');

const signup = async (req: NextApiRequest, res: NextApiResponse) => {
  // if the user is not admin, don't make the action
  if (!(await isAdmin(req, res))) {
    return res.status(403).json({ error: 'Access Forbiden' });
  }

  // trim any new line characters and spaces
  const email = req.body.email.trim().replace(' ', '');

  // check user existance by email
  if (await validateUserExistence.byEmail(email)) {
    return await res.status(400).send({ error: 'Email is already in use!' });
  }

  // encript the password
  const password = await bcrypt.hash(req.body.password, 10);

  await prisma.user.create({
    data: {
      name: req.body.name || '',
      email: email,
      password: password,
    },
  });

  return res.status(201).json({ success: true });
};

export default signup;
