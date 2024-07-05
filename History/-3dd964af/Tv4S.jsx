import { useContext } from "react";

const dataContext = useContext(null);

const Data = ({ children }) => {
  return <dataContext.provider value={a}>{children}</dataContext.provider>;
};

export default Data;
