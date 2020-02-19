import React, { useState, useEffect } from "react";
import SimpleStorageContract from "./contracts/SimpleStorage.json";
import getWeb3 from "./getWeb3";

import "./App.css";

function App(){
  
  const initialState = { storageValue: 0, web3: null, accounts: null, contract: null };
  
  const [state,modifyState] = useState(initialState);

  // initiliizing web3 and filling up the state with web3 accounts and contract
  // having trouble with account array empty then check metamask -> account settings -> connections -> add localhost there
  const init = () => new Promise((resolve,reject)=>{
    
    // get network provider and network instance
    getWeb3().then(web3 => {
      if(web3){
        
        // use web3 to get users account -> web3.eth.getAccounts()
        Promise.all([web3.eth.getAccounts(),web3.eth.net.getId()]).then(([accounts,networkId]) => {
          
          // Get the contract instance
          const deployedNetwork = SimpleStorageContract.networks[networkId];
          const instance = new web3.eth.Contract(
            SimpleStorageContract.abi,
            deployedNetwork && deployedNetwork.address,
          );
          
          // Set web3, accounts, and contract to the state, and then proceed with an
          // example of interacting with the contract's methods.
          modifyState(state.web3 = web3);
          modifyState(state.accounts = accounts);
          modifyState(state.contract=instance);
          resolve("all set");
          
        }).catch(err => reject(err)); // catch any error with accounts and getId
      }else{
        reject("Error initilizing Web3");
      }
    }).catch(err => reject(err)); // catch error during initilizing web3
  })

  const runExample = async () => {
    const { accounts, contract } = state;
    
    // Stores a given value, 5 by default.
    await contract.methods.set(5).send({ from: accounts[0] });
    
    // Get the value from the contract to prove it worked.
    const response = await contract.methods.get().call();
    
    // Update state with the result.
    modifyState({ ...state,storageValue: response });
  };

  useEffect(()=>{
    init().then(res=>{
      // once the state is initd and updated run the example
      runExample()
    }).catch(err=>{
      console.log(err)
    })
  },[])

  // ........ JSX below ...........
  
  if (state.web3 === null) {
    return (<div>Loading Web3, accounts, and contract...</div>);
  }
  
  return (
    <div className="App">
      <h1>Good to Go!</h1>
      <p>Your Truffle Box is installed and ready.</p>
      <h2>Smart Contract Example</h2>
      <p>
        If your contracts compiled and migrated successfully, below will show
        a stored value of 5 (by default).
      </p>
      <p>
        Try changing the value stored on <strong>line 40</strong> of App.js.
      </p>
      <div>The stored value is: {state.storageValue}</div>
    </div>
  );
}

export default App;
