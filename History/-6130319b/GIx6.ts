import { User } from './user.model';

const createUserIntoDB = async (payload) => {
  const user = await User.create(payload);
};

export const userServices = {
  createUserIntoDB,
};
