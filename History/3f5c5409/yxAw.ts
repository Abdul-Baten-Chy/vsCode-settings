import jwt from 'jsonwebtoken';

export const createToken = (
  jwtPayload: { userEmail: string; role: string },
  secret: string,
  expiresIn: string
) => {
  console.log(expiresIn);

  return jwt.sign(jwtPayload, secret, {
    expiresIn,
  });
};
