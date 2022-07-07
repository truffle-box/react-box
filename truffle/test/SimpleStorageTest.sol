// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

import "../contracts/SimpleStorage.sol";
// These files are dynamically created at test time
import "truffle/Assert.sol";
import "truffle/DeployedAddresses.sol";

contract SimpleStorageTest {

  function testWriteValue() public {
    SimpleStorage simpleStorage = SimpleStorage(DeployedAddresses.SimpleStorage());

    Assert.equal(simpleStorage.read(), 0, "Contract should have 0 stored");
    simpleStorage.write(1);
    Assert.equal(simpleStorage.read(), 1, "Contract should have 1 stored");
    simpleStorage.write(2);
    Assert.equal(simpleStorage.read(), 2, "Contract should have 2 stored");
  }
}
