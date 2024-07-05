import { Schema } from "mongoose";
import Tuser from "./user.interface";


const userSchema=new Schema<Tuser>({
    name:{
        type:String,
        required:[true, "Nmae is Required"]
    }
  email: {
    type:String,
    required:[true, "Email is Required"]
}
  role: {
    type:String,
    enum:['user', "admin"]
}
  password: {
    type:String,
    required:[true, "Password is Required"]
}
  phone: String
  address: String;
})