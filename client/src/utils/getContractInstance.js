const getContractInstance = async (web3, contractDefinition) => {
  // get network ID and the deployed address
  const networkId = await web3.eth.net.getId();
  const deployedAddress = contractDefinition.networks[networkId].address;

  // create the instance
  const instance = new web3.eth.Contract(
    contractDefinition.abi,
    deployedAddress
  );
  return instance;
};

export default getContractInstance;
