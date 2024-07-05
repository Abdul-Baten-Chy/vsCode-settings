import bcrypt from 'bcrypt';
import { Schema, model } from 'mongoose';
import config from '../../../config/config';
import Tuser from './user.interface';

const userSchema = new Schema<Tuser>(
  {
    name: {
      type: String,
      required: [true, 'Nmae is Required'],
    },
    email: {
      type: String,
      required: [true, 'Email is Required'],
    },
    role: {
      type: String,
      enum: ['user', 'admin'],
    },
    password: {
      type: String,
      required: [true, 'Password is Required'],
      select: false,
    },
    phone: String,
    address: String,
  },
  {
    timestamps: true,
    toJSON: {
      transform: function (doc, ret) {
        delete ret.password;
        delete ret.__v;
      },
    },
  }
);

userSchema.pre('save', async function (next) {
  const user = this;

  user.password = await bcrypt.hash(
    user.password,
    Number(config.bcrypt_salt_rounds)
  );

  next();
});

userSchema.post('save', function (doc, next) {
  doc.password = '';
  next();
});
userSchema.statics.isUserExistsByEmail = async function (email: string) {
  return await User.findOne({ email });
};
export const User = model<Tuser>('User', userSchema);
