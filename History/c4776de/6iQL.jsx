import { createContext } from "react";
import { data } from "../../Data";
export DataContext = createContext(null)
const Context = ({children}) => {
    const tasks = data

  return <DataContext.provider value={tasks}>
    {children}
  </DataContext.provider>
};

export default Context;
