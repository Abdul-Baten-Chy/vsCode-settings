import { useMutation } from "@tanstack/react-query";

const API_BASE_URL = import.meta.env.VITE_BASE_URL;

type CreateUserRequest = {
  auth0Id: string;
  email: string;
};

export const useCreateMyUser = () => {
  const createMyUserRequest = async (user: CreateUserRequest) => {
    const response = await fetch(`http://localhost:4000/api/my/user`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });

    if (!response.ok) {
      throw new Error("Failed to create user");
    }
  };

  const {
    mutateAsync: createUser,
    isLoading,
    isError,
    isSuccess,
  } = useMutation(createMyUserRequest);

  return {
    createUser,
    isLoading,
    isError,
    isSuccess,
  };
};
