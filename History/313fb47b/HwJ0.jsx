import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import UserProfile from "../components/UserProfile";
import UserRegForm from "./UserRegForm";

const Profile = () => {
  const [isEdit, setIsEdit] = useState(true);

  // const handleEdit = (isEdit) => {
  //   setIsEdit(true);
  // };
  const query = useQuery({
    queryKey: ["user"],
    queryFn: async () => {
      const user = await axios.get("http://localhost:5000/api/my/users");
    },
  });
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
