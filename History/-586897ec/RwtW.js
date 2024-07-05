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
const updateUser = async (req, res) => {
  const email = req.params.email;
  const { name, eamil, role, image, profession, education, phone, area, city } =
    req.body;
  const user = await User.findOne({ email });
  (user.name = name),
    (user.email = email),
    (user.role = role),
    (user.image = image),
    (user.profession = profession),
    (user.education = education),
    (user.phone = phone),
    (user.area = area),
    (user.city = city);
  await user.save();
  res.send(user);
};

export default {
  createUser,
  getUser,
  updateUser,
};
