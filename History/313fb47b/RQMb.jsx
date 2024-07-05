import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useContext, useState } from "react";
import UserProfile from "../components/UserProfile";
import { MyContextProvider } from "../context/MyAuthContext";
import UserRegForm from "./UserRegForm";

const Profile = () => {
  const [isEdit, setIsEdit] = useState(false);
  const { user } = useContext(MyContextProvider);

  // const handleEdit = (isEdit) => {
  //   setIsEdit(true);
  // };
  const { data: newUser, isloading } = useQuery({
    queryKey: ["user"],
    queryFn: async () => {
      return await axios.get(
        `http://localhost:5000/api/my/users/${user.email}`
      );
    },
  });
  return (
    <div>
      {isEdit ? (
        <UserRegForm
          user={newUser}
          isloading={isloading}
          setIsEdit={setIsEdit}
        />
      ) : (
        <UserProfile
          user={newUser}
          isloading={isloading}
          setIsEdit={setIsEdit}
        />
      )}
    </div>
  );
};

export default Profile;
