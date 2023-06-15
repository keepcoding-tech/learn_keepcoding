import type { NextApiRequest, NextApiResponse } from 'next';
import { validateUserExistence } from '../../../lib/utils/users';

const bcrypt = require('bcrypt');

const signin = async (req: NextApiRequest, res: NextApiResponse) => {
  // check user existance and compare the passwords
  const user = await validateUserExistence.byEmail(req.body.email);
  if (user && (await bcrypt.compare(req.body.password, user.password))) {
    return res.status(200).json({
      email: user.email,
      role: user.role,
    });
  }

  // incorect username or password
  return res.status(403).json({ error: 'Incorrect email or password' });
};

export default signin;
