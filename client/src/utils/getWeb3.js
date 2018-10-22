import Web3 from "web3";

const getWeb3 = () =>
  new Promise((resolve, reject) => {
    // Wait for loading completion to avoid race conditions with web3 injection timing.
    window.addEventListener("load", async () => {
      // Modern dapp browsers...
      if (window.ethereum) {
        const { ethereum } = window;

        const web3 = new Web3(ethereum);
        try {
          // Request account access if needed
          await ethereum.enable();
          // Acccounts now exposed
          resolve(web3);
        } catch (error) {
          alert(error);
        }
      }
      // Legacy dapp browsers...
      else if (window.web3) {
        let web3 = window.web3;

        // Checking if Web3 has been injected by the browser (Mist/MetaMask).
        const alreadyInjected = typeof web3 !== "undefined";

        if (alreadyInjected) {
          // Use Mist/MetaMask's provider.
          web3 = new Web3(web3.currentProvider);
          console.log("Injected web3 detected.");
          resolve(web3);
        } else {
          // Fallback to localhost if no web3 injection. We've configured this to
          // use the development console's port by default.
          const provider = new Web3.providers.HttpProvider(
            "http://127.0.0.1:9545"
          );
          web3 = new Web3(provider);
          console.log("No web3 instance injected, using Local web3.");
          resolve(web3);
        }
      }
      // Non-dapp browsers...
      else {
        console.log(
          "Non-Ethereum browser detected. You should consider trying MetaMask!"
        );
      }
    });
  });

export default getWeb3;
