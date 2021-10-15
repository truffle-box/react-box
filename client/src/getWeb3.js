import Web3 from "web3";

const getWeb3 = async () => 
  new Promise((resolve, reject) => 
    window.addEventListener('load', async () => {
      if (typeof window.ethereum !== 'undefined') {
        console.log('MetaMask is installed!');
        //Request access to accounts
        window.ethereum.request({ method: 'eth_requestAccounts' });

        resolve(new Web3(window.ethereum));
      } else {
        console.log('Please install MetaMask https://metamask.io');
        reject(new Error("MetaMask not installed"))
      }
    })
  )



export default getWeb3;
