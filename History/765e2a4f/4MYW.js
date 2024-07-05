import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  name: {
    type: String,
  },
  area: {
    type: String,
  },
  city: {
    type: String,
  },
  Phone: {
    type: Number,
  },
  image: {
    type: String,
  },
  profession: {
    type: String,
  },
  education: {
    type: String,
  },
  role: {
    type: String,
  },
});
const User = mongoose.model("User", userSchema);
export default User;
