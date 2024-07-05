import { auth } from "express-oauth2-jwt-bearer";
export const jwtCheck = auth({
  audience: "harvesthub-api",
  issuerBaseURL: "https://dev-crktfga21h43a417.us.auth0.com/",
  tokenSigningAlg: "RS256",
});
