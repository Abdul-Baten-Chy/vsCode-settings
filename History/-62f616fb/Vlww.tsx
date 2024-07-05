import { useUpdateMyUser } from "@/Api/MyUserApi";
import UserProfileForm from "@/Forms/User_profile/UserProfile";

const UserProfilePage = () => {
  const { updateUser, isLoading: isUpdateLoading } = useUpdateMyUser();

  return <UserProfileForm onSave={updateUser} isLoading={isUpdateLoading} />;
};

export default UserProfilePage;
