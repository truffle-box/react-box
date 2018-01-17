import Web3 from 'web3'

// Connects to a local development client running port 9545
let getLocalWeb3 = new Promise(function(resolve, reject){
    var provider = new Web3.providers.HttpProvider('http://127.0.0.1:9545')
    var web3 = new Web3(provider)

    console.log('Using Local web3')
    resolve({web3: web3})
})

export default getLocalWeb3

