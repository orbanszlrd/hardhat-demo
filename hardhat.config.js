require('@nomiclabs/hardhat-waffle');

const dotenv = require('dotenv');

dotenv.config();

const { GOERLI_URL, ACCOUNT_ONE, ACCOUNT_TWO } = process.env;

module.exports = {
  solidity: '0.8.17',
  networks: {
    goerli: {
      url: GOERLI_URL,
      accounts: [ACCOUNT_ONE, ACCOUNT_TWO],
    },
  },
};
