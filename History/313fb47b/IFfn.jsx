import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import UserProfile from "../components/UserProfile";
import UserRegForm from "./UserRegForm";

const Profile = () => {
  const [isEdit, setIsEdit] = useState(true);

  // const handleEdit = (isEdit) => {
  //   setIsEdit(true);
  // };
  const query = useQuery({ queryKey: ["todos"], queryFn: getTodos });
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
