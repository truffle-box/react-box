import Web3 from "web3";

function findWeb3() {
  return new Promise((resolve, reject) => {
    // Modern dapp browsers...
    if (window.ethereum) {
      const web3 = new Web3(window.ethereum);
      try {
        // Request account access if needed.
        // See details here: https://medium.com/metamask/https-medium-com-metamask-breaking-change-injecting-web3-7722797916a8
        window.ethereum.enable().then(() => resolve(web3));
      } catch (error) {
        reject(error);
      }
    }
    // Legacy dapp browsers...
    else if (window.web3) {
      // Use Mist/MetaMask's provider.
      const web3 = window.web3;
      console.log("Injected web3 detected.");
      resolve(web3);
    }
    // Fallback to localhost; use dev console port by default...
    else {
      const provider = new Web3.providers.HttpProvider(
        "http://127.0.0.1:9545"
      );
      const web3 = new Web3(provider);
      console.log("No web3 instance injected, using Local web3.");
      resolve(web3);
    }
  });
}

const getWeb3 = () =>
  new Promise((resolve, reject) => {
    findWeb3()
      .then(resolve)
      .catch(_ => {
        // Wait for loading completion to avoid race conditions with web3 injection timing.
        window.addEventListener("load", async () => findWeb3().then(resolve).catch(reject));
      })
  });

export default getWeb3;
