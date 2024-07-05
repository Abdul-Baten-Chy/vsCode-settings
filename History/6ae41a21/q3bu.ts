import { Model } from 'mongoose';

export interface Tuser {
  name: string;
  email: string;
  role: 'user' | 'admin';
  password: string;
  phone: string;
  address: string;
}

export interface userModel extends Model<Tuser> {
  isPasswordMatched(
    plainTextPassword: string,
    hashedPassword: string
  ): Promise<boolean>;
}
