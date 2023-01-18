// https://eth-goerli.g.alchemy.com/v2/gTtn4rl8zTzevQdj8897MGgyF6aZWcjO

require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    goerli: {
      url: 'https://eth-goerli.g.alchemy.com/v2/gTtn4rl8zTzevQdj8897MGgyF6aZWcjO',
      accounts: ['95d335b642b6a6d0f5d9ab71f810c7987b00bd65d1550d3ce65c14ade87720ab']
    }
  }
}