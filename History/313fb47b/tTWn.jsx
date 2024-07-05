import { useState } from "react";
import UserProfile from "../components/UserProfile";
import UserRegForm from "./UserRegForm";

const Profile = () => {
  const [isEdit, setIsEdit] = useState(false);
  return <div>{isEdit ? <UserRegForm /> : <UserProfile />}</div>;
};

export default Profile;
