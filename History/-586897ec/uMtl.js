import User from "../models/user.model.js";

const createUser = async (req, res) => {
  try {
    const { email } = req.body;
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(200).send();
    }

    const newUser = new User(req.body);
    await newUser.save();

    res.status(201).json(newUser.toObject());
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error creating user" });
  }
};

const getUser = async (req, res) => {
  try {
    const email = req.params.email;
    console.log(email);
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(500).json({ message: "user not found" });
    }
    res.status(200).send(user);
  } catch (error) {
    console.log(error);
  }
};

export default {
  createUser,
  getUser,
};
