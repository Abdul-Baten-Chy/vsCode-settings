import { Schema } from "mongoose";
import Tuser from "./user.interface";


const userSchema=new Schema<Tuser>({
    name: string;
  email: string;
  role: 'user' | 'admin';
  password: string;
  phone: string;
  address: string;
})