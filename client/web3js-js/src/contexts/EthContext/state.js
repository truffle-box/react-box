const actions = {
  setWeb3: "SET_WEB3",
  setAccounts: "SET_ACCOUNTS",
  setNetworkID: "SET_NETWORK_ID",
  setContract: "SET_CONTRACT"
};

const initialState = {
  web3: null,
  accounts: null,
  networkID: null,
  contract: null
};

const reducer = (state, action) => {
  const { type, data } = action;
  switch (type) {
    case actions.setWeb3:
      return { ...state, web3: data };
    case actions.setAccounts:
      return { ...state, accounts: data };
    case actions.setNetworkID:
      return { ...state, networkID: data };
    case actions.setContract:
      return { ...state, contract: data };
    default:
      throw new Error("Undefined reducer action type");
  }
};

export {
  actions,
  initialState,
  reducer
};
