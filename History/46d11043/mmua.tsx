import { useNavigate } from "react-router-dom";

type Props = {
  children: React.ReactNode;
};
const AuthProvider = ({ children }: Props) => {
  const navigate = useNavigate();
  const domain = import.meta.env.VITE_DOMAIN;
  const clientId = import.meta.env.VITE_CLIENTID;
  const redirectUri = import.meta.env.VITE_REDIRECTURI;

  return;
  <Auth0Provider>{children}</Auth0Provider>;
};

export default AuthProvider;
