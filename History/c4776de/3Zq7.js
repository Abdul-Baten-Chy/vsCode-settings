import { createContext } from "react";
import { data } from "../../Data";
export dataContext = createContext(null)
const Context = ({children}) => {
    const tasks = data

  return <dataContext.provider>
    {children}
  </dataContext.provider>
};

export default Context;
