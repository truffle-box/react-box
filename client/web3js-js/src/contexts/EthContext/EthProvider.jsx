import { useReducer } from "react";
import Web3 from "web3";
import EthContext from "./EthContext";
import { reducer, actions, initialState } from "./state";

function EthProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  const initWeb3 = () => {
    const web3 = new Web3(Web3.givenProvider || "ws://localhost:8545");
    dispatch({ type: actions.setWeb3, data: web3 });
  };

  const initAccounts = async () => {
    const accounts = await state.web3.eth.requestAccounts();
    dispatch({ type: actions.setAccounts, data: accounts });
  };

  return (
    <EthContext.Provider value={{
      state,
      dispatch,
      initWeb3,
      initAccounts
    }}>
      {children}
    </EthContext.Provider>
  );
}

export default EthProvider;
