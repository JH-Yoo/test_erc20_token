const Test = artifacts.require('./Test')

const name = 'Test'
const symbole = 'TS'
const decimals = 18
const initialSupply = 10000

module.exports = function(deployer) {
  deployer.deploy(Test, name, symbole, decimals, initialSupply);
};