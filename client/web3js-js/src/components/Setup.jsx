function Setup() {

  return (
    <>
      <h2>Preparation</h2>

      <details>
        <summary>Install</summary>
        <p>Install Truffle and Ganache globally.</p>
        <code>$ npm install -g truffle ganache</code>
      </details>

      <details>
        <summary>Ganache and MetaMask</summary>
        <p>
          Open a terminal and run Ganache, a simulated Ethereum blockchain on your machine.
        </p>
        <code>$ ganache</code>
        <p>From the list of generated private keys, import the first one to MetaMask.</p>
      </details>

      <details>
        <summary>Truffle</summary>
        <p>
          Keep Ganache running and open another terminal. Let's compile and deploy our
          contracts to Ganache.
        </p>
        <code>
          {`$ cd truffle\n`}
          {`$ truffle migrate --network development\n`}
          <span className="dim-color">
            # The `development` network points to Ganache, it's configured in
            truffle/truffle-config.js on line 45.
          </span>
        </code>
      </details>
    </>
  );
}

export default Setup;
