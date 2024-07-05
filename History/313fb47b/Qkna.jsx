import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useState } from "react";
import UserProfile from "../components/UserProfile";
import UserRegForm from "./UserRegForm";

const Profile = () => {
  const [isEdit, setIsEdit] = useState(true);

  // const handleEdit = (isEdit) => {
  //   setIsEdit(true);
  // };
  const { data: user, isloading } = useQuery({
    queryKey: ["user"],
    queryFn: async () => {
      return await axios.get("http://localhost:5000/api/my/users");
    },
  });
  return (
    <div>
      {isEdit ? (
        <UserRegForm user={user} setIsEdit={setIsEdit} />
      ) : (
        <UserProfile user={user} setIsEdit={setIsEdit} />
      )}
    </div>
  );
};

export default Profile;
