import { createContext, useContext, useReducer } from "react";
import { reducer, initialState } from "./state";

const EthContext = createContext();

const useEth = () => useContext(EthContext);

const EthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <EthContext.Provider value={[state, dispatch]}>
      {children}
    </EthContext.Provider>
  );
};

export {
  EthContext as default,
  useEth,
  EthProvider
};
