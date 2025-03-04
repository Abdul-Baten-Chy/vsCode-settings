import { useAuth0 } from "@auth0/auth0-react";
import { useMutation } from "@tanstack/react-query";
const API_BASE_URL = import.meta.env.VITE_BASE_URL;

type CreateUserRequest = {
  auth0Id: string;
  email: string;
};

export const useCreateMyUser = () => {
  const { getAccessTokenSilently } = useAuth0();

  const createUser = useMutation(async (user: CreateUserRequest) => {
    const accessToken = await getAccessTokenSilently();
    const response = await fetch(`${API_BASE_URL}/api/my/user`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });

    if (!response.ok) {
      throw new Error("Failed to create user");
    }

    return response.json(); // Assuming the response contains the created user data
  });

  return createUser;
};
