/* eslint-disable react/prop-types */

import { createContext } from "react";

const dataContext = createContext(null);

const Data = ({ children }) => {
  return <dataContext.provider value={null}>{children}</dataContext.provider>;
};

export default Data;
