import Web3 from 'web3'

// Connects to a web3 instance injected into the browser by Metamask or Mist.
// This isn't used by the box example but it's nice to have to experiment with.
let getInjectedWeb3 = new Promise(function(resolve, reject) {
  if (window.web3 === undefined) reject();

  var web3 = new Web3(window.web3.currentProvider)
  console.log('Injected web3 detected.')
  resolve({web3: web3})
})

export default getInjectedWeb3

