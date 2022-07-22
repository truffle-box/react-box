var SimpleStorage = artifacts.require("SimpleStorage");

const main = async (cb) => {
    try {
        let contract = await SimpleStorage.deployed();
        console.log((await contract.read()).toNumber());
        await contract.write(1);
        console.log((await contract.read()).toNumber());
    } catch(err) {
        console.log(err);
    }
    cb();
}

module.exports = main;