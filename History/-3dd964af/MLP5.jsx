/* eslint-disable react/prop-types */
import { useContext } from "react";

const dataContext = useContext(null);

const Data = ({ children }) => {
  return <dataContext.provider value={null}>{children}</dataContext.provider>;
};

export default Data;
