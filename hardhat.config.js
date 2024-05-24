require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-ethers");
module.exports = {
  solidity: "0.8.24",
  paths: {
    artifacts: './src/artifacts', 
  },
  networks: {

    hardhat: {
      chainId: 1337
    }
  }
};
