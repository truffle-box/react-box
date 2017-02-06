# !

Currently in development. All this will do right now is start a react app that stores int 5 in the SimpleStorage contract.

## Truffle 3 Webpack React Redux Metamask Authentication

All the goodies in this starter. Comes with sample login views, a users solidity contract and interaction with the simple storage contract.

This is Truffle 3 integrated with a freshly ejected Create React App Webpack setup.

### Thanks

The routing functions of this are largely thanks to redux-auth-wrapper.

## How to Use

Until truffle-solidity-loader is updated, we'll compile our contracts manually, then start the webpack dev server.

1. Within the project directory, run ```npm install```.
2. make sure you have testrpc running (```testrpc``` in a separate console window). By default, this expects the testrpc to be on localhost:8545.
3. ```truffle compile``` to create the json contract artifacts
4. ```truffle migrate``` to deploy the contracts onto the network
5. ```npm run start``` to compile the javascript and html assets and start the webpack dev server
