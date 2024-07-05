import { useState } from "react";
import UserProfile from "../components/UserProfile";
import UserRegForm from "./UserRegForm";

const Profile = () => {
  const [isEdit, setIsEdit] = useState(true);

  // const handleEdit = (isEdit) => {
  //   setIsEdit(true);
  // };
  return (
    <div>
      {isEdit ? (
        <UserRegForm setIsEdit={setIsEdit} />
      ) : (
        <UserProfile setIsEdit={setIsEdit} />
      )}
    </div>
  );
};

export default Profile;
