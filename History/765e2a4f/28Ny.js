import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  name: {
    type: String,
  },
  address: {
    type: String,
  },
  city: {
    type: String,
  },
  country: {
    type: String,
  },
  Phone: {
    type: Number,
  },
  image: {
    type: file,
  },
});
const User = mongoose.model("User", userSchema);
export default User;
