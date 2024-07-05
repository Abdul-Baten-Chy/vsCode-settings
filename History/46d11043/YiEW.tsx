import { AppState, Auth0Provider } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";

type Props = {
  children: React.ReactNode;
};
const AuthProvider = ({ children }: Props) => {
  const navigate = useNavigate();
  const domain = import.meta.env.VITE_DOMAIN;
  const clientId = import.meta.env.VITE_CLIENTID;
  const redirectUri = import.meta.env.VITE_REDIRECTURI;
  if (!domain || !clientId || !redirectUri) {
    throw new Error("Cant initiate auth");
  }
  const onRedirectCallback = (appState?: AppState) => {
    navigate(appState?.returnTo || "/");
  };
  return (
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      authorizationParams={{
        redirect_uri: redirectUri,
      }}
      onRedirectCallback={onRedirectCallback}
    >
      {children}
    </Auth0Provider>
  );
};

export default AuthProvider;
