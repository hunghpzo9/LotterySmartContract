// deploy.js
const { ethers } = require('hardhat');

async function main() {
  try {
    const MyContract = await ethers.getContractFactory("LotteryGame");
    const myContract = await MyContract.deploy(8135);
    console.log("MyContract deployed to:", myContract.target);
  } catch (err) {
    console.log(err);
  }
}


main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
