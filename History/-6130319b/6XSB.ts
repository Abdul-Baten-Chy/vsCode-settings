import Tuser from './user.interface';
import { User } from './user.model';

const createUserIntoDB = async (payload: Tuser) => {
  const isUserExist = await User.isUserExistsByEmail(payload.email);
  return user;
};

export const userServices = {
  createUserIntoDB,
};
