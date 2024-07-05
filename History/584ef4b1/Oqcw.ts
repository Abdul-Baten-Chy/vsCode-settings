import { Schema, model } from 'mongoose';
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
    },
    phone: String,
    address: String,
  },
  {
    timestamps: true,
  }
);

userSchema.pre('save', async function (next) {
  // eslint-disable-next-line @typescript-eslint/no-this-alias
  const user = this; // doc

  user.password = await bcrypt.hash(
    user.password,
    Number(config.bcrypt_salt_rounds)
  );

  next();
});

// set '' after saving password
userSchema.post('save', function (doc, next) {
  doc.password = '';
  next();
});

export const User = model<Tuser>('User', userSchema);
